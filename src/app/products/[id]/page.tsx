"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Group,
  Paper,
  Image,
  Box,
  Badge,
  Skeleton,
  NumberInput,
  Divider,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Share, TickCircle, ArrowLeft2 } from "iconsax-react";
import { StoreLayout } from "@/components/store/StoreLayout";
import { formatPrice } from "@/hooks";
import {
  useStorefrontProfile,
  useStorefrontProduct,
  useStorefrontQueryString,
} from "@/hooks/use-storefront";
import { useCart } from "@/context/cart-context";

function ProductDetail() {
  const params = useParams();
  const productId =
    (Array.isArray(params?.id) ? params.id[0] : (params?.id as string)) ?? null;
  const queryString = useStorefrontQueryString();
  const { data: profileRes } = useStorefrontProfile();
  const profile = profileRes?.data;
  const { data, isLoading, error } = useStorefrontProduct(productId);
  const product = data?.data;
  const { addItem } = useCart();
  const clipboard = useClipboard({ timeout: 1800 });
  const [shared, setShared] = useState(false);
  const [qty, setQty] = useState(1);

  const isInStock =
    (product?.stockQuantity ?? 0) > 0 && product?.availability !== "out_of_stock";
  const backHref = queryString ? `/${queryString}` : "/";
  const shareDone = shared || clipboard.copied;

  async function handleShare() {
    if (typeof window === "undefined" || !product) return;
    const url = window.location.href;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: product.name, text: product.name, url });
        setShared(true);
        setTimeout(() => setShared(false), 1800);
      } catch {
        /* user cancelled the share sheet */
      }
      return;
    }
    clipboard.copy(url);
  }

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="lg" className="max-w-4xl mx-auto py-6 sm:py-10 px-3 sm:px-6">
        <Button
          component={Link}
          href={backHref}
          variant="subtle"
          size="sm"
          leftSection={<ArrowLeft2 size={16} />}
          className="text-stone-600 hover:bg-stone-100 -ml-2 mb-4"
        >
          Back to store
        </Button>

        {isLoading && (
          <Paper className="store-classic-paper rounded-2xl border border-stone-200/80 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Skeleton height={360} radius={0} />
              <Stack gap="md" className="p-6">
                <Skeleton height={30} width="70%" className="rounded-lg" />
                <Skeleton height={24} width="35%" className="rounded-lg" />
                <Skeleton height={80} className="rounded-xl" />
                <Skeleton height={44} className="rounded-xl" />
              </Stack>
            </div>
          </Paper>
        )}

        {!isLoading && (error || !product) && (
          <Paper p="xl" className="store-classic-paper rounded-2xl border border-stone-200/80 text-center">
            <Title order={3} className="store-classic-title text-stone-800 mb-2">
              Product not found
            </Title>
            <Text className="text-stone-500 mb-6">
              This product may be unavailable or no longer listed.
            </Text>
            <Button component={Link} href={backHref} variant="outline" className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded">
              Back to store
            </Button>
          </Paper>
        )}

        {!isLoading && product && (
          <Paper className="store-classic-paper rounded-2xl border border-stone-200/80 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image — shown in full (not cropped) */}
              <div className="relative bg-gradient-to-br from-stone-50 to-stone-100 border-b md:border-b-0 md:border-r border-stone-200 flex items-center justify-center p-6 min-h-[280px]">
                {product.primaryPhoto ? (
                  <Image
                    src={product.primaryPhoto}
                    alt={product.name}
                    fit="contain"
                    className="max-h-[440px] w-auto max-w-full"
                    fallbackSrc="https://placehold.co/800x800?text=No+image"
                  />
                ) : (
                  <Box className="text-stone-400 text-sm">No image available</Box>
                )}
                <Badge
                  size="lg"
                  radius="xl"
                  className={`absolute top-3 left-3 border shadow-sm ${
                    isInStock
                      ? "bg-white/95 text-stone-800 border-stone-200/80"
                      : "bg-rose-50/95 text-rose-800 border-rose-200"
                  }`}
                >
                  {isInStock ? "In stock" : "Out of stock"}
                </Badge>
              </div>

              {/* Details */}
              <Stack gap="lg" className="p-5 sm:p-7">
                <div>
                  {product.brand && (
                    <Text size="xs" fw={600} className="uppercase tracking-wider text-stone-500 mb-1.5">
                      {product.brand}
                    </Text>
                  )}
                  <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
                    <Title order={1} className="store-classic-title text-2xl sm:text-3xl text-stone-900 leading-tight">
                      {product.name}
                    </Title>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={handleShare}
                      leftSection={
                        shareDone ? <TickCircle size={16} color="#059669" /> : <Share size={16} />
                      }
                      className="shrink-0 border-stone-300 text-stone-700 hover:bg-stone-100 rounded-full"
                    >
                      {shareDone ? "Shared" : "Share"}
                    </Button>
                  </Group>
                  <Text fw={700} className="text-stone-900 text-3xl mt-3 tracking-tight">
                    {formatPrice(product.amount)}
                  </Text>
                  <Text size="xs" className="text-stone-500 mt-1">
                    {isInStock
                      ? product.stockQuantity
                        ? `In stock · ${product.stockQuantity} available`
                        : "In stock"
                      : "Out of stock"}
                  </Text>
                </div>

                {product.description && (
                  <Text size="sm" className="text-stone-600 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </Text>
                )}

                {product.tags && product.tags.length > 0 && (
                  <Group gap={6} wrap="wrap">
                    {product.tags.slice(0, 10).map((tag) => (
                      <Badge
                        key={tag}
                        variant="light"
                        color="gray"
                        size="sm"
                        className="font-normal text-stone-600 bg-stone-100 border border-stone-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </Group>
                )}

                {product.SKU && (
                  <Text size="xs" className="text-stone-400">
                    SKU: <span className="font-mono text-stone-600">{product.SKU}</span>
                  </Text>
                )}

                <Divider className="border-stone-200" />

                <div className="flex flex-col sm:flex-row sm:items-end gap-3">
                  <NumberInput
                    label="Quantity"
                    min={1}
                    max={Math.max(1, product.stockQuantity ?? 999)}
                    value={qty}
                    onChange={(v) => setQty(Number(v) || 1)}
                    disabled={!isInStock}
                    className="max-w-[140px]"
                    classNames={{
                      label: "text-stone-600 text-xs font-medium mb-1.5",
                      input: "rounded-lg border-stone-300 h-11 font-medium",
                    }}
                    size="md"
                  />
                  <Button
                    size="md"
                    className="flex-1 bg-stone-800 hover:bg-stone-900 text-white rounded-lg h-11"
                    disabled={!isInStock}
                    onClick={() => {
                      if (isInStock && product) {
                        addItem(product, qty);
                        setQty(1);
                      }
                    }}
                  >
                    {isInStock ? "Add to cart" : "Unavailable"}
                  </Button>
                </div>

                {clipboard.copied && (
                  <Text size="xs" className="text-emerald-600">
                    Link copied to clipboard
                  </Text>
                )}
              </Stack>
            </div>
          </Paper>
        )}
      </Container>
    </StoreLayout>
  );
}

export default function ProductPage() {
  return (
    <Suspense
      fallback={
        <StoreLayout storeName="Store">
          <Container size="lg" className="max-w-4xl mx-auto py-10 px-4">
            <Skeleton height={420} className="rounded-2xl" />
          </Container>
        </StoreLayout>
      }
    >
      <ProductDetail />
    </Suspense>
  );
}
