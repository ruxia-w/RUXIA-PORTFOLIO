import type { Metadata } from "next";
import { GalleryPageClient } from "@/components/Gallery/GalleryPageClient";
import { galleryItems } from "@/lib/gallery/projects";

export const metadata: Metadata = {
  title: "Gallery — Ruxia Wang",
  description: "Selected design work, explorations, and visual experiments.",
};

export default function GalleryPage() {
  return <GalleryPageClient items={galleryItems} />;
}
