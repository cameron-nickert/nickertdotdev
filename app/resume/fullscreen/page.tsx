import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { projectHistory } from "@/content/project-history";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Cameron Nickert's experience building reliable payments, identity, and commerce systems."
};

const selectedSlugs = [
  "shopify-payments-card-present-gateway",
  "payment-methods-rollout-refund-api-ppp",
  "update-payments-api-orchestration-3p-gift-cards",
  "payment-methods-optimize-platform-performance-migrations",
  "ford-payment-library",
  "ford-pay-troubleshooting-portal",
  "web-appetizer"
];

const selectedProjects = selectedSlugs.map((slug) => projectHistory.find((item) => item.slug === slug)).filter((item): item is (typeof projectHistory)[number] => Boolean(item));

const experience = [
  {
    company: "Shopify",
    role: "Senior Software Engineer",
    team: "Payments Platform",
    period: "2022–present",
    points: [
      "Own payment platform work across architecture, implementation, rollout, performance, and production readiness.",
      "Led unified third-party refunds into Shopify’s processing flow, including retry and error-handling parity and a full-traffic rollout.",
      "Expanded Payments API orchestration for asynchronous redeemables and multiple charges in one payment.",
      "Resolved migration performance bottlenecks in checkout paths and helped prepare systems for peak events through load validation and game days."
    ]
  },
  {
    company: "Indeed",
    role: "Software Engineer II",
    team: "Identity Platform",
    period: "2021–2022",
    points: [
      "Maintained authentication and account services used by job seekers and employers.",
      "Contributed to secure identity flows across Java, Spring Boot, React, and TypeScript."
    ]
  },
  {
    company: "Ford Motor Company",
    role: "Software Engineering Team Lead",
    team: "Payments + Web Experiences",
    period: "2018–2021",
    points: [
      "Led an embedded payment library for secure reservations and digital purchases across Ford web properties.",
      "Led a support portal that let teams diagnose payment failures without direct database or log access."
    ]
  }
];

const ventureSlugs = ["staffed-ai-services", "web-appetizer", "lambda-eats-saas"];
const ventures = ventureSlugs.map((slug) => projectHistory.find((item) => item.slug === slug)).filter((item): item is (typeof projectHistory)[number] => Boolean(item));

const skillGroups = [
  { title: "Engineering", items: "Ruby on Rails · Java · Spring Boot · React · TypeScript · Node.js" },
  { title: "Systems", items: "Distributed systems · API design · SQL · Kafka · Performance · Observability" },
  { title: "Cloud & commerce", items: "GCP · Cloud Run · AWS Lambda · DynamoDB · Stripe · Payments" }
];

export default function ResumePage() {
  return (
    <main id="main-content" className={styles.resume}>
      <div className={styles.shell}>
        <nav className={styles.utility} aria-label="Resume actions">
          <Link href="/#resume">← Back to the story</Link>
          <span>CN / THE COLLECTED EXPERIENCE</span>
          <div className={styles.utilityActions}>
            <ThemeToggle compact />
            <a href="mailto:cameron@nickert.dev">Get in touch ↗</a>
          </div>
        </nav>
        <article className={styles.paper}>
          <header className={styles.hero}>
            <div className={styles.heroIdentity}>
              <p className={styles.kicker}>The collected experience · Vol. 01</p>
              <h1>Cameron Nickert<span>.</span></h1>
              <p>Senior Software Engineer · Payments, platforms, and merchant trust.</p>
            </div>
            <div className={styles.contact}>
              <span>Detroit Metro, Michigan</span>
              <a href="mailto:cameron@nickert.dev">cameron@nickert.dev</a>
              <a href="https://www.linkedin.com/in/cameron-nickert" target="_blank" rel="noreferrer">linkedin.com/in/cameron-nickert</a>
              <a href="https://cameron.nickert.dev">cameron.nickert.dev</a>
            </div>
          </header>
          <section className={styles.summary} aria-label="Professional summary">
            <strong>In brief</strong>
            <p>I build money-critical software for small businesses. My work spans payments, identity, and commerce systems, with an emphasis on reliability, performance, observability, and safe delivery across product and infrastructure teams.</p>
          </section>
          <div className={styles.introGrid}>
            <section className={styles.section} aria-labelledby="skills-title">
              <div className={styles.sectionHead}><span>01 / Toolkit</span><h2 id="skills-title">Capabilities</h2></div>
              <div className={styles.skills}>{skillGroups.map((group) => <p key={group.title}><strong>{group.title}</strong><span>{group.items}</span></p>)}</div>
            </section>
            <section className={styles.section} aria-labelledby="education-title">
              <div className={styles.sectionHead}><span>02 / Foundation</span><h2 id="education-title">Education</h2></div>
              <div className={styles.education}><p><strong>M.S., Software Engineering</strong><span>University of Michigan–Dearborn · 2019–2021</span></p><p><strong>B.S., Computer Science</strong><span>Central Michigan University · IT and Mathematics minors · 2014–2018</span></p></div>
              <p className={styles.mentor}><strong>FIRST Robotics mentor</strong> · Returned to my hometown school to teach wiring and programming, 2015–2016.</p>
            </section>
          </div>
          <section className={styles.section} aria-labelledby="experience-title">
            <div className={styles.sectionHead}><span>03 / Career</span><h2 id="experience-title">Experience</h2></div>
            <div className={styles.roles}>
              {experience.map((job) => (
                <article className={styles.role} key={job.company}>
                  <div className={styles.roleSide}><strong>{job.company}</strong><span>{job.period}</span></div>
                  <div>
                    <h3>{job.role}</h3>
                    <p className={styles.team}>{job.team}</p>
                    <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className={styles.section} aria-labelledby="projects-title">
            <div className={styles.sectionHead}><span>04 / Proof of work</span><h2 id="projects-title">Selected projects</h2></div>
            <div className={styles.projects}>
              {selectedProjects.map((project, index) => (
                <article className={styles.project} key={project.slug}>
                  <div className={styles.projectNumber}>{String(index + 1).padStart(2, "0")}</div>
                  <div className={styles.projectContent}>
                    <div className={styles.projectHeading}><h3>{project.title}</h3><span>{project.timeframe}</span></div>
                    <p>{project.summary}</p>
                    <ul>{project.details.slice(0, 2).map((detail) => <li key={detail}>{detail}</li>)}</ul>
                    <small>{project.technologies.slice(0, 4).join(" · ")}</small>
                  </div>
                </article>
              ))}
            </div>
            <Link className={styles.moreWork} href="/work/all">Explore the full project archive ↗</Link>
          </section>
          <section className={styles.section} aria-labelledby="ventures-title">
            <div className={styles.sectionHead}><span>05 / Independent</span><h2 id="ventures-title">Ventures</h2></div>
            <div className={styles.ventures}>{ventures.map((venture) => <article key={venture.slug}><div><h3>{venture.title}</h3><span>{venture.timeframe}</span></div><p>{venture.summary}</p></article>)}</div>
          </section>
          <footer className={styles.footer}><span>Built for the people on the other side of the software.</span><span>© 2026 Cameron Nickert</span></footer>
        </article>
      </div>
    </main>
  );
}
