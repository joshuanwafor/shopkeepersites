"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  AppShell,
  AppShellMain,
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  TextInput,
  Paper,
  Image,
  Box,
  Alert,
  Loader,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { StoreHeader } from "@/components/store/StoreHeader";
import { useCart } from "@/context/cart-context";
import {
  useStorefrontProfile,
  useValidateCart,
  useInitiateCheckout,
  buildCheckoutPayload,
} from "@/hooks/use-storefront";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount / 100);
}

export default function CheckoutPage() {
  const { data: profileRes } = useStorefrontProfile();
  const profile = profileRes?.data;
  const { items, totalItems, totalAmount } = useCart();
  const validateCart = useValidateCart();
  const initiateCheckout = useInitiateCheckout();

  const form = useForm({
    initialValues: {
      email: "",
      fullName: "",
      phone: "",
      customerNotes: "",
    },
    validate: {
      email: (v) => (!v ? "Email is required" : /^\S+@\S+$/.test(v) ? null : "Invalid email"),
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    const payload = buildCheckoutPayload(
      items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
      {
        email: values.email,
        fullName: values.fullName || undefined,
        phone: values.phone || undefined,
      },
      typeof window !== "undefined" ? `${window.location.origin}/orders?success=1` : undefined,
      values.customerNotes || undefined
    );

    try {
      const validateRes = await validateCart.mutateAsync({
        domain: payload.domain,
        items: payload.items,
      });
      const validation = validateRes.data;
      if (!validation?.isValid) {
        form.setFieldError("email", validation?.errors?.join(", ") ?? "Cart validation failed");
        return;
      }
      const checkoutRes = await initiateCheckout.mutateAsync(payload);
      const data = checkoutRes.data;
      if (data?.paymentUrl) {
        window.location.href = data.paymentUrl;
      } else {
        form.setFieldError("email", "Checkout failed. Please try again.");
      }
    } catch {
      form.setFieldError("email", "Checkout failed. Please try again.");
    }
  });

  if (totalItems === 0 && !validateCart.isPending && !initiateCheckout.isPending) {
    return (
      <AppShell header={{ height: 60 }} padding="md">
        <StoreHeader storeName={profile?.name ?? "Store"} />
        <AppShellMain>
          <Container size="sm">
            <Alert title="Your cart is empty">
              <Text mb="md">Add items from the store to checkout.</Text>
              <Button component={Link} href="/" variant="light">
                Continue shopping
              </Button>
            </Alert>
          </Container>
        </AppShellMain>
      </AppShell>
    );
  }

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <StoreHeader storeName={profile?.name ?? "Store"} />
      <AppShellMain>
        <Container size="md">
          <Title order={2} mb="lg">
            Checkout
          </Title>
          <form onSubmit={handleSubmit}>
            <Stack gap="lg">
              <Paper p="md" withBorder>
                <Text fw={600} mb="sm">
                  Cart ({totalItems} items)
                </Text>
                <Stack gap="xs">
                  {items.map((item) => (
                    <Group key={item.product.id} justify="space-between">
                      <Group gap="sm">
                        <Box w={48} h={48} bg="gray.2">
                          {item.product.primaryPhoto ? (
                            <Image
                              src={item.product.primaryPhoto}
                              alt=""
                              w={48}
                              h={48}
                              fit="cover"
                            />
                          ) : null}
                        </Box>
                        <div>
                          <Text size="sm" fw={500}>
                            {item.product.name}
                          </Text>
                          <Text size="xs" c="dimmed">
                            {item.quantity} × {formatPrice(item.product.amount)}
                          </Text>
                        </div>
                      </Group>
                      <Text fw={600}>
                        {formatPrice(item.product.amount * item.quantity)}
                      </Text>
                    </Group>
                  ))}
                </Stack>
                <Group justify="flex-end" mt="md">
                  <Text fw={700}>Total: {formatPrice(totalAmount)}</Text>
                </Group>
              </Paper>

              <Text fw={600}>Contact details</Text>
              <TextInput
                label="Email"
                placeholder="you@example.com"
                required
                {...form.getInputProps("email")}
              />
              <TextInput
                label="Full name"
                placeholder="Your name"
                {...form.getInputProps("fullName")}
              />
              <TextInput
                label="Phone"
                placeholder="+234..."
                {...form.getInputProps("phone")}
              />
              <TextInput
                label="Order notes (optional)"
                placeholder="Delivery instructions, etc."
                {...form.getInputProps("customerNotes")}
              />

              {(validateCart.isError || initiateCheckout.isError) && (
                <Alert color="red">
                  Something went wrong. Please check your details and try again.
                </Alert>
              )}

              <Group>
                <Button
                  type="submit"
                  color="brand"
                  loading={validateCart.isPending || initiateCheckout.isPending}
                  loaderProps={{ type: "dots" }}
                >
                  Proceed to payment
                </Button>
                <Button component={Link} href="/" variant="default">
                  Continue shopping
                </Button>
              </Group>
            </Stack>
          </form>
        </Container>
      </AppShellMain>
    </AppShell>
  );
}
