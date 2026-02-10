"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AppShell,
  AppShellMain,
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
import { StoreHeader } from "@/components/store/StoreHeader";
import {
  useStorefrontProfile,
  useOrdersByEmail,
  useOrderStatus,
} from "@/hooks/use-storefront";

export default function OrdersPage() {
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
    <AppShell header={{ height: 60 }} padding="md">
      <StoreHeader storeName={profile?.name ?? "Store"} />
      <AppShellMain>
        <Container size="sm">
          <Title order={2} mb="lg">
            View your orders
          </Title>
          <Text c="dimmed" mb="md">
            Enter the email address you used when placing the order.
          </Text>

          {success && (
            <Alert color="green" title="Payment successful" mb="md">
              Thank you. Your order has been received. You can check its status below by entering your email.
            </Alert>
          )}

          <form
            onSubmit={form.onSubmit((values) => setSubmittedEmail(values.email))}
          >
            <Group align="flex-end" mb="md">
              <TextInput
                placeholder="you@example.com"
                style={{ flex: 1 }}
                {...form.getInputProps("email")}
              />
              <Button type="submit" color="brand">
                Find orders
              </Button>
            </Group>
          </form>

          {intentRef && statusLoading && <Skeleton height={80} />}
          {intentRef && orderStatus && (
            <Paper p="md" withBorder mb="md">
              <Text size="sm" c="dimmed">
                Order reference: {orderStatus.intentReference}
              </Text>
              <Text fw={600}>Status: {orderStatus.status}</Text>
              <Text size="sm">Payment: {orderStatus.paymentStatus}</Text>
              {orderStatus.orderReference && (
                <Text size="sm">Order ref: {orderStatus.orderReference}</Text>
              )}
            </Paper>
          )}

          {submittedEmail && ordersLoading && (
            <Stack gap="xs">
              <Skeleton height={60} />
              <Skeleton height={60} />
            </Stack>
          )}

          {submittedEmail && !ordersLoading && Array.isArray(orders) && orders.length === 0 && (
            <Paper p="md" withBorder>
              <Text c="dimmed">No orders found for this email.</Text>
            </Paper>
          )}

          {submittedEmail && !ordersLoading && Array.isArray(orders) && orders.length > 0 && (
            <Stack gap="sm">
              <Text fw={600}>Orders</Text>
              {orders.map((order: { id?: string; reference?: string; status?: string; createdAt?: string }, i: number) => (
                <Paper key={order.id ?? i} p="md" withBorder>
                  <Group justify="space-between">
                    <div>
                      <Text size="sm" c="dimmed">
                        {order.reference ?? order.id ?? `Order #${i + 1}`}
                      </Text>
                      <Text fw={500}>{order.status ?? "—"}</Text>
                    </div>
                    {order.createdAt && (
                      <Text size="xs" c="dimmed">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </Text>
                    )}
                  </Group>
                </Paper>
              ))}
            </Stack>
          )}

          <Button component={Link} href="/" variant="light" mt="xl">
            Back to store
          </Button>
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
