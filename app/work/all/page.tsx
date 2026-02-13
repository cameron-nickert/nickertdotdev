import type { Metadata } from "next";
import Link from "next/link";
import MotionOrchestrator from "@/components/MotionOrchestrator";
import YearJumpSelect from "../../../components/YearJumpSelect";
import { projectHistory } from "@/content/project-history";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Complete project history including platform, startup, and product work."
};

const getProjectYear = (timeframe: string) => {
  const matches = timeframe.match(/\d{4}/g);
  if (!matches || matches.length === 0) {
    return "Archive";
  }

  const years = matches.map((value) => Number(value)).filter((value) => !Number.isNaN(value));
  if (!years.length) {
    return "Archive";
  }

  return String(Math.max(...years));
};

const getTimeframeSortMeta = (timeframe: string) => {
  const matches = timeframe.match(/\d{4}/g);
  if (!matches || matches.length === 0) {
    return {
      endYear: Number.NEGATIVE_INFINITY,
      startYear: Number.NEGATIVE_INFINITY
    };
  }

  const years = matches.map((value) => Number(value)).filter((value) => !Number.isNaN(value));
  if (!years.length) {
    return {
      endYear: Number.NEGATIVE_INFINITY,
      startYear: Number.NEGATIVE_INFINITY
    };
  }

  const hasPresent = /present/i.test(timeframe);
  return {
    endYear: hasPresent ? Number.POSITIVE_INFINITY : Math.max(...years),
    startYear: Math.min(...years)
  };
};

export default function AllProjectsPage() {
  const groupedProjects = projectHistory
    .reduce<
    Array<{
      year: string;
      projects: Array<(typeof projectHistory)[number]>;
    }>
    >((groups, project) => {
      const year = getProjectYear(project.timeframe);
      const existingGroup = groups.find((group) => group.year === year);

      if (existingGroup) {
        existingGroup.projects.push(project);
      } else {
        groups.push({ year, projects: [project] });
      }

      return groups;
    }, [])
    .map((group) => ({
      ...group,
      projects: [...group.projects].sort((a, b) => {
        const aMeta = getTimeframeSortMeta(a.timeframe);
        const bMeta = getTimeframeSortMeta(b.timeframe);

        if (aMeta.endYear !== bMeta.endYear) {
          return bMeta.endYear - aMeta.endYear;
        }

        if (aMeta.startYear !== bMeta.startYear) {
          return bMeta.startYear - aMeta.startYear;
        }

        return a.title.localeCompare(b.title);
      })
    }))
    .sort((a, b) => {
      if (a.year === "Archive") return 1;
      if (b.year === "Archive") return -1;
      return Number(b.year) - Number(a.year);
    });
  const yearSections = groupedProjects.map((group) => ({
    year: group.year,
    id: `work-year-${group.year.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
  }));

  return (
    <main className="main work-all-page">
      <MotionOrchestrator />
      <section className="section work-all-hero scene-04-work">
        <div className="scene-layers" aria-hidden="true">
          <div className="scene-layer layer-bg">
            <div className="scene-panel-bg work-page-panel-bg" />
          </div>
        </div>
        <div className="container scene-layer layer-ui">
          <div className="panel angled-panel">
            <p className="eyebrow">Project Archive</p>
            <h1 className="headline">
              <span className="tone-strong">All projects, beyond the featured case studies.</span>
              <span className="tone-lite">Project history and notable builds.</span>
            </h1>
            <p className="lead">
              <span className="tone-strong">
                A full archive sourced from the career context timeline, including platform work,
                startup builds, and notable product experiments.
              </span>
              <span className="tone-lite">
                A career-wide archive sourced from project notes and timeline context.
              </span>
            </p>
            <div className="hero-actions">
              <Link className="text-link sfx-anchor" href="/#work" data-sfx-trigger>
                Back to work section
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-all-list">
        <YearJumpSelect sections={yearSections} />
        {groupedProjects.map((group, groupIndex) => (
          <div key={group.year} id={yearSections[groupIndex]?.id} className="work-all-year-block">
            <div className="chapter-card speed-lines work-all-year-divider" role="separator">
              <span className="chapter-label">Project Year</span>
              <p className="chapter-title">{group.year}</p>
            </div>
            <div className="container">
              <div className="work-all-year-tiles">
                {group.projects.map((project, index) => (
                  <article
                    key={project.slug}
                    className="panel angled-panel project-history-tile"
                    data-side={index % 2 === 0 ? "left" : "right"}
                  >
                    <p className="eyebrow">
                      {project.organization
                        ? `${project.organization} · ${project.timeframe}`
                        : project.timeframe}
                    </p>
                    <h2 className="section-title">{project.title}</h2>
                    <p className="body-copy">{project.summary}</p>

                    <ul className="resume-list" aria-label={`${project.title} details`}>
                      {project.details.map((detail) => (
                        <li key={`${project.slug}-${detail}`} className="body-copy">
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => (
                        <li key={`${project.slug}-${technology}`} className="tag">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="chapter-card speed-lines" role="separator" aria-label="The End">
        <span className="chapter-label">The End</span>
        <p className="chapter-title">To be Continued...</p>
      </div>
    </main>
  );
}
