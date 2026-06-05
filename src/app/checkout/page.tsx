"use client";

import { Suspense, useEffect, useState } from "react";
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
  ActionIcon,
  Radio,
  Divider,
  Loader,
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
  useEstimateFees,
  buildCheckoutPayload,
  type DeliveryMethod,
} from "@/hooks/use-storefront";

const METHOD_META: Record<DeliveryMethod, { label: string; hint: string }> = {
  pickup: { label: "Pickup", hint: "Collect in store — no delivery fee" },
  platformDelivery: { label: "Delivery", hint: "Delivered to your address" },
  businessDelivery: { label: "Store delivery", hint: "Delivered by the store" },
};
const DEFAULT_METHODS: DeliveryMethod[] = ["pickup", "platformDelivery"];

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount );
}

function CheckoutContent() {
  const domain = useStorefrontDomain();
  const queryString = useStorefrontQueryString();
  const { data: profileRes } = useStorefrontProfile();
  const profile = profileRes?.data;
  const { items, totalItems, totalAmount, updateQuantity, removeItem } = useCart();
  const validateCart = useValidateCart();
  const initiateCheckout = useInitiateCheckout();

  const supportedMethods =
    (profile?.deliveryConfig?.supportedMethods as DeliveryMethod[] | undefined) ??
    DEFAULT_METHODS;
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locating, setLocating] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      fullName: "",
      phone: "",
      deliveryMethod: "platformDelivery" as DeliveryMethod,
      address: "",
      city: "",
      state: "",
      postalCode: "",
      customerNotes: "",
    },
    validate: {
      email: (v) => (!v ? "Email is required" : /^\S+@\S+$/.test(v) ? null : "Invalid email"),
      address: (v, values) =>
        values.deliveryMethod !== "pickup" && !v ? "Delivery address is required" : null,
      city: (v, values) =>
        values.deliveryMethod !== "pickup" && !v ? "City is required" : null,
      state: (v, values) =>
        values.deliveryMethod !== "pickup" && !v ? "State is required" : null,
    },
  });

  const deliveryMethod = form.values.deliveryMethod;
  const needsAddress = deliveryMethod !== "pickup";

  // Keep the selected method within what the store actually supports (once the profile loads).
  useEffect(() => {
    if (supportedMethods.length && !supportedMethods.includes(deliveryMethod)) {
      form.setFieldValue("deliveryMethod", supportedMethods[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supportedMethods.join(",")]);

  const feesQuery = useEstimateFees({
    items: items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
    deliveryMethod,
    userLat: coords?.lat,
    userLng: coords?.lng,
  });
  const fees = feesQuery.data?.data;

  function requestLocation() {
    if (typeof navigator === "undefined" || !navigator.geolocation) return;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocating(false);
      },
      () => setLocating(false),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  const handleSubmit = form.onSubmit(async (values) => {
    // Pickup needs no address; delivery methods do.
    const shippingAddress =
      values.deliveryMethod !== "pickup"
        ? {
            address: values.address,
            city: values.city,
            state: values.state,
            postalCode: values.postalCode || undefined,
          }
        : undefined;

    const callbackUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/orders?success=1${queryString ? `&${queryString.slice(1)}` : ""}`
        : undefined;

    const payload = buildCheckoutPayload(
      domain,
      items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
      {
        email: values.email,
        fullName: values.fullName || undefined,
        phone: values.phone || undefined,
      },
      {
        deliveryMethod: values.deliveryMethod,
        shippingAddress,
        userLat: coords?.lat,
        userLng: coords?.lng,
        callbackUrl,
        customerNotes: values.customerNotes || undefined,
      }
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
                        <Group gap={8} mt={4}>
                          <ActionIcon
                            variant="subtle"
                            color="gray"
                            radius="sm"
                            className="border border-stone-300 text-stone-700 hover:bg-stone-100"
                            aria-label={`Decrease quantity of ${item.product.name}`}
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            -
                          </ActionIcon>
                          <Text size="sm" fw={600} className="text-stone-700 min-w-4 text-center">
                            {item.quantity}
                          </Text>
                          <ActionIcon
                            variant="subtle"
                            color="gray"
                            radius="sm"
                            className="border border-stone-300 text-stone-700 hover:bg-stone-100"
                            aria-label={`Increase quantity of ${item.product.name}`}
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            +
                          </ActionIcon>
                          <Text size="xs" className="text-stone-500 ml-1">
                            × {formatPrice(item.product.amount)}
                          </Text>
                        </Group>
                      </div>
                    </Group>
                    <Stack gap={4} align="flex-end">
                      <Text fw={600} className="text-stone-700">
                        {formatPrice(item.product.amount * item.quantity)}
                      </Text>
                      <Button
                        variant="subtle"
                        size="compact-xs"
                        className="text-stone-500 hover:bg-stone-100"
                        onClick={() => removeItem(item.product.id)}
                      >
                        Remove
                      </Button>
                    </Stack>
                  </Group>
                ))}
              </Stack>
              <Stack gap={6} mt="md" className="pt-4 border-t border-stone-200">
                <Group justify="space-between">
                  <Text size="sm" className="text-stone-500">Subtotal</Text>
                  <Text size="sm" className="text-stone-700">{formatPrice(fees?.subTotal ?? totalAmount)}</Text>
                </Group>
                {needsAddress && (
                  <Group justify="space-between">
                    <Text size="sm" className="text-stone-500">Delivery fee</Text>
                    <Text size="sm" className="text-stone-700">
                      {feesQuery.isFetching ? (
                        <Loader size="xs" color="gray" />
                      ) : fees ? (
                        fees.isFreeDelivery ? "Free" : formatPrice(fees.deliveryFee)
                      ) : (
                        "—"
                      )}
                    </Text>
                  </Group>
                )}
                {!!fees?.serviceFee && (
                  <Group justify="space-between">
                    <Text size="sm" className="text-stone-500">Service fee</Text>
                    <Text size="sm" className="text-stone-700">{formatPrice(fees.serviceFee)}</Text>
                  </Group>
                )}
                <Divider className="border-stone-200" />
                <Group justify="space-between">
                  <Text fw={700} className="text-stone-800">Total</Text>
                  <Text fw={700} className="text-stone-800">{formatPrice(fees?.totalAmount ?? totalAmount)}</Text>
                </Group>
              </Stack>
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
              Delivery method
            </Text>
            <Radio.Group {...form.getInputProps("deliveryMethod")}>
              <Stack gap="xs">
                {supportedMethods.map((m) => (
                  <Paper
                    key={m}
                    p="sm"
                    className={`store-classic-paper border rounded cursor-pointer ${
                      deliveryMethod === m ? "border-stone-400 bg-stone-50" : "border-stone-200"
                    }`}
                    onClick={() => form.setFieldValue("deliveryMethod", m)}
                  >
                    <Radio
                      value={m}
                      label={METHOD_META[m].label}
                      description={METHOD_META[m].hint}
                      classNames={{ label: "text-stone-800 font-medium", description: "text-stone-500" }}
                    />
                  </Paper>
                ))}
              </Stack>
            </Radio.Group>

            {deliveryMethod === "platformDelivery" && (
              <Button
                type="button"
                variant="light"
                size="xs"
                color="gray"
                loading={locating}
                onClick={requestLocation}
                className="self-start border border-stone-300 text-stone-700 hover:bg-stone-100 rounded"
              >
                {coords ? "Location set ✓ — fee updated" : "Use my location for accurate delivery fee"}
              </Button>
            )}

            {needsAddress && (
              <>
                <Text fw={600} className="text-stone-800 font-serif mt-2">
                  Delivery address
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
              </>
            )}
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
