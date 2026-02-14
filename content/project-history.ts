export type ProjectHistoryItem = {
  slug: string;
  title: string;
  timeframe: string;
  organization?: string;
  summary: string;
  details: string[];
  technologies: string[];
};

export const projectHistory: ProjectHistoryItem[] = [
  // {
  //   slug: "shopify-payments-card-present-gateway-emv-foundation",
  //   title: "Card-Present Gateway: Single-Message EMV Foundation",
  //   timeframe: "2026",
  //   organization: "Shopify",
  //   summary:
  //     "Delivered gateway foundations that unblock provider-agnostic, card-present payment processing.",
  //   details: [
  //     "Helped define scalable architecture for single-message EMV and future card-present flows.",
  //     "Unblocked parallel POS, provider, and infrastructure workstreams with foundational APIs.",
  //     "Supported early end-to-end gateway validation through a mock-provider environment."
  //   ],
  //   technologies: ["Payments Platform", "EMV", "POS", "API Design", "Systems Design"]
  // },
  {
    slug: "shopify-payments-card-present-confidential",
    title: "Confidential Project",
    timeframe: "2026",
    organization: "Shopify",
    summary:
      "Shipping features to the Shopify platform.",
    details: [
      "More details to come.",
    ],
    technologies: ["Payments Platform", "Systems Design", "Ruby on Rails"]
  },
  {
    slug: "payment-methods-rollout-refund-api-ppp",
    title: "Unified Refund API",
    timeframe: "2024 - 2025",
    organization: "Shopify",
    summary:
      "Built foundations and led rollout of unified Refund API support to third-party payment providers.",
    details: [
      "Brought third-party refunds into the unified processing flow with parity for retries and error handling.",
      "Shipped operational monitoring and reliability safeguards for high-traffic events.",
      "Drove rollout to full traffic and reduced migration risk for future payment-method expansions.",
      "Contributed to a single entrypoint and flow structure for refunds in Payments API.",
      "Established reusable patterns later applicable to captures and voids.",
      "Helped create a cleaner path toward consolidation of legacy refund code paths."
    ],
    technologies: ["Ruby on Rails", "Systems Design", "Refunds", "Observability", "Incident Response" , "SQL", "Kafka"]
  },
  {
    slug: "payment-methods-optimize-platform-performance-migrations",
    title: "Optimize Payments Platform Performance for Migrations",
    timeframe: "2025",
    organization: "Shopify",
    summary:
      "Restored throughput parity during concurrent payment migrations in critical checkout paths.",
    details: [
      "Worked on performance bottlenecks that caused elevated error rates under migration load.",
      "Helped recover near-baseline throughput for both third-party and first-party migration tracks.",
      "Improved platform confidence for flash-sale and peak-volume merchant workloads."
    ],
    technologies: ["Performance Engineering", "Observability", "Load Testing", "Ruby", "SQL", "Kafka"]
  },
  {
    slug: "update-payments-api-orchestration-3p-gift-cards",
    title: "Redesign Payments API for Third-Party Gift Card Support",
    timeframe: "2023 - 2024",
    organization: "Shopify",
    summary:
      "Delivered model foundations and expanded orchestration to support asynchronous redeemables (e.g., third-party gift cards) with multiple charges in one payment.",
    details: [
      "Enabled split-payment patterns needed for third-party gift card support.",
      "Helped evolve orchestration so payment attempts became a stronger source of truth.",
      "Supported broad rollout while preserving stability of existing payment flows.",
      "Helped support gift cards and stored-value style flows with more flexible orchestration.",
      "Contributed to new instruction/state record patterns for multi-part payments.",
      "Supported migration and backfill readiness needed by downstream redeemables projects."
    ],
    technologies: ["Product", "UX", "Data", "Ruby", "Distributed Systems", "SQL", "Systems Design"]
  },
  {
    slug: "payments-platform-game-day",
    title: "Plan and Conduct Payments Platform Game Day",
    timeframe: "2023",
    organization: "Shopify",
    summary:
      "Prepared Payments Platform for peak events through scenario testing and failure-readiness exercises.",
    details: [
      "Supported game-day planning and execution across engineering and partner teams.",
      "Helped identify failure modes and convert findings into actionable follow-up work.",
      "Strengthened incident readiness ahead of BFCM and major payments launches."
    ],
    technologies: ["Game Days", "Incident Management", "Load Testing", "Reliability Engineering", "Observability"]
  },
  // merged into update-payments-api-orchestration-3p-gift-cards
  {
    slug: "spi-prequalify-on-product-pages",
    title: "Prequalify for Installments on Product Pages",
    timeframe: "2022 - 2023",
    organization: "Shopify",
    summary:
      "Prototyped moving installment prequalification earlier in the buyer journey on PDP surfaces.",
    details: [
      "Supported up-funnel installment eligibility UX exploration before checkout.",
      "Contributed to product/technical framing aimed at improved conversion outcomes.",
      "Built a working prototype and experimentation plan; initiative did not proceed to launch."
    ],
    technologies: ["Shop Pay Installments", "Checkout", "Product Experimentation", "UX", "Analytics"]
  },
  {
    slug: "spi-buyer-transaction-emails-lift-shift",
    title: "Lift & Shift of SPI Buyer Transaction Emails",
    timeframe: "2022 - 2023",
    organization: "Shopify",
    summary:
      "Drove systems design, project scoping, and prototyping to migrate SPI buyer transaction emails; priorities shifted before rollout.",
    details: [
      "Completed systems design and scoping for ownership shift from partner systems to Shop.",
      "Prototyped routing and experience alignment across buyer app surfaces.",
      "Effort was deprioritized prior to production rollout."
    ],
    technologies: ["Shop Pay Installments", "Messaging", "Shop", "Product Integration", "Email Systems"]
  },
  {
    slug: "spi-loss-remediation",
    title: "Shop Pay Installments Loss Remediation",
    timeframe: "2022",
    organization: "Shopify",
    summary:
      "Contributed to remediation efforts addressing major SPI loss drivers and risk controls.",
    details: [
      "Supported initiatives focused on reducing fraud-related and negative-balance losses.",
      "Helped improve operational visibility and mitigation readiness around loss events.",
      "Worked within a cross-functional effort to stabilize installment-loss economics."
    ],
    technologies: ["Risk", "Fraud Mitigation", "Payments Operations", "Shop Pay Installments", "Data Analysis"]
  },
  {
    slug: "spi-bfcm-2022-preparation",
    title: "Shop Pay Installments BFCM 2022 Preparation",
    timeframe: "2022",
    organization: "Shopify",
    summary:
      "Prepared SPI infrastructure and operational readiness for peak BFCM traffic with Affirm.",
    details: [
      "Supported load-validation, resiliency checks, and partner readiness planning.",
      "Contributed to incident-response preparation and game-day style readiness workflows.",
      "Helped improve confidence in platform capacity for high-volume seasonal demand."
    ],
    technologies: ["BFCM Readiness", "Load Testing", "Reliability Engineering", "Incident Response", "Shop Pay Installments"]
  },
  {
    slug: "staffed-ai-services",
    title: "Staffed AI Services",
    timeframe: "2025 - Present",
    summary:
      "Built staffing and automation services with web-focused, cloud-native deployments.",
    details: [
      "Delivered productized services that combine custom workflows with AI-assisted operations.",
      "Shipped and operated cloud-native deployments for speed, reliability, and iteration.",
      "Focused on practical automation outcomes for small and medium businesses."
    ],
    technologies: ["PHP", "GCP", "Cloud Run", "SQL", "Bootstrap", "Node.js", "TypeScript"]
  },
  {
    slug: "indeed-identity-platform",
    title: "Indeed Identity Platform",
    timeframe: "2021 - 2022",
    organization: "Indeed",
    summary:
      "Maintained authentication and identity services serving job seekers and employers.",
    details: [
      "Contributed to authentication and account flows across the platform.",
      "Supported stable, secure identity experiences at scale.",
      "Worked across backend services and frontend product surfaces."
    ],
    technologies: ["React", "Java", "TypeScript", "Spring Boot"]
  },
  {
    slug: "web-appetizer",
    title: "Web Appetizer",
    timeframe: "2020 - 2022",
    organization: "Nerd Nibble",
    summary:
      "Built a serverless SaaS ordering platform for restaurants with payment and POS-style workflows.",
    details: [
      "Created customer-facing menu customization and ordering experiences.",
      "Built a POS-style interface for receiving and managing new orders.",
      "Implemented real-time order updates using WebSocket connections."
    ],
    technologies: [
      "AWS Lambda",
      "React",
      "TypeScript",
      "Stripe",
      "DynamoDB",
      "Cognito",
      "S3",
      "Serverless Framework"
    ]
  },
  {
    slug: "ford-pay-troubleshooting-portal",
    title: "Ford Pay Troubleshooting Portal",
    timeframe: "2020 - 2021",
    organization: "Ford Motor Company",
    summary:
      "Led development of a support tool that reduced manual troubleshooting for payment journeys.",
    details: [
      "Enabled business teams to inspect payment journey failures without direct log/database access.",
      "Improved support speed and confidence with purpose-built diagnostics.",
      "Drove delivery as a lead engineer across backend and frontend concerns."
    ],
    technologies: ["Spring Framework", "Spring Boot", "React", "Java", "TypeScript"]
  },
  {
    slug: "ford-payment-library",
    title: "Ford Payment Library",
    timeframe: "2019 - 2021",
    organization: "Ford Motor Company",
    summary: "Led an embedded payment library used in secure Ford web payment experiences.",
    details: [
      "Created reusable secure payment capabilities for multiple Ford properties.",
      "Supported reservations and digital purchase flows in consumer experiences.",
      "Balanced developer ergonomics with secure-by-default integration patterns."
    ],
    technologies: ["Spring Framework", "Spring Boot", "React", "Java", "JavaScript"]
  },
  {
    slug: "lambda-eats-saas",
    title: "Lambda Eats SaaS (Master's Project)",
    timeframe: "2021",
    organization: "University of Michigan - Dearborn",
    summary: "Built a serverless online ordering SaaS platform as a graduate capstone project.",
    details: [
      "Designed a multi-tenant model to support many shops and menu configurations.",
      "Delivered tablet-facing order intake and merchant workflows.",
      "Validated serverless architecture patterns for cost and scalability."
    ],
    technologies: ["AWS Lambda", "React", "Node.js", "TypeScript", "Bootstrap"]
  },
  {
    slug: "lewiston-lodge-ecommerce",
    title: "Lewiston Lodge E-commerce Website",
    timeframe: "Project",
    summary: "Built gift card purchase and email fulfillment flows for a local restaurant.",
    details: [
      "Enabled online checkout and digital gift card operations.",
      "Supported small-business digital revenue with practical tooling."
    ],
    technologies: ["React", "TypeScript", "Stripe"]
  },
  {
    slug: "aircraft-part-usa",
    title: "Aircraft Part USA",
    timeframe: "Project",
    summary: "Built inventory search with secure CSV upload for data updates.",
    details: [
      "Implemented searchable inventory experiences for operations teams.",
      "Added secure data ingestion paths for ongoing catalog maintenance."
    ],
    technologies: ["TypeScript", "Node.js", "SQL"]
  },
  {
    slug: "resume-website",
    title: "Resume Website",
    timeframe: "Project",
    summary:
      "Built a full-stack resume site with job submissions, cover-letter generation, and downloads.",
    details: [
      "Created an interactive pipeline for job opportunity intake.",
      "Automated document generation and resume asset delivery."
    ],
    technologies: ["Vue.js", "TypeScript", "Bootstrap"]
  },
  {
    slug: "basic-online-ordering-system",
    title: "Basic Online Ordering System",
    timeframe: "Project",
    summary: "Built a React + Spring Boot ordering system with integrated Stripe payments.",
    details: [
      "Implemented cart, checkout, and payment processing flows.",
      "Delivered end-to-end order lifecycle support in a compact stack."
    ],
    technologies: ["React", "Spring Boot", "Java", "Stripe"]
  },
  {
    slug: "kanboard-task-manager",
    title: "Kanboard Task Manager",
    timeframe: "Project",
    summary: "Built a Kanban-style project management web application.",
    details: [
      "Implemented board/list/card interactions and state management.",
      "Supported team workflow visibility and task tracking."
    ],
    technologies: ["React", "Spring Boot", "Java", "SQL"]
  },
  {
    slug: "photography-management-portal",
    title: "Photography Management Portal",
    timeframe: "Project",
    summary: "Built a photo album management portal for photographers.",
    details: [
      "Enabled album organization, asset access, and portfolio workflows.",
      "Focused on creator-friendly management UX."
    ],
    technologies: ["Vue.js", "Node.js"]
  }
];
