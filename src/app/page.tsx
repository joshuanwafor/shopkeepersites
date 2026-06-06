"use client";

import { Suspense, useEffect, useState } from "react";
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
} from "@mantine/core";
import { StoreLayout } from "@/components/store/StoreLayout";
import { StorefrontInfo } from "@/components/store/StorefrontInfo";
import { ProductCard } from "@/components/store/ProductCard";
import { ProductModal } from "@/components/store/ProductModal";
import {
  useStorefrontProfile,
  useStorefrontProducts,
  useStorefrontCategories,
  useTrackStoreView,
  useStorefrontQueryString,
} from "@/hooks/use-storefront";
import type {
  StorefrontCategoryResponse,
  StorefrontProductResponse,
} from "@/sdk/usedisha-service";

const EMPTY_PRODUCTS: StorefrontProductResponse[] = [];
const EMPTY_CATEGORIES: StorefrontCategoryResponse[] = [];

function HomeContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q")?.trim() || undefined;

  const PAGE_SIZE = 25;
  const queryString = useStorefrontQueryString();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [quickViewId, setQuickViewId] = useState<string | null>(null);

  // Reset to the first page whenever the active filter changes.
  useEffect(() => {
    setPage(1);
  }, [activeCategoryId, searchQuery]);

  const { data: profileRes, isLoading: profileLoading, error: profileError } = useStorefrontProfile();
  const {
    data: productsRes,
    isLoading: productsLoading,
    isFetching: productsFetching,
    error: productsError,
  } = useStorefrontProducts({
    category: activeCategoryId ?? undefined,
    search: searchQuery,
    page,
    limit: PAGE_SIZE,
  });
  const { data: categoriesRes } = useStorefrontCategories();

  const profile = profileRes?.data;
  // Records a session-aware store view once the storefront resolves (fire-and-forget).
  useTrackStoreView(profile?.id);
  const products = productsRes?.data?.products ?? EMPTY_PRODUCTS;
  const categories = categoriesRes?.data?.categories ?? EMPTY_CATEGORIES;
  const total = productsRes?.data?.total ?? 0;
  const limit = productsRes?.data?.limit ?? PAGE_SIZE;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const hasStoreError = !!(profileError || productsError);

  const selectCategory = (categoryId: string | null) => {
    setActiveCategoryId(categoryId);
  };

  const renderMenuItem = (product: StorefrontProductResponse) => (
    <ProductCard
      key={product.id}
      product={product}
      href={`/products/${product.id}${queryString}`}
      onQuickView={() => setQuickViewId(product.id)}
    />
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
                    : "Browse our products."}
                </Text>
              </div>
              <Group gap={6} className="text-left sm:text-right">
                <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                  {total} items
                </Text>
                {totalPages > 1 && (
                  <>
                    <Text size="xs" className="uppercase tracking-[0.12em] text-stone-400">
                      •
                    </Text>
                    <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                      Page {page} of {totalPages}
                    </Text>
                  </>
                )}
              </Group>
            </Group>
          </div>

          {categories.length > 0 && (
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
                  {categories.map((category) => (
                    <UnstyledButton
                      key={category.id}
                      onClick={() => selectCategory(category.id)}
                      className={`
                    px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
                    ${activeCategoryId === category.id ? "bg-stone-800 text-white shadow-sm" : "text-stone-700 hover:bg-stone-100"}
                  `}
                    >
                      {category.name}
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
        {!productsLoading && products.length > 0 && (
          <Stack gap="lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {products.map((product) => renderMenuItem(product))}
            </div>
            {totalPages > 1 && (
              <Group justify="center" align="center" gap="sm" className="pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1 || productsFetching}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded"
                >
                  Previous
                </Button>
                <Text size="sm" className="text-stone-600 min-w-[6.5rem] text-center">
                  Page {page} of {totalPages}
                </Text>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page >= totalPages || productsFetching}
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="border-stone-300 text-stone-700 hover:bg-stone-100 rounded"
                >
                  Next
                </Button>
              </Group>
            )}
          </Stack>
        )}
      </Container>

      <ProductModal
        productId={quickViewId}
        opened={quickViewId !== null}
        onClose={() => setQuickViewId(null)}
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
