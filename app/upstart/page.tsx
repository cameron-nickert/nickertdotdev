import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CaseArtwork from "@/components/CaseArtwork";
import OrganizationMark from "@/components/OrganizationMark";
import WorkCard from "@/components/WorkCard";
import { profileSummary } from "@/content/profile";
import { getWorkBySlug } from "@/lib/work";
import styles from "./upstart.module.css";

const roleUrl = "https://careers.upstart.com/jobs/senior-software-engineer-white-label-platform";
const description = "Cameron Nickert’s portfolio for Upstart’s White Label Platform role, including reusable payment APIs, merchant onboarding, and financial workflows.";
const portrait = {
  src: "/assets/scene-01-hero/portrait-cameron.png",
  alt: "Comic portrait of Cameron Nickert",
  width: 928,
  height: 1152
};

export const metadata: Metadata = {
  title: "For Upstart · White Label Platform",
  description,
  alternates: { canonical: "/upstart" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Cameron Nickert · For Upstart",
    description,
    url: "/upstart",
    type: "website",
    images: [{ url: portrait.src, alt: portrait.alt, width: portrait.width, height: portrait.height }]
  }
};

const experience = [
  { company: "Shopify", role: "Senior Software Engineer", focus: "Payments Platform", period: "2022–present" },
  { company: "Indeed", role: "Software Engineer II", focus: "Identity Platform", period: "2021–2022" },
  { company: "Ford", role: "Software Engineering Team Lead", focus: "Payments & Web Experiences", period: "2018–2021" }
];

const education = [
  { degree: "M.S., Software Engineering", school: "University of Michigan–Dearborn" },
  { degree: "B.S., Computer Science", school: "Central Michigan University" }
];

const roleFit = [
  {
    need: "Configurable partner capabilities",
    example: "I built the foundations for a common refund API and led the rollout to third-party payment providers. At Ford, I led delivery of an embeddable payment library for multiple web properties."
  },
  {
    need: "Reliable financial workflows",
    example: "I championed Hold for Review and implemented changes across payment and order workflows. We reused established payment behavior to keep authorization, capture, and fulfillment aligned with less custom recovery logic."
  },
  {
    need: "Partner onboarding",
    example: "I integrated Bizum’s eligibility requirements into Shopify’s existing merchant setup and traced how new information reached the readiness check. That exposed gaps in both the form and the timing of the check."
  },
  {
    need: "Self-service tools and workflow APIs",
    example: "I led Ford’s payment troubleshooting portal across the backend and React UI. It gave support teams a way to investigate payment failures without direct access to logs or databases."
  },
  {
    need: "Production reliability",
    example: "I resolved bottlenecks in Shopify checkout migration paths and took part in load validation for peak events. I work with Rails, SQL, and Kafka, and have built cloud applications with AWS Lambda and Google Cloud Run."
  },
  {
    need: "Product and engineering collaboration",
    example: "For Shop Pay Installments, I helped frame whether to show prequalification before checkout and built a prototype to test the idea."
  }
];

const selected = [
  {
    slug: "payment-methods-rollout-refund-api-ppp",
    summary: "I built the foundations for one refund API across providers and led the staged rollout. A common path made error handling and retries consistent and gave future integrations a pattern to reuse."
  },
  {
    slug: "hold-for-review",
    summary: "I championed the workflow that lets merchants pause risky orders for review while routine payments keep moving. I implemented changes across payment and order handling and took part in live validation."
  },
  {
    slug: "mb-way-bizum",
    summary: "Shopify Payments introduced local options for shoppers in Portugal and Spain. I extended eligibility checks and integrated Bizum’s onboarding requirements into the merchant setup Shopify already used."
  },
  {
    slug: "update-payments-api-orchestration-3p-gift-cards",
    summary: "A gift card and another payment method needed to work in one checkout even if they completed at different times. I built the orchestration foundations for that workflow."
  },
  {
    slug: "ford-payment-library",
    summary: "I led delivery of an embeddable payment library that gave Ford web properties a shared integration for reservations and digital purchases."
  }
].map(({ slug, summary }) => {
  const work = getWorkBySlug(slug);
  if (!work) throw new Error(`Missing Upstart case study: ${slug}`);
  return { ...work, summary };
});

const principles = [
  { title: "Reuse what already works.", description: "For Hold for Review, we realized the established payment flows already handled much of the lifecycle. That gave us fewer recovery paths to build, maintain, and test." },
  { title: "Start from the user’s next step.", description: "In Bizum setup, I followed a missing requirement as a merchant would. That let me see the gap between a correct eligibility rule and a form that made it hard to act on." },
  { title: "Plan for the rollout in the design.", description: "On refunds, I built for consistent retries and added monitoring and safeguards. I led the rollout in stages because verifying the migration was part of delivering the API." }
];

