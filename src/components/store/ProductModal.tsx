"use client";

import {
  Modal,
  Image,
  Text,
  Group,
  Stack,
  Button,
  NumberInput,
  Box,
  Badge,
  Skeleton,
  Paper,
  ScrollArea,
  Divider,
} from "@mantine/core";
import { useStorefrontProduct } from "@/hooks/use-storefront";
import { useCart } from "@/context/cart-context";
import { useEffect, useState } from "react";
import { formatPrice } from "@/hooks";

export function ProductModal({
  productId,
  opened,
  onClose,
}: {
  productId: string | null;
  opened: boolean;
  onClose: () => void;
}) {
  const { data, isLoading } = useStorefrontProduct(productId);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const product = data?.data;
  const isInStock =
    (product?.stockQuantity ?? 0) > 0 && product?.availability !== "out_of_stock";
  const availabilityLabel = product?.availability
    ? product.availability.replaceAll("_", " ")
    : "Available";

  useEffect(() => {
    if (!opened) {
      setQty(1);
    }
  }, [opened, productId]);

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, qty);
    setQty(1);
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <Text size="sm" fw={600} className="text-stone-500 uppercase tracking-[0.08em]">
          Product details
        </Text>
      }
      size="lg"
      centered
      padding={0}
      radius="xl"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      classNames={{
        header: "border-b border-stone-200/90 bg-white px-5 py-3.5",
        title: "w-full",
        body: "p-0",
        content: "overflow-hidden border border-stone-200/90 shadow-xl shadow-stone-300/20",
      }}
    >
      {isLoading && (
        <Stack gap={0}>
          <Skeleton height={260} className="rounded-none" />
          <Stack gap="md" className="p-5 sm:p-6">
            <Skeleton height={28} width="70%" className="rounded-lg" />
            <Skeleton height={14} width="40%" className="rounded-lg" />
            <Skeleton height={72} className="rounded-xl" />
            <Skeleton height={48} className="rounded-xl" />
          </Stack>
        </Stack>
      )}
      {!isLoading && product && (
        <Stack gap={0}>
          <Box className="relative bg-stone-100">
            <Box className="aspect-[16/10] sm:aspect-[2/1] max-h-[min(52vh,320px)] w-full overflow-hidden">
              {product.primaryPhoto ? (
                <Image
                  src={product.primaryPhoto}
                  alt={product.name}
                  fit="cover"
                  h="100%"
                  w="100%"
                  fallbackSrc="https://placehold.co/800x500?text=No+image"
                  className="object-center"
                />
              ) : (
                <Box className="flex h-full min-h-[200px] items-center justify-center text-stone-400 text-sm">
                  No image available
                </Box>
              )}
            </Box>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/25 via-transparent to-stone-900/5" />
            <Badge
              size="lg"
              radius="xl"
              className={`absolute bottom-3 left-3 border shadow-sm ${
                isInStock
                  ? "bg-white/95 text-stone-800 border-stone-200/80"
                  : "bg-rose-50/95 text-rose-800 border-rose-200"
              }`}
            >
              {isInStock ? `In stock · ${product.stockQuantity}` : "Out of stock"}
            </Badge>
          </Box>

          <Stack gap="lg" className="p-5 sm:p-6 pt-5">
            <div>
              {product.brand && (
                <Text size="xs" fw={600} className="text-stone-500 uppercase tracking-wider mb-1.5">
                  {product.brand}
                </Text>
              )}
              <Text
                component="h2"
                className="store-classic-title text-2xl sm:text-[1.65rem] text-stone-900 leading-tight"
              >
                {product.name}
              </Text>
              {product.description && (
                <ScrollArea mah={180} type="hover" offsetScrollbars className="mt-3">
                  <Text size="sm" className="text-stone-600 leading-relaxed pr-2">
                    {product.description}
                  </Text>
                </ScrollArea>
              )}
              {product.tags && product.tags.length > 0 && (
                <Group gap={6} mt="md" wrap="wrap">
                  {product.tags.slice(0, 8).map((tag) => (
                    <Badge
                      key={tag}
                      variant="light"
                      color="gray"
                      size="sm"
                      className="font-normal text-stone-600 bg-stone-100/90 border border-stone-200/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </Group>
              )}
            </div>

            <Paper
              p="md"
              radius="lg"
              className="store-classic-paper border-stone-200/90 bg-gradient-to-br from-stone-50/90 to-white"
            >
              <Group justify="space-between" align="flex-end" wrap="wrap" gap="md">
                <div>
                  <Text size="xs" className="text-stone-500 uppercase tracking-[0.12em] mb-1">
                    Price
                  </Text>
                  <Text fw={700} className="text-stone-900 text-3xl sm:text-[2rem] leading-none tracking-tight">
                    {formatPrice(product.amount)}
                  </Text>
                  <Text size="xs" className="text-stone-500 mt-2 capitalize">
                    {availabilityLabel}
                  </Text>
                </div>
                {product.SKU && (
                  <div className="text-right min-w-0">
                    <Text size="xs" className="text-stone-500 uppercase tracking-wider mb-0.5">
                      SKU
                    </Text>
                    <Text
                      size="sm"
                      fw={500}
                      className="text-stone-700 font-mono truncate max-w-[200px]"
                      title={product.SKU}
                    >
                      {product.SKU}
                    </Text>
                  </div>
                )}
              </Group>
            </Paper>

            <Divider color="#e7e5e4" label="Add to cart" labelPosition="center" classNames={{ label: "text-stone-400 text-xs" }} />

            <div className="flex flex-col sm:flex-row sm:items-end gap-4">
              <NumberInput
                label="Quantity"
                min={1}
                max={Math.max(1, product.stockQuantity ?? 999)}
                value={qty}
                onChange={(v) => setQty(Number(v) || 1)}
                disabled={!isInStock}
                className="flex-1 min-w-[120px] max-w-[160px]"
                classNames={{
                  label: "text-stone-600 text-xs font-medium mb-1.5",
                  input:
                    "rounded-lg border-stone-300 bg-white h-11 text-stone-900 font-medium",
                  controls: "border-stone-200",
                }}
                size="md"
              />
              <Button
                size="md"
                fullWidth
                className="flex-1 bg-stone-800 hover:bg-stone-900 text-white font-medium rounded-lg h-11 sm:min-h-[44px] sm:max-w-none"
                onClick={handleAddToCart}
                disabled={!isInStock}
              >
                {isInStock ? "Add to cart" : "Unavailable"}
              </Button>
            </div>
          </Stack>
        </Stack>
      )}
    </Modal>
  );
}
