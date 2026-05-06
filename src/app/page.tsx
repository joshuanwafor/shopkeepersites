"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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
  Image,
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
import { useCart } from "@/context/cart-context";
import type {
  StorefrontCategoryResponse,
  StorefrontProductResponse,
} from "@/sdk/usedisha-service";

const EMPTY_PRODUCTS: StorefrontProductResponse[] = [];
const EMPTY_CATEGORIES: StorefrontCategoryResponse[] = [];

function HomeContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q")?.trim() || undefined;
  const { addItem } = useCart();

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const { data: profileRes, isLoading: profileLoading, error: profileError } = useStorefrontProfile();
  const { data: productsRes, isLoading: productsLoading, error: productsError } = useStorefrontProducts(
    searchQuery ? { search: searchQuery } : undefined
  );
  const { data: categoriesRes } = useStorefrontCategories();
  const profile = profileRes?.data;
  const products = productsRes?.data?.products ?? EMPTY_PRODUCTS;
  const categories = categoriesRes?.data?.categories ?? EMPTY_CATEGORIES;
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
    (() => {
      const isInStock =
        (product.stockQuantity ?? 0) > 0 && product.availability !== "out_of_stock";
      const availabilityLabel = isInStock
        ? "In stock"
        : "Out of stock";

      return (
    <Paper
      key={product.id}
      p={0}
      className="store-classic-paper overflow-hidden rounded-2xl border border-stone-200/80 hover:shadow-md hover:border-stone-300 transition-all"
    >
      <div className="relative">
        <div className="h-40 sm:h-44 w-full bg-stone-100 border-b border-stone-200 overflow-hidden flex items-center justify-center">
          {product.primaryPhoto ? (
            <Image
              src={product.primaryPhoto}
              alt={product.name}
              w="100%"
              h="100%"
              fit="cover"
              fallbackSrc="https://placehold.co/640x360?text=No+image"
            />
          ) : (
            <Text size="xs" className="text-stone-400 px-2 text-center leading-tight">
              No image
            </Text>
          )}
        </div>
        {product.availability && (
          <Text
            size="10px"
            className={`absolute top-2 right-2 uppercase tracking-[0.12em] px-2 py-1 rounded-full border ${
              isInStock
                ? "bg-white/90 text-stone-600 border-stone-200"
                : "bg-rose-50/95 text-rose-700 border-rose-200"
            }`}
          >
            {availabilityLabel}
          </Text>
        )}
      </div>
      <Stack gap={8} className="p-3 sm:p-4">
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
          <Text size="sm" className="text-stone-500 leading-relaxed line-clamp-2 min-h-[2.5rem]">
            {product.description || product.SKU}
          </Text>
        )}
        {!(product.description || product.SKU) && (
          <Text size="sm" className="text-transparent select-none min-h-[2.5rem]">
            placeholder
          </Text>
        )}
        <Group justify="stretch" align="center" className="pt-1 gap-2" grow>
          <Button
            size="xs"
            className="flex-1 bg-stone-800 text-white hover:bg-stone-700 rounded-md font-medium"
            disabled={!isInStock}
            onClick={() => {
              if (isInStock) addItem(product, 1);
            }}
          >
            Add to cart
          </Button>
          <Button
            variant="default"
            size="xs"
            className="flex-1 border-stone-300 text-stone-800 hover:bg-stone-100 rounded-md"
            onClick={() => setSelectedProductId(product.id)}
          >
            View details
          </Button>
        </Group>
      </Stack>
    </Paper>
      );
    })()
  );

  return (
    <StoreLayout storeName={profile?.name ?? "Store"}>
      <Container size="lg" className="max-w-4xl mx-auto py-6 sm:py-10 px-3 sm:px-6">
        {!profile && profileLoading && (
          <Paper p="lg" className="store-classic-paper rounded-2xl mb-8">
            <Skeleton height={36} width={180} className="rounded-xl mb-3" />
            <Skeleton height={16} width="55%" className="rounded-xl" />
          </Paper>
        )}
        {profile && !profileLoading && (
          <header className="mb-6 sm:mb-8">
            <StorefrontInfo profile={profile} />
          </header>
        )}
        {hasStoreError && (
          <Alert color="red" title="Error" className="rounded border border-red-200">
            Could not load store. Please try again later.
          </Alert>
        )}

        <Paper
          p={0}
          className="store-classic-paper rounded-2xl mb-6 sm:mb-8 border border-stone-200/80 overflow-hidden"
          radius="xl"
        >
          <div className="p-4 sm:p-6 sm:pb-4">
            <Group justify="space-between" align="flex-end" wrap="wrap" gap="sm">
              <div>
                <Title order={2} className="store-classic-title text-2xl sm:text-3xl text-stone-800">
                  Menu
                </Title>
                <Text size="sm" className="text-stone-500 mt-1.5 sm:mt-2">
                  {searchQuery
                    ? `Showing results for “${searchQuery}”.`
                    : "Browse all items on a single page."}
                </Text>
              </div>
              <Group gap={6} className="text-left sm:text-right">
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
          </div>

          {menuSections.length > 0 && (
            <div
              className="border-t border-stone-200 bg-stone-50/40 px-2 py-2 sm:px-4 sticky top-[7.25rem] sm:top-[7.5rem] z-10 backdrop-blur supports-[backdrop-filter]:bg-white/85"
            >
              <div className="-mx-1 overflow-x-auto">
                <Group gap={6} wrap="nowrap" className="w-max min-w-full pb-0.5 sm:flex-wrap sm:w-auto px-1">
                  <UnstyledButton
                    onClick={() => selectCategory(null)}
                    className={`
                  px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
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
                    px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
                    ${activeCategoryId === section.id ? "bg-stone-800 text-white shadow-sm" : "text-stone-700 hover:bg-stone-100"}
                  `}
                    >
                      {section.name}
                    </UnstyledButton>
                  ))}
                </Group>
              </div>
            </div>
          )}
        </Paper>

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
              {searchQuery
                ? `No products match “${searchQuery}”. Try a different search.`
                : "No products available yet."}
            </Text>
          </Paper>
        )}
        {!productsLoading && visibleSections.length > 0 && (
          <Stack gap="md" className="sm:gap-lg">
            {visibleSections.map((section) => (
              <section key={section.id} id={`menu-section-${section.id}`} className="scroll-mt-36">
                <Paper p="md" className="store-classic-paper border border-stone-200/80 sm:p-lg" radius="xl">
                  <Group justify="space-between" align="flex-end" mb="xs" gap="xs">
                    <Title order={3} className="store-classic-title text-xl sm:text-2xl text-stone-800 tracking-tight">
                      {section.name}
                    </Title>
                    <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                      {section.products.length} item{section.products.length === 1 ? "" : "s"}
                    </Text>
                  </Group>
                  {/* <Divider color="#e7e5e4" mb="md" /> */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {section.products.map((product) => renderMenuItem(product))}
                  </div>
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

export default function Home() {
  return (
    <Suspense
      fallback={
        <StoreLayout storeName="Store">
          <Container size="lg" className="max-w-4xl mx-auto py-6 sm:py-10 px-3 sm:px-6">
            <Stack gap="sm">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} height={88} className="rounded-xl" />
              ))}
            </Stack>
          </Container>
        </StoreLayout>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
