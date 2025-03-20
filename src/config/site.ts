import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "OpenSource DUTH",
  description:
    "We are OpenSource DUTH, the open-source team of the Democritus University of Thrace. We want to help students get involved with the FOSS community and create a better future for everyone.",
  url: "https://opensourceduth.gr",
  ogImage: "https://astro-nomy.vercel.app/og.jpg",
  links: {
    // twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/OpenSourceDUTH",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "OpenSource DUTH",
    items: [
      { title: "Code of Conduct", href: "/code-of-conduct" },
      { title: "Join Us", href: "https://forms.gle/qq3BmP7FAuC49zDv7", target: "_blank" },
      { title: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Projects",
    items: [
      { title: "Food Schedule", href: "https://food.michaelselvesakis.com", target: "_blank" },
    ],
  },
  {
    title: "Social Media",
    items: [
      { title: "Instagram", href: "https://www.instagram.com/opensourceduth/", target: "_blank" },
      { title: "Linkedin", href: "", target: "_blank" },

    ],
  }
  /*{
    title: "Docs",
    items: [
      { title: "Doc for project 1", href: "#" },
      { title: "Doc for project 2", href: "#" },
      { title: "Doc for project 3", href: "#" },
      { title: "Doc for project 4", href: "#" },
    ],
  },*/
];