import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CaseArtwork from "@/components/CaseArtwork";
import OrganizationMark from "@/components/OrganizationMark";
import PublicProjectLinks from "@/components/PublicProjectLinks";
import { getAllWorkSlugs, getRelatedWorkItems, getWorkBySlug } from "@/lib/work";
import styles from "./case-study.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) {
    return { title: "Work" };
  }

  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
    openGraph: {
      title: `${item.title} | Cameron Nickert`,
      description: item.summary,
      url: `/work/${item.slug}`,
      type: "article"
    }
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) {
    notFound();
  }
  const relatedItems = getRelatedWorkItems(item);

  return (
    <main className="main work-detail-page" id="main-content" tabIndex={-1}>
      <section className="section hero">
        <div className="container">
          <div className={`panel angled-panel ${styles.heroPanel}`}>
            <div className={styles.heroCopy}>
              <p className="eyebrow organization-byline">
                {item.organization ? <OrganizationMark organization={item.organization} /> : null}
                {item.organization ? `${item.organization} · ` : ""}Case Study · {item.year}
              </p>
              <h1 className="headline">{item.title}</h1>
              <p className="lead">{item.summary}</p>
              <div className={styles.heroLinks}>
                <Link className="text-link" href="/work/all">All projects</Link>
                <a className="text-link" href="#outcome">See the outcome</a>
              </div>
            </div>
            <div className="work-hero-media">
              <CaseArtwork slug={item.slug} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="panel angled-panel">
            <p className="eyebrow">My role</p>
            <h2 className="section-title">{item.role}</h2>
            <ul className="tag-list" aria-label="Work tags">
              {item.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel angled-panel">
            <h2 className="section-title">The problem</h2>
            <p className="body-copy">{item.problem}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="panel angled-panel">
            <h2 className="section-title">My contributions</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="resume-list" aria-label="Contribution highlights">
              {item.approach.map((step) => (
                <li key={step} className="body-copy">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {item.sections?.length ? (
        <section className="section" aria-labelledby="design-decisions">
          <div className="container split">
            <div className="panel angled-panel">
              <h2 className="section-title" id="design-decisions">Decisions and trade-offs</h2>
            </div>
            <div className={`panel angled-panel ${styles.decisions}`}>
              {item.sections.map((section) => (
                <details key={section.title} className={styles.decision}>
                  <summary>{section.title}</summary>
                  {section.paragraphs.map((paragraph) => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
                  {section.steps?.length ? (
                    <ol className={styles.steps}>
                      {section.steps.map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  ) : null}
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section" id="outcome">
        <div className="container split">
          <div className="panel angled-panel">
            <h2 className="section-title">Outcome</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="resume-list" aria-label="Project outcomes">
              {item.impact.map((metric) => (
                <li key={`${metric.label}-${metric.value}`}>
                  <span className="resume-role">{metric.value}</span>
                  <span className="resume-meta">
                    {metric.label}
                    {metric.context ? ` · ${metric.context}` : ""}
                  </span>
                </li>
              ))}
            </ul>
            {item.takeaway ? <p className="body-copy"><strong>What I took away.</strong> {item.takeaway}</p> : null}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="panel angled-panel">
            <h2 className="section-title">Tools and systems</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="tag-list" aria-label="Tools and systems">
              {item.stack.map((tool) => (
                <li key={tool} className="tag">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel angled-panel">
            <h2 className="section-title">Further reading</h2>
          </div>
          <div className="panel angled-panel">
            <PublicProjectLinks links={item.links} />
          </div>
        </div>
      </section>

      {relatedItems.length ? (
        <section className="section" aria-labelledby="related-work">
          <div className="container split">
            <div className="panel angled-panel">
              <h2 className="section-title" id="related-work">Related projects</h2>
            </div>
            <div className="panel angled-panel">
              <ul className="resume-list">
                {relatedItems.map((related) => (
                  <li key={related.slug}>
                    <Link className="text-link" href={`/work/${related.slug}`}>{related.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <div className="chapter-card speed-lines" role="separator" aria-label="The End">
        <span className="chapter-label">The End</span>
        <p className="chapter-title">To be Continued...</p>
      </div>
    </main>
  );
}
