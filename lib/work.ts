import { workItems } from "@/content/work";

export function getAllWorkSlugs() {
  return workItems.map((item) => item.slug);
}

export function getAllWorkItems() {
  return workItems;
}

export function getWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug) ?? null;
}
