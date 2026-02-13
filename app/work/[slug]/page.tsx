import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllWorkSlugs, getWorkBySlug } from "@/lib/work";

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
    description: item.summary
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) {
    notFound();
  }

  return (
    <main className="main work-detail-page">
      <section className="section hero">
        <div className="container">
          <div className="panel angled-panel">
            <p className="eyebrow">Case Study</p>
            <h1 className="headline">{item.title}</h1>
            <p className="lead">{item.summary}</p>
            <div className="work-hero-media impact-frame speed-lines">
              <img className="work-hero-image" src={item.heroImage.src} alt={item.heroImage.alt} />
            </div>
            <div className="hero-actions">
              <Link className="text-link" href="/">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="panel angled-panel">
            <p className="eyebrow">Summary</p>
            <h2 className="section-title">{item.role}</h2>
            <p className="body-copy">Year: {item.year}</p>
            <ul className="tag-list" aria-label="Work tags">
              {item.tags.map((tag) => (
                <li key={tag} className="tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="panel angled-panel">
            <p className="eyebrow">Problem</p>
            <p className="body-copy">{item.problem}</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="panel angled-panel">
            <p className="eyebrow">Approach</p>
            <h2 className="section-title">How the work shipped.</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="resume-list" aria-label="Approach highlights">
              {item.approach.map((step) => (
                <li key={step} className="body-copy">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel angled-panel">
            <p className="eyebrow">Impact</p>
            <h2 className="section-title">Outcomes and metrics.</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="resume-list" aria-label="Impact metrics">
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
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container split">
          <div className="panel angled-panel">
            <p className="eyebrow">Stack</p>
            <h2 className="section-title">Tools and systems.</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="tag-list" aria-label="Technology stack">
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
            <p className="eyebrow">Links</p>
            <h2 className="section-title">Further reading.</h2>
          </div>
          <div className="panel angled-panel">
            <ul className="resume-list" aria-label="Project links">
              {item.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-link" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="chapter-card speed-lines" role="separator" aria-label="The End">
        <span className="chapter-label">The End</span>
        <p className="chapter-title">To be Continued...</p>
      </div>
    </main>
  );
}
