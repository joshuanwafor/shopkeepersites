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
  Divider,
  Paper,
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
  const isInStock = (product?.stockQuantity ?? 0) > 0 && product?.availability !== "out_of_stock";
  const availabilityLabel = product?.availability
    ? product.availability.replaceAll("_", " ")
    : "available";

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
      title="Product details"
      size="md"
      centered
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
          <Box h={280} className="bg-stone-100 rounded overflow-hidden border border-stone-200">
            {product.primaryPhoto ? (
              <Image
                src={product.primaryPhoto}
                alt={product.name}
                fit="cover"
                h={280}
                w="100%"
                fallbackSrc="https://placehold.co/600x280?text=No+image"
              />
            ) : (
              <Box className="flex items-center justify-center h-full text-stone-400 text-sm">
                No image
              </Box>
            )}
          </Box>
          <div>
            <Text fw={700} className="store-classic-title text-2xl text-stone-800 leading-tight">
              {product.name}
            </Text>
            {(product.description || product.SKU) && (
              <Text size="sm" className="text-stone-600 mt-1 leading-relaxed">
                {product.description || product.SKU}
              </Text>
            )}
          </div>
          <Paper p="sm" className="store-classic-paper bg-stone-50/60">
            <Group justify="space-between" align="center">
              <div>
                <Text fw={700} size="xl" className="text-stone-800 leading-none">
                  {formatPrice(product.amount)}
                </Text>
                <Text size="xs" className="text-stone-500 mt-1 uppercase tracking-wide">
                  {availabilityLabel}
                </Text>
              </div>
              <Badge className={isInStock ? "bg-stone-700 text-white font-normal" : "bg-stone-300 text-stone-700 font-normal"}>
                {isInStock ? `In stock (${product.stockQuantity})` : "Out of stock"}
              </Badge>
            </Group>
          </Paper>
          {product.SKU && <Text size="xs" className="text-stone-500">SKU: {product.SKU}</Text>}
          <Divider color="#e7e5e4" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <NumberInput
              label="Quantity"
              min={1}
              max={Math.max(1, product?.stockQuantity ?? 999)}
              value={qty}
              onChange={(v) => setQty(Number(v) || 1)}
              w={110}
              classNames={{ input: "rounded border-stone-300" }}
            />
            <Button
              className="bg-stone-700 hover:bg-stone-800 text-white font-normal rounded w-full sm:w-auto"
              onClick={handleAddToCart}
              disabled={!isInStock}
            >
              {isInStock ? "Add to cart" : "Unavailable"}
            </Button>
          </div>
        </Stack>
      )}
    </Modal>
  );
}
