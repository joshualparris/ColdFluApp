export interface AboutPage {
  href: string;
  title: string;
  description: string;
}

export const aboutPages: AboutPage[] = [
  {
    href: "/about/accessibility",
    title: "Accessibility",
    description: "How this project aims to be readable, navigable, and usable.",
  },
  {
    href: "/about/privacy",
    title: "Privacy",
    description: "What the site collects and how it avoids health-data collection.",
  },
  {
    href: "/about/corrections",
    title: "Corrections",
    description: "How updates and corrections are handled for published content.",
  },
];
