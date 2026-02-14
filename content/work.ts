export type WorkLink = {
  label: string;
  href: string;
};

export type WorkImpact = {
  label: string;
  value: string;
  context?: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  year: string;
  approach: string[];
  impact: WorkImpact[];
  stack: string[];
  tags: string[];
  links: WorkLink[];
  heroImage: {
    src: string;
    alt: string;
  };
};

const workItemsData: WorkItem[] = [
  {
    slug: "payment-methods-rollout-refund-api-ppp",
    title: "Unified Refund API",
    summary:
      "Built foundations and led rollout of a unified Refund API to third‑party payment providers.",
    problem:
      "Refund processing was fragmented across legacy code paths and provider‑specific logic, limiting reliability and observability. We needed a single entrypoint with parity and safety to reduce risk and simplify operations.",
    role: "Senior Software Engineer",
    year: "2024 - 2025",
    approach: [
      "Consolidated disparate refund flows behind a unified Payments API entrypoint.",
      "Established reusable patterns later applicable to captures and voids.",
      "Shipped observability and safeguards to handle high‑traffic events and retries.",
      "Led phased rollout to full traffic to de‑risk migration."
    ],
    heroImage: {
      src: "/images/case-studies/unified-refund.png",
      alt: "Refunds architecture schematic for unified API."
    },
    impact: [
      { label: "Reliability", value: "Unified flow with consistent retries", context: "across providers" },
      { label: "Operational visibility", value: "Improved dashboards + alerts", context: "refund health" },
      { label: "Migration risk", value: "Reduced via staged rollout", context: "full-traffic launch" }
    ],
    stack: ["Ruby on Rails", "MySQL", "Kafka", "Grafana", "SQL"],
    tags: ["Payments", "Refunds", "Platform"],
    links: [
      { label: "Shopify refunds (docs)", href: "https://help.shopify.com/en/manual/orders/refunds" }
    ]
  },
  {
    slug: "update-payments-api-orchestration-3p-gift-cards",
    title: "Redesign Payments API for Third-Party Gift Card Support",
    summary:
      "Delivered model foundations and orchestration to support asynchronous redeemables (e.g., third‑party gift cards) with multiple charges in a single payment.",
    problem:
      "Existing orchestration assumed single synchronous charge flows, making it hard to support split‑tenders and asynchronous redeemables.",
    role: "Senior Software Engineer",
    year: "2023 - 2024",
    approach: [
      "Introduced instruction/state record patterns for multi‑part payments.",
      "Enabled split‑payment patterns needed for gift cards and stored value.",
      "Strengthened payment attempts as a source of truth for orchestration.",
      "Prepared migrations and backfills to safely adopt new models."
    ],
    heroImage: {
      src: "/images/case-studies/giftcards.png",
      alt: "Payments orchestration diagram showing split tenders."
    },
    impact: [
      { label: "Capability", value: "Asynchronous redeemables supported", context: "3P gift cards" },
      { label: "Safety", value: "Stable rollout", context: "no regressions in existing flows" },
      { label: "Extensibility", value: "Reusable patterns", context: "future payment methods" }
    ],
    stack: ["Ruby", "MySQL", "Kafka", "Distributed Systems", "SQL"],
    tags: ["Payments", "Orchestration", "Redeemables"],
    links: [
      { label: "Gift cards (Shopify docs)", href: "https://help.shopify.com/en/manual/online-store/gift-cards" }
    ]
  },
  {
    slug: "ford-payment-library",
    title: "Ford Payment Library",
    summary:
      "Led an embedded payment library used in secure Ford web payment experiences.",
    problem:
      "Multiple properties needed consistent, secure payment capabilities without duplicating complex integrations.",
    role: "Software Engineering Team Lead",
    year: "2019 - 2021",
    approach: [
      "Created reusable secure payment components for multiple Ford properties.",
      "Balanced developer ergonomics with secure‑by‑default integration patterns.",
      "Drove delivery across backend and frontend concerns with clear ownership."
    ],
    heroImage: {
      src: "/images/case-studies/ford.png",
      alt: "Reusable payment components across multiple properties."
    },
    impact: [
      { label: "Reuse", value: "Shared library across properties", context: "consistent UX + security" },
      { label: "Time to integrate", value: "Reduced", context: "standardized interfaces" },
      { label: "Enablement", value: "Reservations and digital purchases", context: "production usage" }
    ],
    stack: ["Spring Framework", "Spring Boot", "React", "Java", "JavaScript"],
    tags: ["Payments", "SDK", "Security"],
    links: [
      { label: "Ford (company)", href: "https://www.ford.com/" }
    ]
  }
];

function assertNonEmpty(value: string, label: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Work content validation failed: ${label} is required.`);
  }
}

function assertNonEmptyArray<T>(value: T[], label: string) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Work content validation failed: ${label} must have at least one entry.`);
  }
}

function validateWorkItems(items: WorkItem[]) {
  items.forEach((item) => {
    assertNonEmpty(item.slug, "slug");
    assertNonEmpty(item.title, "title");
    assertNonEmpty(item.summary, "summary");
    assertNonEmpty(item.problem, "problem");
    assertNonEmpty(item.role, "role");
    assertNonEmpty(item.year, "year");
    assertNonEmptyArray(item.tags, "tags");
    assertNonEmptyArray(item.stack, "stack");
    assertNonEmptyArray(item.approach, "approach");
    assertNonEmptyArray(item.impact, "impact");
    assertNonEmptyArray(item.links, "links");
    assertNonEmpty(item.heroImage.src, "heroImage.src");
    assertNonEmpty(item.heroImage.alt, "heroImage.alt");
    item.approach.forEach((entry, index) => assertNonEmpty(entry, `approach[${index}]`));
    item.impact.forEach((metric, index) => {
      assertNonEmpty(metric.label, `impact[${index}].label`);
      assertNonEmpty(metric.value, `impact[${index}].value`);
    });
    item.links.forEach((link, index) => {
      assertNonEmpty(link.label, `links[${index}].label`);
      assertNonEmpty(link.href, `links[${index}].href`);
    });
  });
}

validateWorkItems(workItemsData);

export const workItems = workItemsData;
