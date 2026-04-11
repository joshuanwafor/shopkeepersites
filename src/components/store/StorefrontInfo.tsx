"use client";

import { useState } from "react";
import { Text, Group, Anchor, Box, Image, Paper, UnstyledButton, Title } from "@mantine/core";
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

function StoreIntro({
  profile,
  logo,
}: {
  profile: StorefrontProfileResponse;
  logo: string | undefined;
}) {
  return (
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
            className="inline-block rounded-full border border-stone-200 px-2.5 py-1 text-stone-500 mb-2 uppercase tracking-wider truncate max-w-[58vw] sm:max-w-none"
          >
            {profile.caption}
          </Text>
        )}
        <Text component="h2" className="store-classic-title text-2xl sm:text-3xl text-stone-800 leading-tight">
          {profile.name}
        </Text>
        {profile.description && (
          <Text mt="sm" className="text-stone-600 max-w-2xl text-[15px] sm:text-base leading-relaxed">
            {profile.description}
          </Text>
        )}
      </div>
    </Group>
  );
}

function AboutContact({ profile }: { profile: StorefrontProfileResponse }) {
  const social = profile.socialMedia;
  const hasSocial = social && Object.values(social).some(Boolean);
  const hasLegal = !!profile.legalName;
  const hasStoreUrl = !!profile.storeUrl;
  const socialEntries = hasSocial
    ? (Object.entries(social!) as [string, string | undefined][]).filter(([, value]) => !!value)
    : [];

  return (
    <div className="flex flex-col gap-3 text-sm">
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
        <Group gap="xs" className="flex-wrap">
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
  );
}

export function StorefrontInfo({ profile }: { profile: StorefrontProfileResponse }) {
  const logo = profile.logo ?? profile.theme?.logoUrl;
  const social = profile.socialMedia;
  const hasSocial = social && Object.values(social).some(Boolean);
  const hasLegal = !!profile.legalName;
  const hasStoreUrl = !!profile.storeUrl;
  const hasAbout = hasLegal || hasSocial || hasStoreUrl;

  const [activeTab, setActiveTab] = useState<"store" | "about">("store");

  return (
    <Paper
      p={0}
      className="store-classic-paper rounded-2xl mb-6 sm:mb-8 border border-stone-200/80 overflow-hidden"
      radius="xl"
    >
      <div className="p-4 sm:p-6 sm:pb-4">
        <Group justify="space-between" align="flex-end" wrap="wrap" gap="sm">
          <div>
            <Title order={2} className="store-classic-title text-2xl sm:text-3xl text-stone-800">
              Store
            </Title>
            <Text size="sm" className="text-stone-500 mt-1.5 sm:mt-2">
              {hasAbout
                ? "Profile, story, and contact — pick a tab below."
                : "Your storefront profile and story."}
            </Text>
          </div>
          <Group gap={6} className="text-left sm:text-right">
            {hasAbout ? (
              <>
                <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                  store
                </Text>
                <Text size="xs" className="uppercase tracking-[0.12em] text-stone-400">
                  •
                </Text>
                <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                  about
                </Text>
              </>
            ) : (
              <Text size="xs" className="uppercase tracking-[0.12em] text-stone-500">
                profile
              </Text>
            )}
          </Group>
        </Group>
      </div>

      {hasAbout && (
        <div className="border-t border-stone-200 bg-stone-50/40 px-2 py-2 sm:px-4">
          <div className="-mx-1 overflow-x-auto">
            <Group gap={6} wrap="nowrap" className="w-max min-w-full pb-0.5 sm:flex-wrap sm:w-auto px-1">
              <UnstyledButton
                type="button"
                onClick={() => setActiveTab("store")}
                className={`
                  px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === "store" ? "bg-stone-800 text-white shadow-sm" : "text-stone-700 hover:bg-stone-100"}
                `}
              >
                Store
              </UnstyledButton>
              <UnstyledButton
                type="button"
                onClick={() => setActiveTab("about")}
                className={`
                  px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === "about" ? "bg-stone-800 text-white shadow-sm" : "text-stone-700 hover:bg-stone-100"}
                `}
              >
                About & contact
              </UnstyledButton>
            </Group>
          </div>
        </div>
      )}

      <div className="border-t border-stone-200 p-4 sm:p-6 bg-white/80">
        {hasAbout ? (
          activeTab === "store" ? (
            <StoreIntro profile={profile} logo={logo} />
          ) : (
            <Box>
              <Text size="sm" className="text-stone-500 mb-4">
                Store links, legal details, and social channels.
              </Text>
              <AboutContact profile={profile} />
            </Box>
          )
        ) : (
          <StoreIntro profile={profile} logo={logo} />
        )}
      </div>
    </Paper>
  );
}
