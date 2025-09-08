import AboutFront, {
  AboutFrontProps,
} from "@/components/blocks/sections/front/about-front";
import HeroCardsFront from "@/components/blocks/sections/front/hero-cards-front";
import HeroFront, {
  HeroFrontProps,
} from "@/components/blocks/sections/front/hero-front";
import ServicesTextureFront from "@/components/blocks/sections/front/services-texture-front";
import ServicesGrid from "@/components/blocks/sections/global/services-grid";
import { siteConfig } from "@/configs/site.config";
import { getAllPages, getPageBySlug } from "@/lib/wordpress";

import type { Metadata } from "next";

// Revalidate pages every hour
export const revalidate = 3600;

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  const slugs = {
    en: "home-en",
    ru: "home-ru",
  };
  const lang = siteConfig.site_lang;
  const slug = slugs[lang];

  const page = await getPageBySlug(slug);

  if (!page) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
  ogUrl.searchParams.append("title", page.title.rendered);
  // Strip HTML tags for description and limit length
  const description = page.excerpt?.rendered
    ? page.excerpt.rendered.replace(/<[^>]*>/g, "").trim()
    : page.content.rendered
        .replace(/<[^>]*>/g, "")
        .trim()
        .slice(0, 200) + "...";
  ogUrl.searchParams.append("description", description);

  return {
    title: page.title.rendered,
    description: description,
    openGraph: {
      title: page.title.rendered,
      description: description,
      type: "article",
      url: `${siteConfig.site_domain}/pages/${page.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: page.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title.rendered,
      description: description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function Page() {
  const slugs = {
    en: "home-en",
    ru: "home-ru",
  };
  const lang = siteConfig.site_lang;
  const slug = slugs[lang];

  const page = await getPageBySlug(slug);

  return (
    <div className="flex flex-col">
      {/**
       * FRONT BLOCKS
       */}
      <HeroFront fields={page.acf.hero_banner as HeroFrontProps} />
      <HeroCardsFront />
      <AboutFront fields={page.acf.about as AboutFrontProps} />
      <ServicesTextureFront />
      {/**
       * GLOBAL BLOCKS
       */}
      <ServicesGrid space="front" />
    </div>
  );
}
