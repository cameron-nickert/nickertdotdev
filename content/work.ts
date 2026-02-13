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
    slug: "shopify-payments-platform",
    title: "Shopify Payments Platform",
    summary: "Money-critical systems that keep global payouts calm and on time.",
    problem:
      "Global merchants depend on payout reliability. We hardened core money movement services while keeping performance steady during growth.",
    role: "Senior Software Engineer",
    year: "2023 - Present",
    approach: [
      "Own reliability workstreams across payout orchestration and ledger integrity.",
      "Partner with risk, finance, and support teams to translate failure modes into engineering priorities.",
      "Ship guardrails for idempotency, reconciliation, and operational visibility."
    ],
    heroImage: {
      src: "/images/contact-illustration.png/shopify-payments-platform/hero-01.png",
      alt: "Payments operations dashboard with payout status, alerts, and system health charts."
    },
    impact: [
      { label: "Payout reliability", value: "99.99%+ on-time payouts", context: "normalized by region" },
      { label: "Operational load", value: "35% fewer manual escalations", context: "first 2 quarters" },
      { label: "Recovery time", value: "Minutes instead of hours", context: "for payout retries" }
    ],
    stack: ["Ruby on Rails", "Kafka", "MySQL", "Docker", "Grafana"],
    tags: ["Payments", "Reliability", "Platform"],
    links: [
      { label: "Shopify Payments overview", href: "https://www.shopify.com/payments" }
    ]
  },
  {
    slug: "shop-pay-installments",
    title: "Shop Pay Installments",
    summary: "Installment checkout that stays fast, clear, and risk-aware.",
    problem:
      "Merchants needed higher conversion without adding checkout friction. Installments required clear eligibility, fast decisions, and risk-aware controls.",
    role: "Software Engineer",
    year: "2022 - 2023",
    approach: [
      "Implemented UI + API flows for pre-qualification and transparent repayment terms.",
      "Tuned back-end decisioning queries to keep checkout latency within target.",
      "Worked with product to launch incremental rollouts and monitor adoption."
    ],
    heroImage: {
      src: "/images/contact-illustration.png/shop-pay-installments/hero-01.png",
      alt: "Checkout screen showing installment options and eligibility status."
    },
    impact: [
      { label: "Checkout latency", value: "<250ms decisioning", context: "p95 target hit" },
      { label: "Conversion", value: "Lift observed", context: "merchant cohort pilots" },
      { label: "Rollout safety", value: "Zero regressions", context: "feature flag launches" }
    ],
    stack: ["React", "Ruby", "PostgreSQL", "GraphQL", "LaunchDarkly"],
    tags: ["Checkout", "Fintech", "Performance"],
    links: [{ label: "Shop Pay Installments", href: "https://www.shopify.com/shop-pay-installments" }]
  },
  {
    slug: "nerd-nibble-webappetizer",
    title: "Web Appetizer (Nerd Nibble)",
    summary: "Serverless ordering for local restaurants with Stripe-powered payments.",
    problem:
      "Local restaurants needed a fast, low-fee way to launch online ordering without heavy ops.",
    role: "Co-Founder",
    year: "2020 - 2022",
    approach: [
      "Built a serverless ordering pipeline with Stripe payments and automated receipts.",
      "Designed merchant dashboards for menu, hours, and fulfillment control.",
      "Delivered integrations for SMS order status and delivery routing."
    ],
    heroImage: {
      src: "/images/contact-illustration.png/nerd-nibble-webappetizer/hero-01.png",
      alt: "Restaurant ordering platform with menu management dashboard and mobile order tracker."
    },
    impact: [
      { label: "Merchant onboarding", value: "<1 day", context: "from signup to launch" },
      { label: "Order throughput", value: "Thousands of orders", context: "seasonal peaks" },
      { label: "Operational cost", value: "Minimal infra spend", context: "serverless model" }
    ],
    stack: ["AWS Lambda", "TypeScript", "Stripe", "DynamoDB", "Twilio"],
    tags: ["SaaS", "Serverless", "Founding"],
    links: [{ label: "Product summary", href: "https://example.com/webappetizer" }]
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
