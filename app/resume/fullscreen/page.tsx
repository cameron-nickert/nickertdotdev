import type { Metadata } from "next";
import { projectHistory } from "@/content/project-history";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Full Resume",
  description: "Full-screen resume view for Cameron Nickert."
};

const experience = [
  {
    company: "Shopify",
    role: "Senior Software Engineer",
    timeframe: "Nov 2024 - Present",
    bullets: [
      "Lead payouts and payments-platform capabilities for global merchants; drive reliability and incident response.",
      "Improved payout reliability to 99.99%+ and reduced manual escalations by 35% through resiliency and observability work."
    ]
  },
  {
    company: "Shopify",
    role: "Software Engineer",
    timeframe: "Mar 2022 - Nov 2024",
    bullets: [
      "Built and maintained Rails services and React admin surfaces for payments operations and reconciliation.",
      "Shipped payment-method migrations and refund flow improvements across core checkout payment paths."
    ]
  },
  {
    company: "Indeed",
    role: "Software Engineer II",
    timeframe: "Nov 2021 - Mar 2022",
    bullets: ["Contributed to identity and authentication platform services for core user flows, emphasizing security and reliability."]
  },
  {
    company: "Ford Motor Company",
    role: "Software Engineering Team Lead / Software Engineer",
    timeframe: "Jun 2018 - Nov 2021",
    bullets: [
      "Led payments, checkout, and web initiatives with focus on reliability, incident readiness, and delivery.",
      "Built internal and customer-facing systems with Java/Spring and React."
    ]
  }
];

const selectedProjects = [
  projectHistory.find((item) => item.slug === "shopify-payments-card-present-gateway-emv-foundation"),
  projectHistory.find((item) => item.slug === "payment-methods-rollout-refund-api-ppp"),
  projectHistory.find((item) => item.slug === "web-appetizer")
].filter((item): item is (typeof projectHistory)[number] => Boolean(item));

const projectTitleOverrides: Record<string, string> = {
  "shopify-payments-card-present-gateway-emv-foundation": "Card-Present Gateway: EMV Foundation",
  "payment-methods-rollout-refund-api-ppp": "Refund API Rollout for PPP"
};

const interests = ["Travel", "Hiking", "Camping", "Boating", "Sports", "Family"];

const projectImpactWins: Record<string, string[]> = {
  "payment-methods-rollout-refund-api-ppp": ["99.99%+ payout reliability", "35% fewer manual escalations"],
  "shopify-payments-card-present-gateway-emv-foundation": ["Provider-agnostic EMV foundation"],
  "web-appetizer": ["Checkout decisioning improvements (Shop Pay Installments)"]
};

const projectTimeframeOverrides: Record<string, string | null> = {
  "shopify-payments-card-present-gateway-emv-foundation": "2024"
};

const operatingPrinciples = [
  "Bias for simple, observable systems over complex novelty.",
  "Design for migration safety, rollback paths, and operational clarity.",
  "Ship in measurable slices with merchant impact as the decision anchor."
];

const skillGroups = [
  {
    label: "Backend",
    items: ["Ruby", "Rails", "Java", "Spring Boot", "Node.js"]
  },
  {
    label: "Frontend",
    items: ["TypeScript", "JavaScript", "React", "HTML", "CSS"]
  },
  {
    label: "Cloud & Data",
    items: ["AWS Lambda", "S3", "Cognito", "DynamoDB", "SQL", "GCP", "CI/CD"]
  }
];
const domainExpertise = ["Payments", "Reliability", "Identity", "E-commerce"];

const projectImpactNotes: Record<string, string> = {
  "shopify-payments-card-present-gateway-emv-foundation":
    "Focus: provider-agnostic EMV foundation enabling resilient card-present payments.",
  "payment-methods-rollout-refund-api-ppp":
    "Focus: unified refund orchestration across third-party payment providers with reliable rollout controls.",
  "web-appetizer": "Focus: practical SMB ordering flows with stable Stripe-backed payments."
};

