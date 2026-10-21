"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Title,
  Text,
  TextInput,
  Button,
  Stack,
  Paper,
  Alert,
  Skeleton,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useSearchParams } from "next/navigation";
import { StoreLayout } from "@/components/store/StoreLayout";
import { useCart } from "@/context/cart-context";
import {
  useStorefrontProfile,
  useStorefrontQueryString,
  useOrdersByEmail,
  useOrderStatus,
  readPendingCheckout,
  forgetPendingCheckout,
} from "@/hooks/use-storefront";
import { formatPrice } from "@/hooks";
import { formatReadyIn, preparationTimeOf } from "@/lib/preparation-time";

/** Plain words for the API's status values (e.g. "payment_completed" → "Payment completed"). */
function humanise(value?: string) {
  if (!value) return "—";
  const words = value.replace(/[_-]+/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function OrdersContent() {
  const searchParams = useSearchParams();
  const queryString = useStorefrontQueryString();
  const success = searchParams.get("success") === "1";
  // From the link, or the checkout this tab just sent to Paystack.
  const [intentRef, setIntentRef] = useState<string | null>(searchParams.get("intentReference"));
  useEffect(() => {
    if (!intentRef && success) setIntentRef(readPendingCheckout());
  }, [intentRef, success]);

  const { data: profileRes } = useStorefrontProfile();
  const profile = profileRes?.data;

  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const form = useForm({
    initialValues: { email: "" },
    validate: {
      email: (v) => (!v ? "Email is required" : /^\S+@\S+$/.test(v) ? null : "Invalid email"),
    },
  });

  const { data: ordersRes, isLoading: ordersLoading } = useOrdersByEmail(submittedEmail);
  const { data: statusRes, isLoading: statusLoading } = useOrderStatus(intentRef ?? null);

  // The API answers { domain, email, orders }.
  const orders = ordersRes?.data?.orders ?? [];
  const orderStatus = statusRes?.data;
  const confirming =
    !!orderStatus && !["order_created", "failed", "expired", "cancelled"].includes(orderStatus.status);
  const preparation = preparationTimeOf(profile);

  // The cart this tab paid for is now an order: empty it, once. A failed payment keeps it to try again.
  const { clearCart } = useCart();
  const orderCreated = orderStatus?.status === "order_created";
  useEffect(() => {
    if (!orderCreated || !intentRef || readPendingCheckout() !== intentRef) return;
    clearCart();
    forgetPendingCheckout();
  }, [orderCreated, intentRef, clearCart]);

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="sm" className="max-w-xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        <Title order={2} className="store-classic-title text-2xl text-stone-800 mb-2">
          View your orders
        </Title>
        <Text className="text-stone-600 mb-6">
          Enter the email address you used when placing the order.
        </Text>

        {success && !orderStatus && (
          <Alert color="green" title="Thank you" className="mb-6 rounded border border-green-200 bg-green-50/50">
            We&apos;re confirming your payment with the bank. You can check your order below by entering your email.
          </Alert>
        )}

        <form onSubmit={form.onSubmit((values) => setSubmittedEmail(values.email))}>
          <Group align="flex-end" mb="md" wrap="nowrap" gap="sm">
            <TextInput
              placeholder="you@example.com"
              className="flex-1 min-w-0"
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("email")}
            />
            <Button type="submit" className="bg-stone-700 hover:bg-stone-800 text-white font-normal rounded shrink-0">
              Find orders
            </Button>
          </Group>
        </form>

        {intentRef && statusLoading && <Skeleton height={80} className="rounded mb-4" />}
        {intentRef && orderStatus && (
          <Alert
            color={orderStatus.status === "order_created" ? "green" : confirming ? "gray" : "red"}
            title={
              orderStatus.status === "order_created"
                ? "Order placed"
                : confirming
                  ? "Confirming your payment…"
                  : "This order didn't go through"
            }
            className="mb-6 rounded border border-stone-200"
          >
            {orderStatus.status === "order_created"
              ? `Thank you. Your order${orderStatus.orderReference ? ` ${orderStatus.orderReference}` : ""} has been sent to the store.${
                  preparation ? ` ${formatReadyIn(preparation)} once the store accepts it.` : ""
                }`
              : confirming
                ? "This usually takes a few seconds. You can leave this page; we'll email you."
                : orderStatus.failureReason || "No money was taken for this order. Please try again."}
          </Alert>
        )}

        {submittedEmail && ordersLoading && (
          <Stack gap="sm">
            <Skeleton height={60} className="rounded" />
            <Skeleton height={60} className="rounded" />
          </Stack>
        )}

        {submittedEmail && !ordersLoading && orders.length === 0 && (
          <Paper p="md" className="store-classic-paper">
            <Text className="text-stone-500">No orders found for this email.</Text>
          </Paper>
        )}

        {submittedEmail && !ordersLoading && orders.length > 0 && (
          <Stack gap="sm">
            <Text fw={600} className="text-stone-800 font-serif">Orders</Text>
            {orders.map((order, i) => (
              <Paper key={order.id ?? i} p="md" className="store-classic-paper">
                <Group justify="space-between" align="flex-start" wrap="nowrap">
                  <div className="min-w-0">
                    <Text size="sm" className="text-stone-500">
                      {order.orderNumber || `Order #${i + 1}`}
                      {order.itemCount ? ` · ${order.itemCount} item${order.itemCount === 1 ? "" : "s"}` : ""}
                    </Text>
                    <Text fw={500} className="text-stone-800">{humanise(order.status)}</Text>
                    <Text size="xs" className="text-stone-500">Payment: {humanise(order.paymentStatus)}</Text>
                  </div>
                  <div className="text-right shrink-0">
                    {typeof order.totalAmount === "number" && (
                      <Text fw={600} className="text-stone-800">{formatPrice(order.totalAmount)}</Text>
                    )}
                    {order.createdAt && (
                      <Text size="xs" className="text-stone-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </Text>
                    )}
                  </div>
                </Group>
              </Paper>
            ))}
          </Stack>
        )}

        <Button component={Link} href={queryString ? `/${queryString}` : "/"} variant="outline" className="mt-10 border-stone-300 text-stone-700 hover:bg-stone-100 rounded">
          Back to store
        </Button>
      </Container>
    </StoreLayout>
  );
}

export default function OrdersPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-stone-50">
          <Stack gap="md" className="max-w-xl w-full mx-auto px-4">
            <Skeleton height={32} width={220} className="rounded" />
            <Skeleton height={200} className="rounded" />
          </Stack>
        </div>
      }
    >
      <OrdersContent />
    </Suspense>
  );
}
