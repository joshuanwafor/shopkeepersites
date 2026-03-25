"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Container,
  Title,
  Text,
  Skeleton,
  Alert,
  Group,
  UnstyledButton,
  Paper,
  Stack,
  Button,
  Divider,
} from "@mantine/core";
import { StoreLayout } from "@/components/store/StoreLayout";
import { StorefrontInfo } from "@/components/store/StorefrontInfo";
import { ProductModal } from "@/components/store/ProductModal";
import { formatPrice } from "@/hooks";
import {
  useStorefrontProfile,
  useStorefrontProducts,
  useStorefrontCategories,
} from "@/hooks/use-storefront";
import type { StorefrontProductResponse } from "@/sdk/usedisha-service";

export default function Home() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const { data: profileRes, isLoading: profileLoading, error: profileError } = useStorefrontProfile();
  const { data: productsRes, isLoading: productsLoading, error: productsError } = useStorefrontProducts();
  const { data: categoriesRes } = useStorefrontCategories();

  const profile = profileRes?.data;
  const products = productsRes?.data?.products ?? [];
  const categories = categoriesRes?.data?.categories ?? [];
  const menuSections = useMemo(() => {
    const sections = categories.map((category) => ({
      id: category.id,
      name: category.name,
      products: products.filter((product) => product.categoryIds?.includes(category.id)),
    }));
    const uncategorized = products.filter(
      (product) => !product.categoryIds || product.categoryIds.length === 0
    );
    if (uncategorized.length > 0) {
      sections.push({
        id: "uncategorized",
        name: "More items",
        products: uncategorized,
      });
    }
    return sections.filter((section) => section.products.length > 0);
  }, [categories, products]);
  const visibleSections = useMemo(() => {
    if (!activeCategoryId) return menuSections;
    return menuSections.filter((section) => section.id === activeCategoryId);
  }, [activeCategoryId, menuSections]);
  const totalItems = products.length;
  const hasStoreError = !!(profileError || productsError);

  useEffect(() => {
    if (menuSections.length === 0) {
      setActiveCategoryId(null);
      return;
    }
    if (activeCategoryId && !menuSections.some((section) => section.id === activeCategoryId)) {
      setActiveCategoryId(null);
    }
  }, [activeCategoryId, menuSections]);

  const selectCategory = (sectionId: string | null) => {
    setActiveCategoryId(sectionId);
  };

  const renderMenuItem = (product: StorefrontProductResponse) => (
    <Paper
      key={product.id}
      p="md"
      className="store-classic-paper rounded-xl border border-stone-200/80 border-l-4 border-l-stone-300 hover:shadow-md hover:border-stone-300 transition-all"
    >
      <Stack gap={6}>
        <Group justify="space-between" align="flex-start" wrap="nowrap" gap="sm">
          <div className="min-w-0 flex-1">
            <Text fw={600} className="text-stone-800 text-base leading-snug tracking-tight">
              {product.name}
            </Text>
          </div>
          <Text fw={700} className="text-stone-800 text-base shrink-0">
            {formatPrice(product.amount)}
          </Text>
        </Group>
        {(product.description || product.SKU) && (
          <Text size="sm" className="text-stone-500 leading-relaxed">
            {product.description || product.SKU}
          </Text>
        )}
        <Group justify="space-between" align="center" className="pt-1">
          {product.availability && (
            <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
              {product.availability.replaceAll("_", " ")}
            </Text>
          )}
          <Button
            variant="subtle"
            size="xs"
            className="text-stone-700 hover:bg-stone-100 rounded-md ml-auto"
            onClick={() => setSelectedProductId(product.id)}
          >
            View details
          </Button>
        </Group>
      </Stack>
    </Paper>
  );

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="lg" className="max-w-4xl mx-auto py-8 sm:py-10 px-4 sm:px-6">
        {!profile && profileLoading && (
          <Paper p="lg" className="store-classic-paper rounded-2xl mb-8">
            <Skeleton height={36} width={180} className="rounded-xl mb-3" />
            <Skeleton height={16} width="55%" className="rounded-xl" />
          </Paper>
        )}
        {profile && !profileLoading && (
          <header className="mb-10 pb-8 border-b border-stone-200">
            <StorefrontInfo profile={profile} />
          </header>
        )}
        {hasStoreError && (
          <Alert color="red" title="Error" className="rounded border border-red-200">
            Could not load store. Please try again later.
          </Alert>
        )}

        <Paper p="lg" className="store-classic-paper rounded-2xl mb-6 border border-stone-200/80" radius="xl">
          <Group justify="space-between" align="flex-end" wrap="wrap" gap="md">
            <div>
              <Title order={2} className="store-classic-title text-3xl text-stone-800">
                Menu
              </Title>
              <Text size="sm" className="text-stone-500 mt-2">
                Browse all items on a single page.
              </Text>
            </div>
            <Group gap={8} className="text-right">
              <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                {menuSections.length} sections
              </Text>
              <Text size="xs" className="uppercase tracking-[0.12em] text-stone-400">
                •
              </Text>
              <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                {totalItems} items
              </Text>
            </Group>
          </Group>
        </Paper>

        {menuSections.length > 0 && (
          <Paper
            p="sm"
            className="store-classic-paper rounded-2xl mb-8 sticky top-20 z-10 border border-stone-200/80 backdrop-blur supports-[backdrop-filter]:bg-white/85"
            radius="xl"
          >
            <Group gap={6} wrap="wrap">
              <UnstyledButton
                onClick={() => selectCategory(null)}
                className={`
                  px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                  ${activeCategoryId == null ? "bg-stone-800 text-white shadow-sm" : "text-stone-700 hover:bg-stone-100"}
                `}
              >
                All
              </UnstyledButton>
              {menuSections.map((section) => (
                <UnstyledButton
                  key={section.id}
                  onClick={() => selectCategory(section.id)}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-colors
                    ${activeCategoryId === section.id ? "bg-stone-800 text-white shadow-sm" : "text-stone-700 hover:bg-stone-100"}
                  `}
                >
                  {section.name}
                </UnstyledButton>
              ))}
            </Group>
          </Paper>
        )}

        {productsLoading && (
          <Stack gap="sm">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} height={88} className="rounded-xl" />
            ))}
          </Stack>
        )}
        {!productsLoading && products.length === 0 && (
          <Paper p="xl" className="store-classic-paper rounded-2xl border border-stone-200/80 text-center">
            <Text className="text-stone-500">
              No products available yet.
            </Text>
          </Paper>
        )}
        {!productsLoading && visibleSections.length > 0 && (
          <Stack gap="lg">
            {visibleSections.map((section) => (
              <section key={section.id} id={`menu-section-${section.id}`} className="scroll-mt-36">
                <Paper p="lg" className="store-classic-paper rounded-2xl border border-stone-200/80">
                  <Group justify="space-between" align="flex-end" mb="xs">
                    <Title order={3} className="store-classic-title text-2xl text-stone-800 tracking-tight">
                      {section.name}
                    </Title>
                    <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                      {section.products.length} item{section.products.length === 1 ? "" : "s"}
                    </Text>
                  </Group>
                  <Divider color="#e7e5e4" mb="md" />
                  <Stack gap="sm">
                    {section.products.map((product) => renderMenuItem(product))}
                  </Stack>
                </Paper>
              </section>
            ))}
          </Stack>
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
