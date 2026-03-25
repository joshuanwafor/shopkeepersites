"use client";

import { useState } from "react";
import { Text, Group, Anchor, Box, Image, UnstyledButton } from "@mantine/core";
import type { StorefrontProfileResponse } from "@/sdk/usedisha-service";

const SOCIAL_LABELS: Record<string, string> = {
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "Twitter",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  tiktok: "TikTok",
};

function socialHref(key: string, value: string): string {
  if (key === "whatsapp") {
    const num = value.replace(/\D/g, "");
    return `https://wa.me/${num.startsWith("234") ? num : `234${num}`}`;
  }
  return value.startsWith("http") ? value : `https://${value}`;
}

export function StorefrontInfo({ profile }: { profile: StorefrontProfileResponse }) {
  const logo = profile.logo ?? profile.theme?.logoUrl;
  const cover = profile.coverPhoto ?? profile.theme?.coverImageUrl;
  const social = profile.socialMedia;
  const [showDetails, setShowDetails] = useState(false);
  const hasSocial = social && Object.values(social).some(Boolean);
  const hasLegal = !!profile.legalName;
  const hasStoreUrl = !!profile.storeUrl;
  const socialEntries = hasSocial
    ? (Object.entries(social!) as [string, string | undefined][]).filter(
        ([, value]) => !!value
      )
    : [];

  return (
    <div className="space-y-6 sm:space-y-7">
      {cover && (
        <Box className="-mx-4 sm:-mx-6 rounded-none overflow-hidden relative">
          <Image
            src={cover}
            alt={`${profile.name} cover`}
            className="w-full object-cover"
            h={220}
            fallbackSrc="https://placehold.co/1200x200?text=Store"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-stone-900/5 to-transparent pointer-events-none" />
        </Box>
      )}

      <div className="rounded-2xl border border-stone-200 bg-white/80 p-4 sm:p-6">
        <Group align="flex-start" gap="md" className="flex-nowrap">
          {logo && (
            <Image
              src={logo}
              alt={profile.name}
              w={72}
              h={72}
              fit="contain"
              className="shrink-0 rounded-xl border border-stone-200 bg-white p-1"
            />
          )}
          <div className="min-w-0 flex-1">
          {profile.caption && (
            <Text
              size="xs"
              className="inline-block rounded-full border border-stone-200 px-2.5 py-1 text-stone-500 mb-2 uppercase tracking-wider"
            >
              {profile.caption}
            </Text>
          )}
          <Text component="h1" className="store-classic-title text-3xl sm:text-4xl text-stone-800 leading-tight">
            {profile.name}
          </Text>
          {profile.description && (
            <Text mt="sm" className="text-stone-600 max-w-2xl text-[15px] sm:text-base leading-relaxed">
              {profile.description}
            </Text>
          )}
          </div>
        </Group>
      </div>

      {(hasLegal || hasSocial || hasStoreUrl) && (
        <Box className="rounded-2xl border border-stone-200 bg-white/70 p-4 sm:p-5">
          <Group justify="space-between" align="center" className="mb-3">
            <Text size="sm" fw={700} className="text-stone-700">
              About & contact
            </Text>
            <UnstyledButton
              onClick={() => setShowDetails((prev) => !prev)}
              className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-700 hover:bg-stone-100/70"
            >
              {showDetails ? "Show less" : "See more details"}
            </UnstyledButton>
          </Group>
          {showDetails ? (
            <div className="flex flex-col gap-2 text-sm">
              {hasLegal && (
                <Text size="sm" className="text-stone-600">
                  {profile.legalName}
                </Text>
              )}
              {hasStoreUrl && (
                <Anchor
                  href={profile.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  className="w-fit rounded-full border border-stone-200 px-3 py-1.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100/70 no-underline"
                >
                  Visit store
                </Anchor>
              )}
              {hasSocial && (
                <Group gap="xs" className="mt-1 flex-wrap">
                  {socialEntries.map(([key, value]) => (
                    <Anchor
                      key={key}
                      href={socialHref(key, value!)}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      className="rounded-full border border-stone-200 px-3 py-1.5 text-stone-700 hover:text-stone-900 hover:bg-stone-100/70 no-underline capitalize"
                    >
                      {SOCIAL_LABELS[key] ?? key}
                    </Anchor>
                  ))}
                </Group>
              )}
            </div>
          ) : (
            <Text size="sm" className="text-stone-500">
              Tap to view store links, legal details, and social channels.
            </Text>
          )}
        </Box>
      )}
    </div>
  );
}
