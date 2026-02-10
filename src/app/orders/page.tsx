"use client";

import { Suspense, useState } from "react";
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
import {
  useStorefrontProfile,
  useOrdersByEmail,
  useOrderStatus,
} from "@/hooks/use-storefront";

function OrdersContent() {
  const searchParams = useSearchParams();
  const success = searchParams.get("success") === "1";
  const intentRef = searchParams.get("intentReference");

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

  const orders = (ordersRes?.data as unknown as Array<{ id?: string; reference?: string; status?: string; createdAt?: string }>) ?? [];
  const orderStatus = statusRes?.data;

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="sm" className="max-w-xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        <Title order={2} className="store-classic-title text-2xl text-stone-800 mb-2">
          View your orders
        </Title>
        <Text className="text-stone-600 mb-6">
          Enter the email address you used when placing the order.
        </Text>

        {success && (
          <Alert color="green" title="Payment successful" className="mb-6 rounded border border-green-200 bg-green-50/50">
            Thank you. Your order has been received. You can check its status below by entering your email.
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
          <Paper p="md" className="store-classic-paper mb-6">
            <Text size="sm" className="text-stone-500">
              Order reference: {orderStatus.intentReference}
            </Text>
            <Text fw={600} className="text-stone-800 mt-1">Status: {orderStatus.status}</Text>
            <Text size="sm" className="text-stone-600">Payment: {orderStatus.paymentStatus}</Text>
            {orderStatus.orderReference && (
              <Text size="sm" className="text-stone-600">Order ref: {orderStatus.orderReference}</Text>
            )}
          </Paper>
        )}

        {submittedEmail && ordersLoading && (
          <Stack gap="sm">
            <Skeleton height={60} className="rounded" />
            <Skeleton height={60} className="rounded" />
          </Stack>
        )}

        {submittedEmail && !ordersLoading && Array.isArray(orders) && orders.length === 0 && (
          <Paper p="md" className="store-classic-paper">
            <Text className="text-stone-500">No orders found for this email.</Text>
          </Paper>
        )}

        {submittedEmail && !ordersLoading && Array.isArray(orders) && orders.length > 0 && (
          <Stack gap="sm">
            <Text fw={600} className="text-stone-800 font-serif">Orders</Text>
            {orders.map((order: { id?: string; reference?: string; status?: string; createdAt?: string }, i: number) => (
              <Paper key={order.id ?? i} p="md" className="store-classic-paper">
                <Group justify="space-between">
                  <div>
                    <Text size="sm" className="text-stone-500">
                      {order.reference ?? order.id ?? `Order #${i + 1}`}
                    </Text>
                    <Text fw={500} className="text-stone-800">{order.status ?? "—"}</Text>
                  </div>
                  {order.createdAt && (
                    <Text size="xs" className="text-stone-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </Text>
                  )}
                </Group>
              </Paper>
            ))}
          </Stack>
        )}

        <Button component={Link} href="/" variant="outline" className="mt-10 border-stone-300 text-stone-700 hover:bg-stone-100 rounded">
          Back to store
        </Button>
      </Container>
    </StoreLayout>
  );
}

export default function OrdersPage() {
  return (
    <Suspense fallback={
      <StoreLayout storeName="Store">
        <Container size="sm" className="max-w-xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
          <Skeleton height={200} className="rounded" />
        </Container>
      </StoreLayout>
    }>
      <OrdersContent />
    </Suspense>
  );
}