export default function UpstartPage() {
  const [lead, ...supporting] = selected;

  return (
    <main id="main-content" className={`main ${styles.page}`} tabIndex={-1}>
      <div className={`container ${styles.shell}`}>
        <header className={styles.cover}>
          <div className={styles.coverCopy}>
            <p className={`eyebrow ${styles.kicker}`}>For Upstart’s White Label Platform team</p>
            <h1>Make complex financial workflows feel simple.</h1>
            <p className={styles.intro}>
              I’m <strong>Cameron Nickert</strong>, a Senior Software Engineer on Shopify’s Payments Platform. I led the rollout of a unified refund API and championed the workflow that gives merchants time to review risky orders before fulfillment.
            </p>
            <div className={styles.actions}>
              <a className={`button ${styles.primary}`} href="#upstart-work">See selected work <span aria-hidden="true">↓</span></a>
              <Link className={styles.link} href="/resume/fullscreen">Read my résumé <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <figure className={styles.portrait}>
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(max-width: 600px) 1px, (max-width: 760px) 210px, 320px"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption>Detroit Metropolitan Area</figcaption>
          </figure>
        </header>

        <section className={styles.section} aria-labelledby="why-upstart">
          <div className={styles.sectionHeading}>
            <h2 id="why-upstart">Why Upstart?</h2>
            <a href={roleUrl} className={styles.link}>Read the role description <span aria-hidden="true">↗</span></a>
          </div>
          <div className={styles.why}>
            <p>
              Upstart works with banks and credit unions to make borrowing simpler and more affordable. I’m drawn to the White Label team’s part in that effort, helping lenders onboard through shared capabilities while preserving what’s distinct about each borrower experience.
            </p>
            <p>
              In payments, I’ve had to decide what should stay common across providers and what needs to vary by payment method or market. I’d like to bring that judgment to both sides of lender onboarding, from designing the workflow to making the next step clear for the person using it.
            </p>
          </div>
        </section>

        <section className={styles.record} aria-label="Career and education at a glance">
          <ul className={styles.roles}>
            {experience.map(({ company, role, focus, period }) => (
              <li key={company}>
                <strong className={styles.employer}>
                  <OrganizationMark organization={company} className={styles.organizationMark} />
                  {company}
                </strong>
                <span>{role}</span>
                <small>{focus} · {period}</small>
              </li>
            ))}
          </ul>
          <p className={styles.degrees}>
            {education.map(({ degree, school }) => (
              <span className={styles.degree} key={school}>
                <OrganizationMark organization={school} className={styles.organizationMark} />
                <span><strong>{degree}</strong> · {school}</span>
              </span>
            ))}
          </p>
        </section>

        <section className={styles.section} aria-labelledby="upstart-fit">
          <div className={styles.sectionHeading}>
            <h2 id="upstart-fit">Where my experience fits</h2>
          </div>
          <dl className={styles.fit}>
            {roleFit.map(({ need, example }) => (
              <div key={need} className={styles.fitRow}>
                <dt>{need}</dt>
                <dd>{example}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.section} id="upstart-work" aria-labelledby="upstart-work-title">
          <div className={styles.sectionHeading}>
            <h2 id="upstart-work-title">Selected work</h2>
            <Link href="/work/all" className={styles.link}>View the project archive <span aria-hidden="true">↗</span></Link>
          </div>
          <div className={styles.feature}>
            <CaseArtwork slug={lead.slug} />
            <WorkCard item={lead} compact />
          </div>
          <div className={styles.workGrid}>
            {supporting.map((item) => <WorkCard key={item.slug} item={item} compact />)}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="upstart-approach">
          <div className={styles.sectionHeading}>
            <h2 id="upstart-approach">How I work</h2>
          </div>
          <div className={styles.principles}>
            {principles.map(({ title, description }) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="upstart-closing">
          <div>
            <h2 id="upstart-closing">Let’s talk about the next partner.</h2>
            <p>I’d love to hear which parts of onboarding repeat today, where lenders need room to do things differently, and what a better first launch would look like for them and their borrowers.</p>
          </div>
          <nav className={styles.contact} aria-label="More about Cameron">
            <Link href="/">Full portfolio</Link>
            <Link href="/resume/fullscreen">Résumé</Link>
            <a href={`https://${profileSummary.contact.linkedin}`}>LinkedIn</a>
            <a href={`mailto:${profileSummary.contact.email}`}>Email me</a>
          </nav>
        </section>
      </div>
    </main>
  );
}
