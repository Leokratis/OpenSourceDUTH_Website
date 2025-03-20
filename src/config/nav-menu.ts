import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "About",
          href: "/about",
          description: "A simple page with a masonry gallery and little text.",
          image: "/images/examples/about.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "This is our blog where we post updates and news about our projects.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX docs site built using Content Collections.",
          image: "/images/examples/documentation.jpg",
        }
      ],
    },
  ],
  links: [    
    {
      title: "Blog",
      href: "/blog",
      description: "This is our blog where we post updates and news about our projects.",
      image: "/images/examples/blog.jpg",
    },
    {
      title: "Docs",
      href: "/soon", //docs/getting-started
      description:"Here you can find the documentation for all of our projects",
      image: "/images/examples/docs.jpg",
    },

    {
      title: "Join Us",
      href: "https://forms.gle/qq3BmP7FAuC49zDv7",
      description: "Join our community and contribute to our projects.",
      image: "/images/examples/join-us.jpg",
      external: true,
      target: "_blank",
    },

    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
