import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-signoff">
            <span className="footer-kicker">End of issue · Detroit, Michigan</span>
            <p>Made for the businesses<br />that make things happen.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/#work">Selected work</Link>
            <Link href="/resume/fullscreen">Read the résumé</Link>
            <a href="mailto:cameron@nickert.dev">Get in touch ↗</a>
          </nav>
          <div className="footer-meta">
            <span>CN / ISSUE 01</span>
            <span>© 2026 Cameron Nickert</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
