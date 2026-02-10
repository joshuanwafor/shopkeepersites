"use client";

import { Card, Image, Text, Badge, Group, Button, Box } from "@mantine/core";
import type { StorefrontProductResponse } from "@/sdk/usedisha-service";

function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount / 100);
}

export function ProductCard({
  product,
  onView,
}: {
  product: StorefrontProductResponse;
  onView: () => void;
}) {
  const inStock = true;

  return (
    <Card
      padding={0}
      radius="sm"
      className="store-classic-paper overflow-hidden hover:shadow-md transition-shadow"
    >
      <Card.Section>
        <Box pos="relative" h={200} className="bg-stone-100">
          {product.primaryPhoto ? (
            <Image
              src={product.primaryPhoto}
              alt={product.name}
              fit="cover"
              h={200}
              fallbackSrc="https://placehold.co/400x200?text=No+image"
            />
          ) : (
            <Box className="flex items-center justify-center h-full text-stone-400 text-sm">
              No image
            </Box>
          )}
          {!inStock && (
            <Badge
              className="absolute top-2 right-2 bg-stone-600 text-white font-normal"
              variant="filled"
              pos="absolute"
              top={8}
              right={8}
            >
              Out of stock
            </Badge>
          )}
        </Box>
      </Card.Section>
      <div className="p-4">
        <Group justify="space-between" mt="sm" mb="xs" wrap="nowrap" gap="xs">
          <Text fw={600} lineClamp={2} className="text-stone-800 font-serif text-base">
            {product.name}
          </Text>
          <Text fw={600} className="text-stone-700 shrink-0">
            {formatPrice(product.amount)}
          </Text>
        </Group>
        <Text size="xs" className="text-stone-500 line-clamp-2">
          {product.description || product.SKU}
        </Text>
        <Button
          fullWidth
          mt="md"
          variant="outline"
          className="border-stone-300 text-stone-700 hover:bg-stone-100 font-normal rounded"
          onClick={onView}
          disabled={!inStock}
        >
          View details
        </Button>
      </div>
    </Card>
  );
}
