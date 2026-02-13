import Link from "next/link";
import type { WorkItem } from "@/content/work";

type WorkCardProps = {
  item: WorkItem;
  artSrc?: string;
  artAlt?: string;
};

export default function WorkCard({ item, artSrc, artAlt }: WorkCardProps) {
  return (
    <article
      className="work-card reactive-shell comic-panel angled-panel"
      data-motion="reveal"
      data-reactive="card"
    >
      <span className="reactive-overlay" aria-hidden="true" data-reactive-overlay />
      <span className="reactive-ring" aria-hidden="true" data-reactive-ring />
      {artSrc ? (
        <div className="work-card-media impact-frame speed-lines" data-impact="true">
          <img src={artSrc} alt={artAlt ?? ""} loading="lazy" />
        </div>
      ) : null}
      <div className="work-card-header">
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
        <Link className="text-link sfx-anchor" href={`/work/${item.slug}`} data-sfx-trigger>
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
    </article>
  );
}
