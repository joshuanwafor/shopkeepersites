"use client";

import { useState } from "react";
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Skeleton,
  Center,
  Alert,
  Group,
  UnstyledButton,
  Paper,
} from "@mantine/core";
import { StoreLayout } from "@/components/store/StoreLayout";
import { StorefrontInfo } from "@/components/store/StorefrontInfo";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductModal } from "@/components/store/ProductModal";
import {
  useStorefrontProfile,
  useStorefrontProducts,
  useStorefrontCategories,
} from "@/hooks/use-storefront";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);
  const { data: profileRes, isLoading: profileLoading, error: profileError } = useStorefrontProfile();
  const { data: productsRes, isLoading: productsLoading, error: productsError } = useStorefrontProducts({
    category: categoryFilter,
  });
  const { data: categoriesRes } = useStorefrontCategories();

  const profile = profileRes?.data;
  const products = productsRes?.data?.products ?? [];
  const categories = categoriesRes?.data?.categories ?? [];

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="xl" className="max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        {profileLoading && (
          <Skeleton height={40} width={200} className="mb-10 rounded" />
        )}
        {profile && !profileLoading && (
          <header className="mb-10 pb-8 border-b border-stone-200">
            <StorefrontInfo profile={profile} />
          </header>
        )}
        {(profileError || productsError) && (
          <Alert color="red" title="Error" className="rounded border border-red-200">
            Could not load store. Please try again later.
          </Alert>
        )}

        <Group justify="space-between" align="flex-end" mb="6" wrap="wrap" gap="sm">
          <Title order={2} className="store-classic-title text-xl text-stone-800">
            Products
          </Title>
          {categories.length > 0 && (
            <Group gap={4} wrap="wrap">
              <UnstyledButton
                onClick={() => setCategoryFilter(undefined)}
                className={`
                  px-3 py-1.5 rounded text-sm font-medium transition-colors
                  ${categoryFilter == null ? "bg-stone-200 text-stone-800" : "text-stone-600 hover:bg-stone-100"}
                `}
              >
                All
              </UnstyledButton>
              {categories.map((cat) => (
                <UnstyledButton
                  key={cat.id}
                  onClick={() => setCategoryFilter(categoryFilter === cat.id ? undefined : cat.id)}
                  className={`
                    px-3 py-1.5 rounded text-sm font-medium transition-colors
                    ${categoryFilter === cat.id ? "bg-stone-200 text-stone-800" : "text-stone-600 hover:bg-stone-100"}
                  `}
                >
                  {cat.name}
                </UnstyledButton>
              ))}
            </Group>
          )}
        </Group>

        {productsLoading && (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} height={320} className="rounded" />
            ))}
          </SimpleGrid>
        )}
        {!productsLoading && products.length === 0 && (
          <Paper p="xl" className="store-classic-paper">
            <Center py="md">
              <Text className="text-stone-500">
                {categoryFilter ? "No products in this category." : "No products available yet."}
              </Text>
            </Center>
          </Paper>
        )}
        {!productsLoading && products.length > 0 && (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={() => setSelectedProductId(product.id)}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
      <ProductModal
        productId={selectedProductId}
        opened={!!selectedProductId}
        onClose={() => setSelectedProductId(null)}
      />
    </StoreLayout>
  );
}
