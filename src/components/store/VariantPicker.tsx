"use client";

import { Text, UnstyledButton } from "@mantine/core";
import type { StorefrontProductResponse } from "@/sdk/usedisha-service";
import {
  chooseOptionValue,
  optionValueState,
  swatchColour,
  variantOptions,
  type VariantSelection,
} from "@/lib/variants";

/**
 * One row of choices per option (Size: S M L). A value that only leads to
 * sold-out variants is struck through; one no variant combines with the other
 * choices is faded, and picking it drops those choices.
 */
export function VariantPicker({
  product,
  selection,
  onChange,
}: {
  product: StorefrontProductResponse;
  selection: VariantSelection;
  onChange: (selection: VariantSelection) => void;
}) {
  const options = variantOptions(product);
  if (!options.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => {
        const isColour = option.type === "color" || option.type === "colour";
        const chosen = selection[option.name];
        const chosenLabel = chosen ? option.valueLabels?.[chosen] ?? chosen : undefined;
        return (
          <div key={option.name} role="radiogroup" aria-label={option.name}>
            <Text size="xs" fw={600} className="text-stone-600 mb-2">
              {option.name}
              {chosenLabel && !swatchColour(chosenLabel) && (
                <span className="font-normal text-stone-500">: {chosenLabel}</span>
              )}
            </Text>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const state = optionValueState(product, selection, option.name, value);
                const selected = chosen === value;
                const label = option.valueLabels?.[value] ?? value;
                const swatch = isColour ? swatchColour(value) : undefined;
                const hint = state === "soldOut" ? `${label}, sold out` : label;
                const tone = selected
                  ? "border-stone-800 ring-1 ring-stone-800"
                  : state === "unavailable"
                    ? "border-dashed border-stone-200 opacity-50"
                    : "border-stone-300 hover:border-stone-500";
                return (
                  <UnstyledButton
                    key={value}
                    role="radio"
                    aria-checked={selected}
                    aria-label={hint}
                    title={hint}
                    onClick={() => onChange(chooseOptionValue(product, selection, option.name, value))}
                    className={
                      swatch
                        ? `h-9 w-9 rounded-full border-2 p-0.5 transition-colors ${tone}`
                        : `min-w-[2.75rem] rounded-lg border bg-white px-3 py-1.5 text-center text-sm transition-colors ${tone} ${
                            state === "soldOut" ? "text-stone-400 line-through" : "text-stone-800"
                          }`
                    }
                  >
                    {swatch ? (
                      <span
                        className={`block h-full w-full rounded-full border border-stone-900/10 ${state === "soldOut" ? "opacity-40" : ""}`}
                        style={{ backgroundColor: swatch }}
                      />
                    ) : (
                      label
                    )}
                  </UnstyledButton>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