export default function FullscreenResumePage() {
  return (
    <main id="main-content" className={styles.root}>
      <div className={styles.sheetWrap}>
        <article className={styles.sheet} aria-label="Cameron Nickert full resume">
          <div className={styles.issueBar}>
            <span>Issue #01</span>
            <span>Resume Origin Story</span>
            <span>One-Page Edition</span>
          </div>
          <header className={styles.header}>
            <div className={styles.headerLeft}>
              <div className={styles.headerIdentity}>
                <div className={styles.portraitPanel} aria-hidden="true">
                  <img src="/assets/scene-01-hero/portrait-cameron.png" alt="" />
                </div>
                <div className={styles.headerText}>
                  <h1 className={styles.name}>Cameron Michael Nickert, M.S.</h1>
                  <p className={styles.title}>Senior Software Engineer · Payments Platform · Merchant Reliability</p>
                  <p className={styles.metaLine}>
                    Payments platform engineer focused on merchant trust · Detroit Metropolitan Area
                  </p>
                  <div className={styles.headerMetaRows}>
                    <div className={styles.headerMetaRow}>
                      <p className={styles.headerMetaLabel}>Domain</p>
                      <ul className={styles.headerPills}>
                        {domainExpertise.map((item) => (
                          <li key={item} className={styles.headerPill}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.headerMetaRow}>
                      <p className={styles.headerMetaLabel}>Interests</p>
                      <ul className={styles.headerPills}>
                        {interests.map((item) => (
                          <li key={item} className={styles.headerPill}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className={styles.contactList}>
              <li>
                <a href="mailto:cameron@nickert.dev">cameron@nickert.dev</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/cameron-nickert" target="_blank" rel="noreferrer">
                  linkedin.com/in/cameron-nickert
                </a>
              </li>
              <li>
                <a href="https://cameron.nickert.dev" target="_blank" rel="noreferrer">
                  cameron.nickert.dev
                </a>
              </li>
            </ul>
          </header>

          <div className={styles.grid}>
            <section className={styles.left}>
              <div className={`${styles.block} ${styles.blockTape}`}>
                <h2>Education</h2>
                <ul className={styles.educationList}>
                  <li>
                    <h3 className={styles.itemHead}>University of Michigan - Dearborn</h3>
                    <p className={styles.itemMeta}>M.S. Software Engineering · 2019 - 2021</p>
                  </li>
                  <li>
                    <h3 className={styles.itemHead}>Central Michigan University</h3>
                    <p className={styles.itemMeta}>B.S. Computer Science · 2014 - 2018</p>
                  </li>
                </ul>
              </div>

              <div className={styles.block}>
                <h2>Experience</h2>
                <ul className={styles.experienceList}>
                  {experience.map((item) => (
                    <li key={`${item.company}-${item.role}`}>
                      <h3 className={styles.itemHead}>
                        {item.role} · {item.company}
                      </h3>
                      <p className={styles.itemMeta}>{item.timeframe}</p>
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

            </section>

            <section className={styles.right}>
              <div className={styles.block}>
                <h2>Skills</h2>
                <ul className={styles.skillsGrid}>
                  {skillGroups.map((group) => (
                    <li key={group.label} className={styles.skillsGroup}>
                      <p className={styles.skillsLabel}>{group.label}</p>
                      <ul className={styles.skillPills}>
                        {group.items.map((item) => (
                          <li key={item} className={styles.skillPill}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.block} ${styles.blockSoftAccent}`}>
                <h2>Operating Style</h2>
                <ul className={styles.miniList}>
                  {operatingPrinciples.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.block} ${styles.blockTape}`}>
                <h2>Selected Projects</h2>
                <ul className={styles.projectList}>
                  {selectedProjects.map((item) => {
                    const timeframeOverride = projectTimeframeOverrides[item.slug];
                    const timeframe = timeframeOverride === undefined ? item.timeframe : timeframeOverride;
                    const metaParts = [item.organization ?? null, timeframe].filter(
                      (part): part is string => Boolean(part)
                    );
                    const metaLine = metaParts.join(" · ");

                    return (
                      <li key={item.slug}>
                        <h3 className={styles.itemHead}>{projectTitleOverrides[item.slug] ?? item.title}</h3>
                        {metaLine ? <p className={styles.itemMeta}>{metaLine}</p> : null}
                        {projectImpactWins[item.slug]?.length ? (
                          <ul className={styles.projectWinList}>
                            {projectImpactWins[item.slug].map((win) => (
                              <li key={win} className={styles.projectWinBadge}>
                                {win}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        <p>{item.summary}</p>
                        {projectImpactNotes[item.slug] ? (
                          <p className={styles.projectImpact}>{projectImpactNotes[item.slug]}</p>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </div>

            </section>

          </div>
        </article>
      </div>
    </main>
  );
}
