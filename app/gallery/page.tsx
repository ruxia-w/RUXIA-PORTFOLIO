import type { Metadata } from "next";
import { GalleryPageClient } from "@/components/Gallery/GalleryPageClient";
import { galleryItems } from "@/lib/gallery/projects";

const galleryTitle = "Gallery — Ruxia Wang";
const galleryDescription = "Selected design work, explorations, and visual experiments.";

export const metadata: Metadata = {
  title: galleryTitle,
  description: galleryDescription,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: galleryTitle,
    description: galleryDescription,
    url: "/gallery",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: galleryTitle,
    description: galleryDescription,
    images: ["/og.png"],
  },
};

export default function GalleryPage() {
  return <GalleryPageClient items={galleryItems} />;
}
