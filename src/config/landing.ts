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
    link: "https://food.opensourceduth.gr",
    icon: "/images/projects/food.png",
  }
];

export const testimonials = [
  {
    name: "Leokratis",
    job: "Lorem Ipsum",
    image: "/src/icons/teamPlaceholder.jpg",
    review:
      "Pellentesque blandit pharetra mi eu cursus. Cras sagittis, libero vel rhoncus tempor, turpis nisi posuere purus, a aliquam sem velit eget turpis. Quisque a magna nec nisi porta porttitor sit amet suscipit ante. Sed in sodales ipsum. Suspendisse varius ornare convallis. Vivamus mattis auctor blandit. Maecenas eu nunc tincidunt, hendrerit eros a, cursus dui. Quisque congue mollis venenatis. Nulla auctor nisi diam, sed placerat quam sollicitudin id. Vivamus eleifend risus ut arcu imperdiet egestas. Etiam vulputate, felis ut fringilla malesuada, risus ligula mollis ipsum, imperdiet molestie ipsum sapien eget velit. ",
  },
  {
    name: "Vicky",
    job: "Lorem Ipsum",
    image: "/src/icons/teamPlaceholder.jpg",
    review:
      "Pellentesque blandit pharetra mi eu cursus. Cras sagittis, libero vel rhoncus tempor, turpis nisi posuere purus, a aliquam sem velit eget turpis. Quisque a magna nec nisi porta porttitor sit amet suscipit ante. Sed in sodales ipsum. Suspendisse varius ornare convallis. Vivamus mattis auctor blandit. Maecenas eu nunc tincidunt, hendrerit eros a, cursus dui. Quisque congue mollis venenatis. Nulla auctor nisi diam, sed placerat quam sollicitudin id. Vivamus eleifend risus ut arcu imperdiet egestas. Etiam vulputate, felis ut fringilla malesuada, risus ligula mollis ipsum, imperdiet molestie ipsum sapien eget velit. ",
  },
  {
    name: "R3verse Chaos",
    job: "Lorem Ipsum",
    image: "/src/icons/teamPlaceholder.jpg",
    review:
      "Pellentesque blandit pharetra mi eu cursus. Cras sagittis, libero vel rhoncus tempor, turpis nisi posuere purus, a aliquam sem velit eget turpis. Quisque a magna nec nisi porta porttitor sit amet suscipit ante. Sed in sodales ipsum. Suspendisse varius ornare convallis. Vivamus mattis auctor blandit. Maecenas eu nunc tincidunt, hendrerit eros a, cursus dui. Quisque congue mollis venenatis. Nulla auctor nisi diam, sed placerat quam sollicitudin id. Vivamus eleifend risus ut arcu imperdiet egestas. Etiam vulputate, felis ut fringilla malesuada, risus ligula mollis ipsum, imperdiet molestie ipsum sapien eget velit. ",
  },
  {
    name: "Jimman",
    job: "Lorem Ipsum",
    image: "/src/icons/teamPlaceholder.jpg",
    review:
      "Pellentesque blandit pharetra mi eu cursus. Cras sagittis, libero vel rhoncus tempor, turpis nisi posuere purus, a aliquam sem velit eget turpis. Quisque a magna nec nisi porta porttitor sit amet suscipit ante. Sed in sodales ipsum. Suspendisse varius ornare convallis. Vivamus mattis auctor blandit. Maecenas eu nunc tincidunt, hendrerit eros a, cursus dui. Quisque congue mollis venenatis. Nulla auctor nisi diam, sed placerat quam sollicitudin id. Vivamus eleifend risus ut arcu imperdiet egestas. Etiam vulputate, felis ut fringilla malesuada, risus ligula mollis ipsum, imperdiet molestie ipsum sapien eget velit. ",
  },
  {
    name: "BeyerDynamikos",
    job: "Lorem Ipsum",
    image: "/src/icons/teamPlaceholder.jpg",
    review:
      "Pellentesque blandit pharetra mi eu cursus. Cras sagittis, libero vel rhoncus tempor, turpis nisi posuere purus, a aliquam sem velit eget turpis. Quisque a magna nec nisi porta porttitor sit amet suscipit ante. Sed in sodales ipsum. Suspendisse varius ornare convallis. Vivamus mattis auctor blandit. Maecenas eu nunc tincidunt, hendrerit eros a, cursus dui. Quisque congue mollis venenatis. Nulla auctor nisi diam, sed placerat quam sollicitudin id. Vivamus eleifend risus ut arcu imperdiet egestas. Etiam vulputate, felis ut fringilla malesuada, risus ligula mollis ipsum, imperdiet molestie ipsum sapien eget velit.",
  }
];
