import { workItems, type WorkItem } from "@/content/work";

export function getAllWorkSlugs() {
  return workItems.map((item) => item.slug);
}

export function getAllWorkItems() {
  return workItems;
}

export function getWorkBySlug(slug: string) {
  return workItems.find((item) => item.slug === slug) ?? null;
}

export function getRelatedWorkItems(item: WorkItem) {
  if (item.relatedSlugs) {
    return item.relatedSlugs.map(getWorkBySlug).filter((related): related is WorkItem => related !== null);
  }

  return workItems
    .filter((related) => related.relatedSlugs?.includes(item.slug))
    .slice(0, 3);
}
