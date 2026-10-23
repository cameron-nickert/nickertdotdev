import WorkCard from "@/components/WorkCard";
import Link from "next/link";
import { ComicMoments, ComicOrigin, ComicReader } from "@/components/ComicExperience";
import "./comic.css";
import ContactForm from "@/components/ContactForm";
import ResumeCoverLink from "@/components/ResumeCoverLink";
import { profileSummary } from "@/content/profile";
import { workItems } from "@/content/work";

export default function HomePage() {
  const workTags: string[] = [];
  workItems.forEach((item) => {
    item.tags.forEach((tag) => {
      if (!workTags.includes(tag)) {
        workTags.push(tag);
      }
    });
  });

  const linkedinUrl = profileSummary.contact.linkedin.startsWith("http")
    ? profileSummary.contact.linkedin
    : `https://${profileSummary.contact.linkedin}`;
  const workCardArt: Record<string, { src: string; alt: string }> = {
    "payment-methods-rollout-refund-api-ppp": {
      src: "/images/case-studies/unified-refund.png",
      alt: "Illustration of a unified refunds architecture."
    },
    "update-payments-api-orchestration-3p-gift-cards": {
      src: "/images/case-studies/giftcards.png",
      alt: "Illustration of split tenders and asynchronous redeemables."
    },
    "ford-payment-library": {
      src: "/images/case-studies/ford.png",
      alt: "Illustration of reusable payment components across apps."
    }
  };

  return (
    <main className="main immersive-comic" id="main-content" tabIndex={-1}>
      <ComicReader />
      <section
        id="home"
        className="section hero scene-01-hero"
        data-scene="scene-01-hero"
        data-nav-section="true"
        aria-labelledby="home-title"
      >
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg hero-panel-bg" />
          </div>
          <div className="scene-layer layer-fg" />
        </div>
        <div className="container scene-layer layer-ui">
          <div className="hero-comic">
            <div className="cover-copy">
              <p className="cover-edition">An ongoing story · Detroit, Michigan</p>
              <h1 id="home-title"><span>Cameron</span><span>Nickert<span className="cover-period">.</span></span></h1>
              <p className="cover-deck">Engineer by trade.<br />Builder by nature.</p>
              <p className="cover-description">Payments, platforms, and the life in between.</p>
              <a className="cover-start" href="#resume">Enter the story <span aria-hidden="true">↘</span></a>
            </div>
            <div className="hero-portrait">
              <span className="cover-stamp">MEET THE<br />BUILDER</span>
              <div className="hero-media">
                <img className="hero-media-image" src="/assets/scene-01-hero/portrait-cameron.png" alt="Comic portrait of Cameron Nickert" fetchPriority="high" />
              </div>
              <p className="cover-caption">“Let’s build something that matters.”</p>
            </div>
            <div className="cover-footer"><span>VOL. 01 / A LIFE IN PANELS</span><span>SCROLL TO TURN THE PAGE ↓</span></div>
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-resume speed-lines"
        role="separator"
        aria-label="Chapter 02: Resume"
      >
        <span className="chapter-label">Chapter 02</span>
        <p className="chapter-title">The collected experience.</p>
      </div>

      <section
        id="resume"
        className="section alt scene-05-resume"
        data-scene="scene-05-resume"
        data-nav-section="true"
        aria-labelledby="resume-title"
      >
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg resume-panel-bg" />
          </div>
        </div>
        <div className="container resume-comic scene-layer layer-ui">
          <div className="panel panel-resume-intro angled-panel" data-motion="reveal">
            <p className="eyebrow">Resume</p>
            <h2 className="section-title" id="resume-title">
              <span className="tone-strong">The work<br />behind the work.</span>
              <span className="tone-lite">Experience that adds up.</span>
            </h2>
            <p className="body-copy">
              <span className="tone-strong">
                I&apos;ve built payment, identity, and commerce systems that keep trust high and
                outcomes measurable.
              </span>
              <span className="tone-lite">
                  I build payment, identity, and commerce systems that prioritize reliability and
                  customer trust.
              </span>
            </p>
            <ul className="resume-list" aria-label="Resume highlights">
              <li>
                <span className="resume-role">Senior Software Engineer, Shopify</span>
                <span className="resume-meta">Payments Platform · 2022 - Present</span>
              </li>
              <li>
                <span className="resume-role">Software Engineer II, Indeed</span>
                <span className="resume-meta">Identity Platform · 2021 - 2022</span>
              </li>
              <li>
                <span className="resume-role">Software Engineering Team Lead, Ford</span>
                <span className="resume-meta">Payments + Web Experiences · 2018 - 2021</span>
              </li>
              <li>
                <span className="resume-role">M.S., Software Engineering</span>
                <span className="resume-meta">
                  University of Michigan - Dearborn · 2019 - 2021
                </span>
              </li>
              <li>
                <span className="resume-role">B.S., Computer Science</span>
                <span className="resume-meta">
                  Central Michigan University (Minors: IT, Mathematics) · 2014 - 2018
                </span>
              </li>
            </ul>
          </div>
          <div className="panel-resume-frame">
            <ResumeCoverLink />
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-who speed-lines"
        role="separator"
        aria-label="Chapter 03: Who I Am"
      >
        <span className="chapter-label">Chapter 03</span>
        <p className="chapter-title">More than a job title.</p>
      </div>

      <section
        id="who-i-am"
        className="section scene-02-who-i-am"
        data-scene="scene-02-who-i-am"
        data-nav-section="true"
        aria-labelledby="who-i-am-title"
      >
        <div className="container">
          <div className="scroll-story-heading">
            <div>
              <p className="eyebrow">The person behind the work</p>
              <h2 className="section-title" id="who-i-am-title">Same curiosity.<br />Different adventures.</h2>
            </div>
            <p className="scroll-story-intro">From building systems to making memories.<br /><span>Keep scrolling. The panels follow you. ↓</span></p>
          </div>
          <ComicMoments />
        </div>
      </section>

      <div
        className="chapter-card chapter-story speed-lines"
        role="separator"
        aria-label="Chapter 04: Story"
      >
        <span className="chapter-label">Chapter 04</span>
        <p className="chapter-title">Every builder has an origin.</p>
      </div>

      <section
        id="story"
        className="section alt scene-03-story"
        data-scene="scene-03-story"
        data-nav-section="true"
        aria-labelledby="story-title"
      >
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg story-panel-bg" />
          </div>
        </div>
        <div className="container story-comic scene-layer layer-ui">
          <div className="scroll-story-heading origin-heading">
            <div>
              <p className="eyebrow">The origin story</p>
              <h2 className="section-title" id="story-title">It started with<br />“what if?”</h2>
            </div>
            <p className="origin-intro">At 12, I was building MySpace layouts.<br />I never really stopped building.<br /><span>Five chapters. One persistent curiosity. ↓</span></p>
          </div>
          <ComicOrigin />
          <details className="personal-footnotes origin-footnotes">
            <summary>A few chapters outside work</summary>
            <p>I got engaged at the Trevi Fountain in Rome and married in Mt. Rainier National Park. Along the way: two homes in Michigan, an M.S. at the University of Michigan–Dearborn, and several years building Nerd Nibble.</p>
          </details>
        </div>
      </section>

      <div
        className="chapter-card chapter-work speed-lines"
        role="separator"
        aria-label="Chapter 05: Work"
      >
        <span className="chapter-label">Chapter 05</span>
        <p className="chapter-title">Made to matter.</p>
      </div>


      <section
        id="work"
        className="section scene-04-work"
        data-scene="scene-04-work"
        data-nav-section="true"
        aria-labelledby="work-title"
      >
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg work-panel-bg" />
          </div>
        </div>
        <div className="container work-comic scene-layer layer-ui">
          <div className="panel panel-work-grid angled-panel" data-motion="stagger">
            <div className="work-grid-head" data-motion="reveal">
              <p className="eyebrow">Selected Work</p>
              <h2 className="section-title" id="work-title">
                <span className="tone-strong">Big problems.<br />Thoughtful solutions.</span>
                <span className="tone-lite">Payments, platforms, and products.</span>
              </h2>
              <ul className="tag-list" aria-label="Focus areas">
                {workTags.map((tag) => (
                  <li key={tag} className="tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="work-grid">
              {workItems.map((item) => (
                <WorkCard
                  key={item.slug}
                  item={item}
                  artSrc={workCardArt[item.slug]?.src}
                  artAlt={workCardArt[item.slug]?.alt}
                />
              ))}
            </div>
            <div className="work-all-projects-cta" data-motion="reveal">
              <Link className="button sfx-anchor" href="/work/all">
                <span className="tone-strong">See all projects</span>
                <span className="tone-lite">Full project history</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-contact speed-lines"
        role="separator"
        aria-label="Chapter 06: Contact"
      >
        <span className="chapter-label">Chapter 06</span>
        <p className="chapter-title">To be continued…</p>
      </div>

      <section
        id="contact"
        className="section scene-06-contact"
        data-scene="scene-06-contact"
        data-nav-section="true"
        aria-labelledby="contact-title"
      >
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg contact-panel-bg" />
          </div>
        </div>
        <div className="container contact-comic scene-layer layer-ui">
          <div className="contact-left">
            <div className="panel panel-contact-intro angled-panel" data-motion="reveal">
              <p className="eyebrow">Contact</p>
              <h2 className="section-title" id="contact-title">
                <span className="tone-strong">
                  Let’s build the<br />next chapter.
                </span>
                <span className="tone-lite">Let’s build something together.</span>
              </h2>
              <p className="body-copy">
                <span className="tone-strong">
                  Reach out for payments, SaaS, or merchant-first product builds.
                </span>
                <span className="tone-lite">
                  Reach out for payments, SaaS, or merchant-focused product work.
                </span>
              </p>
              <div className="contact-panel-links">
                <a className="text-link" href={`mailto:${profileSummary.contact.email}`}>
                  {profileSummary.contact.email}
                </a>
                <a className="text-link" href={linkedinUrl} target="_blank" rel="noreferrer">
                  {profileSummary.contact.linkedin}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <ContactForm email={profileSummary.contact.email} />
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
