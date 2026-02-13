import WorkCard from "@/components/WorkCard";
import { getAllWorkItems } from "@/lib/work";

export default function WorkPage() {
  const items = getAllWorkItems();

  return (
    <main className="main">
      <section className="section hero">
        <div className="container">
          <div className="panel angled-panel">
            <p className="eyebrow">Work</p>
            <h1 className="headline">
              <span className="tone-strong">
                Case studies with receipts in payments, platform, and SaaS.
              </span>
              <span className="tone-lite">Case studies in payments, platform, and SaaS.</span>
            </h1>
            <p className="lead">
              <span className="tone-strong">
                A focused selection covering reliability, checkout performance, and merchant-first
                tooling.
              </span>
              <span className="tone-lite">
                A focused selection of projects covering reliability, checkout performance, and
                merchant-first tooling.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="panel-stack">
            <div className="panel angled-panel">
              <div className="section-head">
                <div>
                  <p className="eyebrow">Selected Work</p>
                  <h2 className="section-title">
                    <span className="tone-strong">
                      Projects with measurable outcomes and clean wins.
                    </span>
                    <span className="tone-lite">Projects with measurable outcomes.</span>
                  </h2>
                </div>
                <p className="body-copy max-width">
                  <span className="tone-strong">
                    Each case study shows the problem, approach, and impact across technical and
                    business metrics.
                  </span>
                  <span className="tone-lite">
                    Each case study highlights the problem, approach, and impact across technical
                    and business metrics.
                  </span>
                </p>
              </div>
            </div>
            <div className="panel angled-panel">
              <div className="work-grid">
                {items.map((item) => (
                  <WorkCard key={item.slug} item={item} />
                ))}
              </div>
            </div>
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
