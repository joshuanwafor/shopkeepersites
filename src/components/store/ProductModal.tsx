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
} from "@mantine/core";
import { useStorefrontProduct } from "@/hooks/use-storefront";
import { useCart } from "@/context/cart-context";
import { useState } from "react";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount / 100);
}

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
  const inStock = product?.availability === "in_stock" && (product?.stockQuantity ?? 0) > 0;

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
      title={product?.name ?? "Product"}
      size="lg"
      classNames={{
        title: "font-serif text-stone-800 text-lg",
        content: "rounded border border-stone-200",
        header: "border-b border-stone-200 bg-stone-50/50",
      }}
    >
      {isLoading && (
        <Stack gap="md">
          <Skeleton height={280} className="rounded" />
          <Skeleton height={24} width="60%" className="rounded" />
          <Skeleton height={60} className="rounded" />
        </Stack>
      )}
      {!isLoading && product && (
        <Stack gap="md">
          <Box h={280} className="bg-stone-100 rounded">
            {product.primaryPhoto ? (
              <Image
                src={product.primaryPhoto}
                alt={product.name}
                fit="contain"
                h={280}
                fallbackSrc="https://placehold.co/600x280?text=No+image"
              />
            ) : (
              <Box className="flex items-center justify-center h-full text-stone-400 text-sm">
                No image
              </Box>
            )}
          </Box>
          <Group justify="space-between">
            <Text fw={600} size="xl" className="text-stone-800 font-serif">
              {formatPrice(product.amount)}
            </Text>
            {product.stockQuantity != null && (
              <Badge
                className={inStock ? "bg-stone-600 text-white font-normal" : "bg-red-800/90 text-white font-normal"}
              >
                {inStock ? `In stock (${product.stockQuantity})` : "Out of stock"}
              </Badge>
            )}
          </Group>
          {product.description && (
            <Text size="sm" className="text-stone-600 leading-relaxed">
              {product.description}
            </Text>
          )}
          {product.SKU && (
            <Text size="xs" className="text-stone-500">
              SKU: {product.SKU}
            </Text>
          )}
          <Group align="flex-end" className="pt-2 border-t border-stone-200">
            <NumberInput
              label="Quantity"
              min={1}
              max={inStock ? product.stockQuantity : 1}
              value={qty}
              onChange={(v) => setQty(Number(v) || 1)}
              w={100}
              classNames={{ input: "rounded border-stone-300" }}
            />
            <Button
              className="bg-stone-700 hover:bg-stone-800 text-white font-normal rounded"
              onClick={handleAddToCart}
              disabled={!inStock}
            >
              Add to cart
            </Button>
          </Group>
        </Stack>
      )}
    </Modal>
  );
}
