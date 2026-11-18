export type WorkLink = {
  label: string;
  href: string;
  kind: "Product documentation" | "Technical documentation" | "Related functionality";
  context?: string;
};

export type WorkImpact = {
  label: string;
  value: string;
  context?: string;
};

export type WorkSection = {
  title: string;
  paragraphs: string[];
  steps?: string[];
};

export type WorkItem = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  year: string;
  organization?: string;
  includeInArchive?: boolean;
  approach: string[];
  sections?: WorkSection[];
  takeaway?: string;
  relatedSlugs?: string[];
  impact: WorkImpact[];
  stack: string[];
  tags: string[];
  links: WorkLink[];
  heroImage?: {
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
    organization: "Shopify",
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
      {
        label: "Shopify Payments refunds",
        href: "https://help.shopify.com/en/manual/payments/shopify-payments/payouts/refunds",
        kind: "Related functionality",
        context: "The merchant-facing refund experience and how it affects payouts."
      },
      {
        label: "Refunds for Shopify payments apps",
        href: "https://shopify.dev/docs/apps/build/payments/processing#refunds",
        kind: "Technical documentation",
        context: "The public interface a payments app uses to respond to a refund request."
      }
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
    organization: "Shopify",
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
      {
        label: "Gift card redemption at checkout",
        href: "https://help.shopify.com/en/manual/products/gift-card-products/redeem-gift-card",
        kind: "Related functionality",
        context: "Shows how a shopper can combine a standard Shopify gift card with another payment method to cover the balance."
      }
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
    organization: "Ford Motor Company",
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
      {
        label: "Ford reservations, payments, and orders",
        href: "https://www.ford.com/help/terms/reservations-payments-orders/",
        kind: "Related functionality",
        context: "Ford’s consumer-facing terms for online reservations, deposits, and payments."
      }
    ]
  },
  {
    slug: "hold-for-review",
    title: "Hold for Review",
    summary:
      "Championed a Shopify workflow for reviewing potentially risky orders while keeping automatic capture available for routine payments.",
    problem:
      "A merchant who wants to review a particular order should still be able to capture routine payments automatically. To make that possible, a review decision has to stay consistent across payment authorization, capture, and fulfillment, even when payment methods support different capture behavior.",
    role: "Senior Software Engineer",
    year: "2026",
    organization: "Shopify",
    includeInArchive: true,
    approach: [
      "I championed the workflow and integrated merchant-defined review decisions into payment and order handling.",
      "I implemented parts of the hold and release behavior, accounting for differences in payment capture and keeping the review decision consistent when lifecycle events were retried.",
      "I contributed to order visibility, review controls, settings, and notifications in the merchant admin. I also took part in live testing of the end-to-end workflow."
    ],
    sections: [
      {
        title: "Reuse the payment flow when a hold is released",
        paragraphs: [
          "Releasing an order for fulfillment can affect payment handling. An authorization and a capture are different states, and methods vary in whether they support a separate capture. The workflow had to respect the payment’s current state when a merchant released the hold or a lifecycle event was retried.",
          "We reconsidered the design when the review workflow started to need its own recovery logic. The established payment flows already handled much of that lifecycle. We reused them and kept the new logic focused on applying and releasing the hold. That left fewer payment recovery paths to maintain and validate."
        ]
      },
      {
        title: "Make the next action clear",
        paragraphs: [
          "A hold only helps if a merchant can find the order, understand why it is waiting, and see what they can do next. That was the purpose of the order visibility and review controls I contributed to. In live testing, we followed an order from the review decision through the merchant’s view of the hold, then checked payment and fulfillment after release."
        ]
      }
    ],
    impact: [
      { label: "Team delivery", value: "Implemented the review workflow and validated it end to end in live testing." }
    ],
    takeaway:
      "Start with the merchant decision, then trace it through each system it changes. Reusing established payment behavior reduced the number of custom recovery paths to maintain and test.",
    stack: ["Payments lifecycle", "Distributed systems", "End-to-end validation"],
    tags: ["Payments", "Risk", "Fulfillment"],
    relatedSlugs: ["payment-methods-rollout-refund-api-ppp", "update-payments-api-orchestration-3p-gift-cards", "mb-way-bizum"],
    links: [
      {
        label: "Protecting orders from fraud",
        href: "https://help.shopify.com/en/manual/fulfillment/managing-orders/protecting-orders",
        kind: "Related functionality",
        context: "An overview of Shopify’s public fraud analysis and order review tools."
      },
      {
        label: "Payment authorization and capture",
        href: "https://help.shopify.com/en/manual/payments/payment-authorization",
        kind: "Related functionality",
        context: "How existing capture settings and payment methods affect merchant workflows."
      },
      {
        label: "Fulfillment holds",
        href: "https://help.shopify.com/en/manual/fulfillment/fulfilling-orders/holding-fulfillments",
        kind: "Related functionality",
        context: "How merchants place, see, and release fulfillment holds in Shopify."
      }
    ]
  },
  {
    slug: "mb-way-bizum",
    title: "MB WAY & Bizum",
    summary:
      "Implemented eligibility changes for local payments and built Bizum requirements into Shopify’s existing merchant onboarding.",
    problem:
      "Customers in Portugal and Spain can authorize purchases through familiar mobile banking experiences. Offering MB WAY and Bizum through Shopify Payments required more than checkout support. Merchants also needed to know whether they were eligible, what information was missing, and how to finish setup.",
    role: "Senior Software Engineer",
    year: "2026",
    organization: "Shopify",
    includeInArchive: true,
    approach: [
      "I implemented and refined payment method eligibility across services and merchant-facing workflows as part of the team’s work to introduce MB WAY and Bizum.",
      "I integrated Bizum’s specific requirements into the existing merchant setup and contributed to shared capabilities for collecting business details and evaluating readiness.",
      "I tested key steps from the merchant checklist through to eligibility, tracing what happened after saving information and comparing the resulting status with what the merchant saw."
    ],
    sections: [
      {
        title: "Keep regional requirements inside a shared setup flow",
        paragraphs: [
          "Regional payment methods can ask for different information. In each case, merchants need to see what’s missing, supply it, and learn whether they can proceed. We kept that journey in the existing setup experience and added the checks specific to Bizum. That preserved a familiar interface for merchants and gave future integrations a pattern for adding their own requirements."
        ]
      },
      {
        title: "Follow a merchant through Bizum setup",
        paragraphs: [
          "I exercised key steps in the intended flow as a merchant would. I checked whether a missing requirement pointed me to the right place, then traced whether saving information was reflected in eligibility."
        ],
        steps: [
          "The merchant starts setting up Bizum.",
          "The checklist identifies missing requirements and guides the merchant to the relevant settings.",
          "The merchant supplies business information through the existing setup interface.",
          "Eligibility is reevaluated using the information they submitted."
        ]
      },
      {
        title: "What testing surfaced",
        paragraphs: [
          "A required business field was easy to miss, even after the checklist sent me to the right settings. A merchant could follow the prompt and still struggle to identify what they needed to provide.",
          "I also observed that a readiness check could run before recently saved information was available to it. From the merchant’s perspective, setup could still appear incomplete after they had supplied what was asked for. Both findings were follow-up items from testing."
        ]
      }
    ],
    impact: [
      { label: "Team delivery", value: "MB WAY and Bizum introduced through Shopify Payments", context: "Local checkout options for customers in Portugal and Spain, respectively" },
      { label: "Follow-up", value: "Enhanced Bizum onboarding was still in progress during my work" }
    ],
    takeaway:
      "Check an integration by following the customer's or merchant's journey across system boundaries. A requirement can be correct in one service and still be hard to complete in the product.",
    stack: ["Payments platform", "Merchant onboarding", "Workflow testing"],
    tags: ["Payments", "Onboarding", "Platform"],
    relatedSlugs: ["payment-methods-rollout-refund-api-ppp", "ford-payment-library", "hold-for-review"],
    links: [
      {
        label: "MB WAY on Shopify Payments",
        href: "https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/mb-way",
        kind: "Product documentation"
      },
      {
        label: "Bizum on Shopify Payments",
        href: "https://help.shopify.com/en/manual/payments/shopify-payments/local-payment-methods/bizum",
        kind: "Product documentation"
      }
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
    if (item.heroImage) {
      assertNonEmpty(item.heroImage.src, "heroImage.src");
      assertNonEmpty(item.heroImage.alt, "heroImage.alt");
    }
    item.approach.forEach((entry, index) => assertNonEmpty(entry, `approach[${index}]`));
    item.impact.forEach((metric, index) => {
      assertNonEmpty(metric.label, `impact[${index}].label`);
      assertNonEmpty(metric.value, `impact[${index}].value`);
    });
    item.links.forEach((link, index) => {
      assertNonEmpty(link.label, `links[${index}].label`);
      if (new URL(link.href).protocol !== "https:") {
        throw new Error(`Work content validation failed: ${item.slug} links[${index}] must use HTTPS.`);
      }
    });
  });
}

validateWorkItems(workItemsData);

export const workItems = workItemsData;
