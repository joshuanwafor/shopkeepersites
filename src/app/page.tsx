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
} from "@mantine/core";
import { StoreLayout } from "@/components/store/StoreLayout";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductModal } from "@/components/store/ProductModal";
import { useStorefrontProfile, useStorefrontProducts } from "@/hooks/use-storefront";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const { data: profileRes, isLoading: profileLoading, error: profileError } = useStorefrontProfile();
  const { data: productsRes, isLoading: productsLoading, error: productsError } = useStorefrontProducts();

  const profile = profileRes?.data;
  const products = productsRes?.data?.products ?? [];

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="xl" className="max-w-6xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        {profileLoading && (
          <Skeleton height={40} width={200} className="mb-10 rounded" />
        )}
        {profile && !profileLoading && (
          <header className="mb-10 pb-8 border-b border-stone-200">
            {profile.caption && (
              <Text size="sm" className="text-stone-500 mb-1 uppercase tracking-wider">
                {profile.caption}
              </Text>
            )}
            <Title order={1} className="store-classic-title text-3xl sm:text-4xl text-stone-800">
              {profile.name}
            </Title>
            {profile.description && (
              <Text mt="sm" className="text-stone-600 max-w-2xl text-base leading-relaxed">
                {profile.description}
              </Text>
            )}
          </header>
        )}
        {(profileError || productsError) && (
          <Alert color="red" title="Error" className="rounded border border-red-200">
            Could not load store. Please try again later.
          </Alert>
        )}
        <Title order={2} className="store-classic-title text-xl text-stone-800 mb-6">
          Products
        </Title>
        {productsLoading && (
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} height={320} className="rounded" />
            ))}
          </SimpleGrid>
        )}
        {!productsLoading && products.length === 0 && (
          <Center py="xl">
            <Text className="text-stone-500">No products available yet.</Text>
          </Center>
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
