"use client";

import { useCallback, useEffect, useState } from "react";
import { TextInput } from "@mantine/core";
import { useRouter, useSearchParams } from "next/navigation";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function buildProductsPath(searchParams: URLSearchParams, q: string) {
  const next = new URLSearchParams(searchParams.toString());
  const trimmed = q.trim();
  if (trimmed) next.set("q", trimmed);
  else next.delete("q");
  const qs = next.toString();
  return qs ? `/?${qs}` : "/";
}

export function ProductSearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const qParam = searchParams.get("q") ?? "";
  const [value, setValue] = useState(qParam);

  useEffect(() => {
    setValue(qParam);
  }, [qParam]);

  const pushQuery = useCallback(
    (q: string) => {
      const path = buildProductsPath(searchParams, q);
      router.push(path);
    },
    [router, searchParams]
  );

  useEffect(() => {
    const t = window.setTimeout(() => {
      const trimmed = value.trim();
      const current = (qParam ?? "").trim();
      if (trimmed === current) return;
      pushQuery(value);
    }, 320);
    return () => window.clearTimeout(t);
  }, [value, qParam, pushQuery]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushQuery(value);
  };

  return (
    <div className="sticky top-0 z-30 border-b border-stone-200 bg-stone-50/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <form
        onSubmit={onSubmit}
        className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-2"
        role="search"
        aria-label="Search products"
      >
        <TextInput
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onBlur={() => {
            const trimmed = value.trim();
            const current = (qParam ?? "").trim();
            if (trimmed !== current) pushQuery(value);
          }}
          placeholder="Search products…"
          leftSection={<SearchIcon className="text-stone-500" />}
          classNames={{
            input:
              "rounded-lg border-stone-300 bg-white text-stone-800 placeholder:text-stone-400",
          }}
          size="sm"
        />
      </form>
    </div>
  );
}
