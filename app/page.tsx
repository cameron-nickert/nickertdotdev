import WorkCard from "@/components/WorkCard";
import MotionOrchestrator from "@/components/MotionOrchestrator";
import SignalFlareButton from "@/components/SignalFlareButton";
import { profileSummary, timelineMilestones } from "@/content/profile";
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

  const resumeEmbedUrl = "https://drive.google.com/file/d/1SnfmDmprQQHFUoLMgspcm8p5xYOZEq5I/preview";
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
    <main className="main" id="main-content" tabIndex={-1}>
      <MotionOrchestrator />
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
            <div className="panel panel-hero angled-panel" data-motion="reveal">
              <p className="eyebrow">Chapter 01 · Introduction</p>
              <h1 className="headline" id="home-title" data-motion="reveal">
                Cameron Nickert
              </h1>
              <p className="tagline" data-motion="reveal">
                <span className="tone-strong">
                  I make money move without drama - fast, safe, and merchant-first.
                </span>
                <span className="tone-lite">
                  I build reliable payments software for small businesses.
                </span>
              </p>
              <p className="lead" data-motion="reveal">
                <span className="tone-strong">
                  Senior software engineer shipping money-critical systems that stay boringly stable
                  while scale goes wild.
                </span>
                <span className="tone-lite">
                  Senior software engineer focused on reliability, performance, and trust in payments
                  systems.
                </span>
              </p>
              <ul className="stat-list" aria-label="Quick identity details" data-motion="reveal">
                <li>
                  <span className="stat-label">Role</span>
                  <span className="stat-value">Senior Software Engineer</span>
                </li>
                <li>
                  <span className="stat-label">Focus</span>
                  <span className="stat-value">Payments + reliability</span>
                </li>
                <li>
                  <span className="stat-label">Based</span>
                  <span className="stat-value">Detroit Metro</span>
                </li>
              </ul>
              <div className="hero-actions" data-motion="reveal">
                <a className="button sfx-anchor" href="#work" data-sfx-trigger>
                  <span className="tone-strong">See the receipts</span>
                  <span className="tone-lite">Explore work</span>
                  <span
                    className="sfx-pop"
                    aria-hidden="true"
                    data-sfx="SWISH"
                    data-sfx-asset="burst"
                    data-sfx-frames="12"
                    data-sfx-fps="12"
                    data-sfx-cols="4"
                    data-sfx-rows="3"
                  >
                    <span className="sfx-burst" aria-hidden="true" />
                    SWISH
                  </span>
                </a>
                <a className="text-link" href="#contact">
                  <span className="tone-strong">Start a conversation</span>
                  <span className="tone-lite">Get in touch</span>
                </a>
              </div>
            </div>
            <div className="hero-portrait" data-motion="reveal" aria-hidden="true">
              <div className="hero-media impact-frame speed-lines" data-impact="true">
                <img
                  className="hero-media-image"
                  src="/assets/scene-01-hero/portrait-cameron.png"
                  alt="Portrait of Cameron Michael Nickert"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-who speed-lines"
        role="separator"
        aria-label="Chapter 02: Who I Am"
      >
        <span className="chapter-label">Chapter 02</span>
        <p className="chapter-title">Who I Am</p>
      </div>

      <section
        id="who-i-am"
        className="section scene-02-who-i-am"
        data-scene="scene-02-who-i-am"
        data-nav-section="true"
        aria-labelledby="who-i-am-title"
      >
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg who-panel-bg" />
          </div>
          <div className="scene-layer layer-fg" />
        </div>
        <div className="container scene-layer layer-ui">
          <div className="who-comic">
            <div
              className="panel panel-activities angled-panel"
              aria-label="Who I am"
              data-motion="stagger"
            >
              <div className="comic-toggle">
                <input type="checkbox" id="who-toggle" className="toggle-input" />
                <div className="who-toggle-head">
                  <p className="eyebrow">Who I Am</p>
                  <div className="who-toggle-controls">
                    <span className="mode-pill mode-pill-off">Off-duty</span>
                    <span className="mode-pill mode-pill-on">On-duty</span>
                    <label
                      className="text-link toggle-link sfx-anchor"
                      htmlFor="who-toggle"
                      data-sfx-trigger
                    >
                      <span className="label-off">Flip to on-duty mode</span>
                      <span className="label-on">Flip to off-duty mode</span>
                      <span
                        className="sfx-pop"
                        aria-hidden="true"
                        data-sfx="BURST"
                        data-sfx-asset="burst"
                        data-sfx-frames="12"
                        data-sfx-fps="12"
                        data-sfx-cols="4"
                        data-sfx-rows="3"
                      >
                        <span className="sfx-burst" aria-hidden="true" />
                        BURST
                      </span>
                    </label>
                  </div>
                </div>
                <div className="activity-toggle-stack">
                  <div className="activity-grid activity-grid-off-duty">
                    <article className="toggle-panel activity-mode-panel">
                      <h3>Off-duty operating mode</h3>
                      <p>
                        I am motivated by work that is close to real users and grounded in real-world
                        problems. Outside of work, I am a Detroit sports fan who enjoys travel,
                        hiking, camping, boating, and fatherhood.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <div className="activity-media impact-frame speed-lines">
                        <img
                          className="activity-media-image"
                          src="/assets/scene-02-who-i-am/activity-father.png"
                          alt="Fatherhood illustration"
                        />
                      </div>
                      <h3 className="activity-title">Father</h3>
                      <p className="activity-copy">
                        Building small moments, stories, and routines that matter.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <div className="activity-media impact-frame speed-lines">
                        <img
                          className="activity-media-image"
                          src="/assets/scene-02-who-i-am/activity-hiking.png"
                          alt="Hiking illustration"
                        />
                      </div>
                      <h3 className="activity-title">Hiking</h3>
                      <p className="activity-copy">
                        Trail time resets my brain and finds fresh perspective away from screens.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <div className="activity-media impact-frame speed-lines">
                        <img
                          className="activity-media-image"
                          src="/assets/scene-02-who-i-am/activity-camping.png"
                          alt="Camping illustration"
                        />
                      </div>
                      <h3 className="activity-title">Camping</h3>
                      <p className="activity-copy">
                        I like building camp routines and keeping gear dialed in for simple weekends.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <div className="activity-media impact-frame speed-lines">
                        <img
                          className="activity-media-image"
                          src="/assets/scene-02-who-i-am/activity-boating.png"
                          alt="Boating illustration"
                        />
                      </div>
                      <h3 className="activity-title">Boating</h3>
                      <p className="activity-copy">
                        Time on the water brings a different pace and a favorite view of Michigan.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <div className="activity-media impact-frame speed-lines">
                        <img
                          className="activity-media-image"
                          src="/assets/scene-02-who-i-am/activity-sports.png"
                          alt="Sports illustration"
                        />
                      </div>
                      <h3 className="activity-title">Sports</h3>
                      <p className="activity-copy">
                        Detroit teams are a year-round conversation, win or lose.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <div className="activity-media impact-frame speed-lines">
                        <img
                          className="activity-media-image"
                          src="/assets/scene-02-who-i-am/activity-boardgames.png"
                          alt="Board games illustration"
                        />
                      </div>
                      <h3 className="activity-title">Board games</h3>
                      <p className="activity-copy">
                        Friendly competition, co-op strategy, and a good tabletop night.
                      </p>
                    </article>
                  </div>
                  <div className="activity-grid activity-grid-on-duty">
                    <article className="toggle-panel activity-mode-panel">
                      <h3>On-duty operating mode</h3>
                      <p>
                        I build for merchants and small businesses, sweating latency, accuracy, and
                        trust. My experience spans global payments platforms and startups where
                        ownership and speed matter.
                      </p>
                      <ul className="panel-list">
                        <li>Own the problem end-to-end with product + design.</li>
                        <li>Design systems with reliability and observability first.</li>
                        <li>Communicate early, document clearly, unblock teams fast.</li>
                      </ul>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <h3 className="activity-title">Systems Design & Reliability</h3>
                      <p className="activity-copy">
                        Architecting resilient distributed systems, enforcing idempotency, and
                        driving incident response for complex payment platforms.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <h3 className="activity-title">Performance Engineering</h3>
                      <p className="activity-copy">
                        Establishing latency budgets, leading high-impact optimization sprints, and
                        scaling throughput across critical payment flows.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <h3 className="activity-title">Observability Leadership</h3>
                      <p className="activity-copy">
                        Defining actionable SLOs and SLIs, building robust monitoring and alerting,
                        and evolving incident processes to minimize downtime.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <h3 className="activity-title">Cross-Functional Collaboration</h3>
                      <p className="activity-copy">
                        Partnering with product, infrastructure, security, and data to design robust
                        APIs, mitigate risk, and ship impactful features safely.
                      </p>
                    </article>
                    <article className="activity-card comic-panel angled-panel">
                      <h3 className="activity-title">Technical Delivery & Mentorship</h3>
                      <p className="activity-copy">
                        Leading technical scoping and execution, driving roadmap clarity, and
                        mentoring engineers to raise execution standards and foster growth.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-story speed-lines"
        role="separator"
        aria-label="Chapter 03: Story"
      >
        <span className="chapter-label">Chapter 03</span>
        <p className="chapter-title">Story</p>
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
          <div className="panel panel-story angled-panel" data-motion="reveal">
            <p className="eyebrow">Story</p>
            <h2 className="section-title" id="story-title">
              <span className="tone-strong">From MySpace chaos to money-moving platforms.</span>
              <span className="tone-lite">From early web experiments to payments platforms.</span>
            </h2>
            <p className="body-copy">
              When I was 12, I built MySpace layouts and launched fusionlayouts.com. At 16, I
              joined FIRST Robotics (2013) and programmed the robot, then returned in 2015 and
              2016 as a weekend mentor at my hometown school to teach wiring and programming.
            </p>
            <p className="body-copy">
              I studied Computer Science at Central Michigan University (minors in IT and Math),
              started at Ford, bought my first home in Michigan, and got engaged at the Trevi
              Fountain in Rome. I grew into an anchor software engineering lead role, got married
              in Mt. Rainier National Park, completed my M.S. in Software Engineering at
              University of Michigan - Dearborn, built Nerd Nibble for several years, bought my
              current home in Michigan, spent a short stint at Indeed, and eventually joined
              Shopify as a Senior Software Engineer. Today, I still build side projects and focus
              on helping small businesses thrive.
            </p>
            <div
              className="story-art impact-frame speed-lines"
              aria-hidden="true"
              data-motion="float"
              data-impact="true"
            />
          </div>
          <div className="panel-timeline" data-motion="reveal">
            <ol className="timeline" aria-label="Career milestones" data-motion="stagger">
              {timelineMilestones.map((milestone) => (
                <li key={milestone.id} className="timeline-item comic-panel" data-motion="reveal">
                  <span className="timeline-marker" aria-hidden="true" data-impact="true" />
                  <div className="timeline-content">
                    <p className="timeline-year">{milestone.year}</p>
                    <h3 className="timeline-title">{milestone.title}</h3>
                    <p className="timeline-detail">{milestone.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-work speed-lines"
        role="separator"
        aria-label="Chapter 04: Work"
      >
        <span className="chapter-label">Chapter 04</span>
        <p className="chapter-title">Work</p>
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
                <span className="tone-strong">Case studies with receipts</span>
                <span className="tone-lite">Case studies from payments and SaaS.</span>
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
              <a className="button sfx-anchor" href="/work/all">
                <span className="tone-strong">See all projects</span>
                <span className="tone-lite">Full project history</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div
        className="chapter-card chapter-resume speed-lines"
        role="separator"
        aria-label="Chapter 05: Resume"
      >
        <span className="chapter-label">Chapter 05</span>
        <p className="chapter-title">Resume</p>
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
              <span className="tone-strong">Experience across enterprise, startups, and scrappy builds.</span>
              <span className="tone-lite">Experience across enterprise and startups.</span>
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
          <div className="panel-resume-frame" data-motion="reveal">
            <div className="resume-cover speed-lines" data-impact="true">
              <img
                className="resume-cover-image"
                src="/images/scene-05-resume/resume-cover.png"
                alt="Resume cover for Cameron Nickert"
              />
              <a
                className="resume-read-button sfx-anchor"
                href="#resume-preview"
                data-motion="reveal"
                data-sfx-trigger
              >
                <img
                  className="resume-read-icon"
                  src="/images/scene-05-resume/resume-read.png"
                  alt="Read"
                />
                <span
                  className="sfx-pop"
                  aria-hidden="true"
                  data-sfx="WOW"
                  data-sfx-asset="burst"
                  data-sfx-frames="12"
                  data-sfx-fps="12"
                  data-sfx-cols="4"
                  data-sfx-rows="3"
                >
                  <span className="sfx-burst" aria-hidden="true" />
                  WOW
                </span>
              </a>
              <p className="resume-cover-caption">
                Click <span className="resume-cover-caption-read">"read"</span> to see resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="resume-preview" className="resume-modal" role="dialog" aria-modal="true">
        <a className="resume-modal-backdrop" href="#resume" aria-label="Close preview" />
        <div className="resume-modal-card" role="document">
          <div className="resume-modal-header">
            <p className="panel-eyebrow">Resume preview</p>
            <a className="text-link resume-modal-close" href="#resume">
              Close
            </a>
          </div>
          <div className="resume-modal-frame">
            <iframe
              className="resume-modal-iframe"
              src={resumeEmbedUrl}
              title="Resume preview"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div
        className="chapter-card chapter-contact speed-lines"
        role="separator"
        aria-label="Chapter 06: Contact"
      >
        <span className="chapter-label">Chapter 06</span>
        <p className="chapter-title">Contact</p>
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
                  Need software that doesn&apos;t flinch? Let&apos;s talk.
                </span>
                <span className="tone-lite">Need software? Let&apos;s talk.</span>
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
            <form
              className="panel panel-contact-form contact-form angled-panel"
              action={`mailto:${profileSummary.contact.email}`}
              method="post"
              encType="text/plain"
              data-motion="reveal"
            >
              <p className="panel-eyebrow">Contact form</p>
              <label className="form-field">
                Name
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                required
              />
              </label>
              <label className="form-field">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </label>
              <label className="form-field project-brief-field">
                Project brief
                <div className="project-brief-input">
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="What are we building?"
                    required
                  />
                  <div className="signal-flare-inline">
                    <SignalFlareButton />
                  </div>
                </div>
              </label>
              <button className="button sfx-anchor" type="submit" data-sfx-trigger>
                Send inquiry
                <span
                  className="sfx-pop"
                  aria-hidden="true"
                  data-sfx="PING"
                  data-sfx-asset="burst"
                  data-sfx-frames="12"
                  data-sfx-fps="12"
                  data-sfx-cols="4"
                  data-sfx-rows="3"
                >
                  <span className="sfx-burst" aria-hidden="true" />
                  PING
                </span>
              </button>
              <p className="fine-print">Opens your email client with the details pre-filled.</p>
            </form>
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
