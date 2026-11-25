const files = import.meta.glob('./assets/*', { eager: true, query: '?url', import: 'default' });

export function artwork(filename) {
  const url = files[`./assets/${filename}`];
  if (!url) throw new Error(`Missing portfolio artwork: ${filename}`);
  return url;
}

export const skillGroups = [
  {
    title: "Automotive HMI",
    description: "Mobility domains I design for.",
    icon: "skills-group.svg",
    items: [
      ["Multi-surface Cockpit UX", "skills-frame1000002740.svg"],
      ["IVI / Infotainment", "skills-frame1000002741.svg"],
      ["Instrument Cluster", "skills-frame1000002742.svg"],
      ["HUD", "skills-frame1000002718.svg"],
      ["ADAS UX", "skills-frame1000002718.svg"],
      ["EV & Charging UX", "skills-frame1000002743.svg"],
      ["Connected Vehicle UX", "skills-frame1000002744.svg"],
      ["Shared Mobility UX", "skills-frame1000002744.svg"],
      ["Safety / Recovery States", "skills-frame1000002745.svg"],
      ["Driver Distraction & Glanceability", "skills-frame1000002746.svg"],
    ],
  },
  {
    title: "Design Systems",
    description: "Scalable design systems and foundations.",
    icon: "skills-frame1000002747.svg",
    items: [
      ["Figma Libraries & Variables", "skills-frame1000002748.svg"],
      ["States & Variants", "skills-frame1000002749.svg"],
      ["Token Architecture & Theming", "skills-frame1000002750.svg"],
      ["Component Architecture", "skills-frame1000002751.svg"],
      ["Accessibility", "skills-frame1000002752.svg"],
      ["Governance & Versioning", "skills-frame1000002753.svg"],
      ["Storybook Documentation", "skills-frame1000002754.svg"],
      ["Design QA", "skills-frame1000002753.svg"],
      ["AI-Assisted Design-to-Code (MCP)", "skills-frame1000002755.svg"],
      ["Design-to-Development Handoff", "skills-frame1000002755.svg"],
    ],
  },
  {
    title: "Product UX",
    description: "End-to-end UX skills for products.",
    icon: "skills-brain-research.svg",
    items: [
      ["UX Research", "skills-frame1000002756.svg"],
      ["Human-Centred Design (HCD/UCD)", "skills-frame1000002752.svg"],
      ["UX Audit", "skills-frame1000002753.svg"],
      ["Usability Testing", "skills-frame1000002757.svg"],
      ["Human Factors & Systems Thinking", "skills-frame1000002746.svg"],
      ["Interaction Design", "skills-frame1000002758.svg"],
      ["Visual Design", "skills-frame1000002759.svg"],
      ["Design Thinking & Lean UX ect...", "skills-frame1000002760.svg"],
    ],
  },
  {
    title: "Tools",
    description: "Tools for designing and delivering products.",
    icon: "skills-tools.svg",
    items: [
      ["Figma + FigJam", "skills-frame1000002761.svg"],
      ["ProtoPie", "skills-frame1000002718.svg"],
      ["Qt Design Studio", "skills-frame1000002718.svg"],
      ["Adobe XD", "skills-frame1000002762.svg"],
      ["Miro", "skills-frame1000002718.svg"],
      ["GitHub", "skills-frame1000002763.svg"],
      ["Jira", "skills-frame1000002718.svg"],
      ["Storybook + Figma MCP", "skills-frame1000002754.svg"],
    ],
  },
];

export const careerRoles = [
  {
    date: "Jan 2026 – Present",
    title: "Senior UI/UX Designer - Freelance",
    company: "Dx4 studio",
    logo: "about-logos-d4-studio-logo-with-expansion-tagline2.png",
    details: [
      "Partner with UK-based clients to understand requirements, scope and quote each project, then deliver end-to-end UI/UX design on a project basis.",
    ],
  },
  {
    date: "NOV 2025 – Present",
    title: "Founder – CarOne",
    company: "CarOne",
    logo: "about-carone-logo1.png",
    details: [
      "Early-stage connected automotive service ecosystem linking customers, mechanics, parts sellers, and admins through OBD + GPS + SIM based workflows.",
    ],
  },
  {
    date: "Mar 2024 – Nov 2025",
    title: "Senior UX Designer",
    company: "Boston Harbor Consulting",
    logo: "about-logos.svg",
    details: [
      "Led UX for Quickly.app and built the Quickly Design System from the ground up.",
      "Created design tokens and Figma libraries; designed key modules like Monitor & Configure, Manage/Admin, DevOps, Authentication, Variable Management, and Theming.",
    ],
  },
  {
    date: "May 2022 – Aug 2024",
    title: "UX Designer",
    company: "LTIMindtree",
    logo: "about-logos1.png",
    details: [
      "Worked on a Unilever client engagement with the London team.",
      "Contributed to UX design, research, wireframes, prototypes, and usability testing for enterprise product experiences.",
    ],
  },
  {
    date: "Oct 2020 – Nov 2021",
    title: "Product Photographer",
    company: "Pixcy",
    logo: "about-svg.svg",
    details: [
      "Product photography for e-commerce listings, along with commercial and event photography support.",
    ],
  },
  {
    date: "Sep 2016 – Oct 2020",
    title: "ComiXology Associate / Visual Designer",
    company: "Amazon",
    logo: "about-image1.png",
    details: [
      "Worked on digital comic and graphic-novel reading experiences for Kindle, mobile, and tablet platforms.",
      "Supported end-to-end publishing workflows and helped automate repetitive task using Java and Selenium.",
    ],
  },
  {
    date: "Dec 2013 – Feb 2016",
    title: "Freelance Photographer / Graphic Designer",
    company: "Freelance",
    logo: "about-image2.png",
    details: [
      "Delivered photography, graphic design, event coverage, commercial content, and early web/UI work.",
    ],
  },
  {
    date: "Jun 2011 – Mar 2013",
    title: "Photographer & Graphic Designer",
    company: "The Guindy Times",
    logo: "about-image3.png",
    details: [
      "Early-career work in photography, editorial/event coverage, and graphic design.",
    ],
  },
];
