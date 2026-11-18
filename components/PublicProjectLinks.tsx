import type { WorkLink } from "@/content/work";
import styles from "./PublicProjectLinks.module.css";

export default function PublicProjectLinks({ links }: { links: WorkLink[] }) {
  return (
    <ul className={styles.references} aria-label="Public project references">
      {links.map(({ href, label, kind, context }) => (
        <li key={href} className={styles.reference}>
          <span className={styles.kind}>{kind}</span>
          <a className={styles.link} href={href}>
            {label} <span aria-hidden="true">↗</span>
          </a>
          {context && <p className={styles.context}>{context}</p>}
        </li>
      ))}
    </ul>
  );
}
