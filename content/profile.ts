export type ProfileSummary = {
  name: string;
  title: string;
  location: string;
  tagline: string;
  mission: string;
  contact: {
    email: string;
    linkedin: string;
  };
};

export type TimelineMilestone = {
  id: string;
  year: string;
  title: string;
  detail: string;
};

const profileSummaryData: ProfileSummary = {
  name: "Cameron Michael Nickert",
  title: "Senior Software Engineer",
  location: "Detroit Metropolitan Area",
  tagline: "Making money move without drama for small businesses.",
  mission:
    "I design and ship money-critical systems that stay boringly reliable, fast, and trusted by merchants and their customers.",
  contact: {
    email: "cameron@nickert.dev",
    linkedin: "linkedin.com/in/cameron-nickert"
  }
};

const timelineMilestonesData: TimelineMilestone[] = [
  {
    id: "myspace-robotics",
    year: "2008 - 2016",
    title: "MySpace + FIRST Robotics",
    detail:
      "Started with MySpace layouts and fusionlayouts.com, then programmed robots in FIRST and later mentored students on weekends."
  },
  {
    id: "cmu-ford",
    year: "2014 - 2021",
    title: "CMU, Ford, and Leadership Growth",
    detail:
      "Completed CS at CMU (minors in IT and Math), joined Ford, and grew into an anchor software engineering lead role."
  },
  {
    id: "masters-nerdnibble",
    year: "2019 - 2021",
    title: "M.S. + Nerd Nibble",
    detail:
      "Finished an M.S. in Software Engineering at University of Michigan - Dearborn while building Nerd Nibble."
  },
  {
    id: "indeed",
    year: "2021 - 2022",
    title: "Indeed — Software Engineer II",
    detail: "Worked on identity and authentication services across the Indeed platform."
  },
  {
    id: "shopify",
    year: "2022 - Present",
    title: "Shopify — Senior Software Engineer",
    detail:
      "Built and scaled money-critical payments systems while continuing side projects that support small businesses."
  }
];

function assertNonEmpty(value: string, label: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Profile content validation failed: ${label} is required.`);
  }
}

function assertNonEmptyArray<T>(value: T[], label: string) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Profile content validation failed: ${label} must have at least one entry.`);
  }
}

function validateProfileSummary(summary: ProfileSummary) {
  assertNonEmpty(summary.name, "name");
  assertNonEmpty(summary.title, "title");
  assertNonEmpty(summary.location, "location");
  assertNonEmpty(summary.tagline, "tagline");
  assertNonEmpty(summary.mission, "mission");
  assertNonEmpty(summary.contact.email, "contact.email");
  assertNonEmpty(summary.contact.linkedin, "contact.linkedin");
}

function validateTimelineMilestones(items: TimelineMilestone[]) {
  assertNonEmptyArray(items, "timeline milestones");
  items.forEach((item, index) => {
    assertNonEmpty(item.id, `milestones[${index}].id`);
    assertNonEmpty(item.year, `milestones[${index}].year`);
    assertNonEmpty(item.title, `milestones[${index}].title`);
    assertNonEmpty(item.detail, `milestones[${index}].detail`);
  });
}

validateProfileSummary(profileSummaryData);
validateTimelineMilestones(timelineMilestonesData);

export const profileSummary = profileSummaryData;
export const timelineMilestones = timelineMilestonesData;
