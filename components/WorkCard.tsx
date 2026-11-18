import Link from "next/link";
import type { WorkItem } from "@/content/work";
import CaseArtwork, { hasCaseArtwork } from "@/components/CaseArtwork";
import OrganizationMark from "@/components/OrganizationMark";

type WorkCardProps = {
  item: WorkItem;
  compact?: boolean;
};

export default function WorkCard({ item, compact = false }: WorkCardProps) {
  return (
    <article
      className={`work-card reactive-shell comic-panel angled-panel${compact ? " work-card-compact" : ""}`}
      data-motion="reveal"
      data-reactive="card"
    >
      <span className="reactive-overlay" aria-hidden="true" data-reactive-overlay />
      <span className="reactive-ring" aria-hidden="true" data-reactive-ring />
      {!compact && hasCaseArtwork(item.slug) ? (
        <div className="work-card-media">
          <CaseArtwork slug={item.slug} />
        </div>
      ) : null}
      <div className="work-card-copy">
      <div className="work-card-header">
        {item.organization ? (
          <span className="eyebrow organization-byline">
            <OrganizationMark organization={item.organization} />
            {item.organization}
          </span>
        ) : null}
        <p className="eyebrow">{item.role}</p>
        <span className="dot" aria-hidden="true" />
        <p className="eyebrow">{item.year}</p>
      </div>
      <h3 className="work-title">{item.title}</h3>
      <p className="work-summary">{item.summary}</p>
      <div className="work-meta">
        <ul className="tag-list" aria-label={`${item.title} tags`}>
          {item.tags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
        <Link className="text-link sfx-anchor" href={`/work/${item.slug}`} aria-label={`More details about ${item.title}`} data-sfx-trigger>
          More details
          <span
            className="sfx-pop"
            aria-hidden="true"
            data-sfx="THUMP"
            data-sfx-asset="burst"
            data-sfx-frames="12"
            data-sfx-fps="12"
            data-sfx-cols="4"
            data-sfx-rows="3"
          >
            <span className="sfx-burst" aria-hidden="true" />
            THUMP
          </span>
        </Link>
      </div>
      </div>
    </article>
  );
}
