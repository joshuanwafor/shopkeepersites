"use client";

import { Suspense } from "react";
import Link from "next/link";
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  TextInput,
  Textarea,
  Paper,
  Image,
  Box,
  Alert,
  Skeleton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { StoreLayout } from "@/components/store/StoreLayout";
import { useCart } from "@/context/cart-context";
import {
  useStorefrontProfile,
  useStorefrontDomain,
  useStorefrontQueryString,
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

function CheckoutContent() {
  const domain = useStorefrontDomain();
  const queryString = useStorefrontQueryString();
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
      address: "",
      city: "",
      state: "",
      postalCode: "",
      customerNotes: "",
    },
    validate: {
      email: (v) => (!v ? "Email is required" : /^\S+@\S+$/.test(v) ? null : "Invalid email"),
      address: (v) => (!v ? "Delivery address is required" : null),
      city: (v) => (!v ? "City is required" : null),
      state: (v) => (!v ? "State is required" : null),
    },
  });

  const handleSubmit = form.onSubmit(async (values) => {
    // Build shipping address object
    const shippingAddress = {
      address: values.address,
      city: values.city,
      state: values.state,
      postalCode: values.postalCode || undefined,
    };

    const payload = buildCheckoutPayload(
      domain,
      items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
      {
        email: values.email,
        fullName: values.fullName || undefined,
        phone: values.phone || undefined,
      },
      shippingAddress,
      typeof window !== "undefined" ? `${window.location.origin}/orders?success=1${queryString ? `&${queryString.slice(1)}` : ""}` : undefined,
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
      <StoreLayout storeName={profile?.name ?? "Store"}>
        <Container size="sm" className="max-w-xl mx-auto py-12 px-4">
          <Paper className="store-classic-paper p-6">
            <Title order={2} className="store-classic-title text-stone-800 mb-2">
              Your cart is empty
            </Title>
            <Text className="text-stone-600 mb-6">Add items from the store to checkout.</Text>
            <Button component={Link} href={queryString ? `/${queryString}` : "/"} variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100">
              Continue shopping
            </Button>
          </Paper>
        </Container>
      </StoreLayout>
    );
  }

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="md" className="max-w-2xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        <Title order={2} className="store-classic-title text-2xl text-stone-800 mb-8">
          Checkout
        </Title>
        <form onSubmit={handleSubmit}>
          <Stack gap="lg">
            <Paper p="md" className="store-classic-paper">
              <Text fw={600} className="text-stone-800 font-serif mb-4">
                Cart ({totalItems} items)
              </Text>
              <Stack gap="sm">
                {items.map((item) => (
                  <Group key={item.product.id} justify="space-between" className="py-2 border-b border-stone-100 last:border-0">
                    <Group gap="sm">
                      <Box w={48} h={48} className="bg-stone-100 rounded overflow-hidden shrink-0">
                        {item.product.primaryPhoto ? (
                          <Image src={item.product.primaryPhoto} alt="" w={48} h={48} fit="cover" />
                        ) : null}
                      </Box>
                      <div>
                        <Text size="sm" fw={500} className="text-stone-800">
                          {item.product.name}
                        </Text>
                        <Text size="xs" className="text-stone-500">
                          {item.quantity} × {formatPrice(item.product.amount)}
                        </Text>
                      </div>
                    </Group>
                    <Text fw={600} className="text-stone-700">
                      {formatPrice(item.product.amount * item.quantity)}
                    </Text>
                  </Group>
                ))}
              </Stack>
              <Group justify="flex-end" mt="md" className="pt-4 border-t border-stone-200">
                <Text fw={700} className="text-stone-800">
                  Total: {formatPrice(totalAmount)}
                </Text>
              </Group>
            </Paper>

            <Text fw={600} className="text-stone-800 font-serif">
              Contact details
            </Text>
            <TextInput
              label="Email"
              placeholder="you@example.com"
              required
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Full name"
              placeholder="Your name"
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("fullName")}
            />
            <TextInput
              label="Phone"
              placeholder="+234..."
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("phone")}
            />

            <Text fw={600} className="text-stone-800 font-serif mt-4">
              Delivery details
            </Text>
            <Textarea
              label="Delivery address"
              placeholder="Street address, apartment, suite, etc."
              required
              minRows={2}
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("address")}
            />
            <Group grow>
              <TextInput
                label="City"
                placeholder="City"
                required
                classNames={{ input: "rounded border-stone-300" }}
                {...form.getInputProps("city")}
              />
              <TextInput
                label="State"
                placeholder="State"
                required
                classNames={{ input: "rounded border-stone-300" }}
                {...form.getInputProps("state")}
              />
            </Group>
            <TextInput
              label="Postal code (optional)"
              placeholder="Postal code"
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("postalCode")}
            />
            <Textarea
              label="Additional notes (optional)"
              placeholder="Delivery instructions, special requests, etc."
              minRows={2}
              classNames={{ input: "rounded border-stone-300" }}
              {...form.getInputProps("customerNotes")}
            />

            {(validateCart.isError || initiateCheckout.isError) && (
              <Alert color="red" className="rounded border border-red-200">
                Something went wrong. Please check your details and try again.
              </Alert>
            )}

            <Group className="pt-2">
              <Button
                type="submit"
                className="bg-stone-700 hover:bg-stone-800 text-white font-normal rounded"
                loading={validateCart.isPending || initiateCheckout.isPending}
                loaderProps={{ type: "dots" }}
              >
                Proceed to payment
              </Button>
              <Button component={Link} href={queryString ? `/${queryString}` : "/"} variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded">
                Continue shopping
              </Button>
            </Group>
          </Stack>
        </form>
      </Container>
    </StoreLayout>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-stone-50">
          <Stack gap="md" className="max-w-2xl w-full mx-auto px-4">
            <Skeleton height={40} width={200} className="rounded" />
            <Skeleton height={120} className="rounded" />
            <Skeleton height={200} className="rounded" />
          </Stack>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
