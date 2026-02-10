"use client";

import { Text, Group, Anchor, Box, Image } from "@mantine/core";
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
  const hasSocial = social && Object.values(social).some(Boolean);
  const hasLegal = !!profile.legalName;
  const hasStoreUrl = !!profile.storeUrl;

  return (
    <>
      {cover && (
        <Box className="mb-8 -mx-4 sm:-mx-6 rounded-none overflow-hidden">
          <Image
            src={cover}
            alt=""
            className="w-full object-cover"
            h={200}
            fallbackSrc="https://placehold.co/1200x200?text=Store"
          />
        </Box>
      )}

      <Group align="flex-start" gap="md" className="mb-6 flex-wrap">
        {logo && (
          <Image
            src={logo}
            alt={profile.name}
            w={64}
            h={64}
            fit="contain"
            className="shrink-0 rounded border border-stone-200"
          />
        )}
        <div className="min-w-0">
          {profile.caption && (
            <Text size="sm" className="text-stone-500 mb-0.5 uppercase tracking-wider">
              {profile.caption}
            </Text>
          )}
          <Text component="h1" className="store-classic-title text-3xl sm:text-4xl text-stone-800">
            {profile.name}
          </Text>
          {profile.description && (
            <Text mt="sm" className="text-stone-600 max-w-2xl text-base leading-relaxed">
              {profile.description}
            </Text>
          )}
        </div>
      </Group>

      {(hasLegal || hasSocial || hasStoreUrl) && (
        <Box className="pt-6 border-t border-stone-200">
          <Text size="sm" fw={600} className="text-stone-700 mb-2">
            About & contact
          </Text>
          <div className="flex flex-col gap-1.5 text-sm">
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
                className="text-stone-600 hover:text-stone-900"
              >
                Visit store
              </Anchor>
            )}
            {hasSocial && (
              <Group gap="md" className="mt-1 flex-wrap">
                {(Object.entries(social!) as [string, string | undefined][]).map(
                  ([key, value]) =>
                    value && (
                      <Anchor
                        key={key}
                        href={socialHref(key, value)}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
                        className="text-stone-600 hover:text-stone-900 capitalize"
                      >
                        {SOCIAL_LABELS[key] ?? key}
                      </Anchor>
                    )
                )}
              </Group>
            )}
          </div>
        </Box>
      )}
    </>
  );
}
