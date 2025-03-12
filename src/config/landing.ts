import type { InfoLdg } from "@/types";

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: string; // Location of the icon from /public/images/projects
}
export const infos: InfoLdg[] = [
  {
    title: "About Us",
    description:
      "We are a team of university students who are passionate about open-source and the FOSS community. Our goal is to create a place where students can learn from and contribute to the open-source community.",
    image: "/images/blog/OpenSourceDUTH.png",
    list: [
      {
        title: "Collaborative",
        description: "In out team we value collaboration and teamwork because together we can achieve great things.",
        icon: "lucide:laptop",
      },
      {
        title: "Innovative",
        description: "We are always looking to be involved in the latest technologies and innovations and contribute to them.",
        icon: "lucide:settings",
      }
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/images/blog/placeholder-about.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "lucide:laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "lucide:search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "lucide:settings",
      },
    ],
  },
];

export const Projects: Project[] = [
  {
    title: "University Food Schedule",
    description:
      "University Food Schedule website. A simple website that shows the food daily schedule of the university.",
    link: "https://food.michaelselvesakis.com",
    icon: "/images/projects/food.png",
  }
];

export const testimonials = [
  {
    name: "Leokratis",
    job: "Full Stack Developer",
    image: "/src/icons/teamPlaceholder.jpg",
    review: "The next-saas-stripe-starter repo has truly revolutionized my development workflow...",
  },
  {
    name: "Michalis",
    job: "UI/UX Designer",
    image: "/src/icons/teamPlaceholder.jpg",
    review: "Thanks to next-saas-stripe-starter, I've been able to create modern and attractive user interfaces...",
  },
  {
    name: "Vasiliki",
    job: "Project Manager",
    image: "/src/icons/teamPlaceholder.jpg",
    review: "I'm impressed by the quality of code and clear documentation of next-saas-stripe-starter...",
  },
  {
    name: "Vasilis",
    job: "Marketing Manager",
    image: "/src/icons/teamPlaceholder.jpg",
    review: "next-saas-stripe-starter has been an invaluable asset in my role as a marketing manager...",
  },
  {
    name: "Dimitris",
    job: "Data Analyst",
    image: "/src/icons/teamPlaceholder.jpg",
    review: "next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data...",
  },
  {
    name: "Sotiris",
    job: "DevOps Engineer",
    image: "/src/icons/teamPlaceholder.jpg",
    review: "Thanks to next-saas-stripe-starter, I was able to streamline the entire process and get payments up and running in no time...",
  }
];
