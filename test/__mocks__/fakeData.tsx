import {
  CodeIcon,
  DeviceMobileIcon,
  DatabaseIcon,
  CloudIcon,
} from "@heroicons/react/outline";
import { getIcon } from "../../components/icons";
import { IServiceListItem } from "../../types/interfaces";

const serviceItem: IServiceListItem = {
  name: "Web Development",
  description:
    "We build websites that are fast, secure, and easy to use. We use modern technologies to make your website look great and work flawlessly.",
  icon: <CodeIcon className="icon-s" />,
  href: "/web-development",
};

const serviceList: IServiceListItem[] = [
  {
    name: "Web Development",
    description:
      "We build websites that are fast, secure, and easy to use. We use modern technologies to make your website look great and work flawlessly.",
    icon: <CodeIcon />,
    href: "/web-development",
  },
  {
    name: "Mobile Development",
    description:
      "We build mobile apps that are fast, secure, and easy to use. We use modern technologies to make your app look great and work flawlessly.",
    icon: <DeviceMobileIcon />,
    href: "/mobile-development",
  },
  {
    name: "API Development",
    description:
      "We build APIs that are fast, secure, and easy to use. We use modern technologies to make your API look great and work flawlessly.",
    icon: <DatabaseIcon />,
    href: "/api-development",
  },
  {
    name: "Cloud Development",
    description:
      "We build cloud solutions that are fast, secure, and easy to use. We use modern technologies to make your solution look great and work flawlessly.",
    icon: <CloudIcon />,
    href: "/cloud-development",
  },
];

const placeholderData = {
  heading: "We build websites that are fast, secure, and easy to use.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cta: "Get Started",
  cta2: "Live Demo",
  featureTitle: "Feature Title",
  featureText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText: "Learn More",
};

const teamMembers = [
  {
    name: "Jane Coslin",
    jobTitle: "CEO",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/jane.jpg",
    social: [
      {
        href: "https://twitter.com/jane_coslin",
        icon: getIcon("twitter"),
      },
      {
        href: "https://linkedin.com/jane_coslin",
        icon: getIcon("linkedin"),
      },
    ],
  },
  {
    name: "John Smith",
    jobTitle: "CTO",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/jack.jpg",
    social: [
      {
        href: "https://twitter.com/john_smith",
        icon: getIcon("twitter"),
      },
      {
        href: "https://linkedin.com/john_smith",
        icon: getIcon("linkedin"),
      },
    ],
  },
  {
    name: "Lisa Kan",
    jobTitle: "Copywriter",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/lisa.jpg",
    social: [
      {
        href: "https://twitter.com/lisa",
        icon: getIcon("twitter"),
      },
      {
        href: "https://instagram.com/lisa",
        icon: getIcon("instagram"),
      },
      {
        href: "https://linkedin.com/lisa",
        icon: getIcon("linkedin"),
      },
    ],
  },
  {
    name: "Tyler Donan",
    jobTitle: "Senior Designer",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/tyler.jpg",
    social: [
      {
        href: "https://twitter.com/tyler",
        icon: getIcon("twitter"),
      },
      {
        href: "https://instagram.com/tyler",
        icon: getIcon("instagram"),
      },
      {
        href: "https://facebook.com/tyler",
        icon: getIcon("facebook"),
      },
    ],
  },
  {
    name: "Kate Williams",
    jobTitle: "Junior Marketing specialist",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/kate.jpg",
    social: [
      {
        href: "https://twitter.com/kate",
        icon: getIcon("twitter"),
      },
      {
        href: "https://instagram.com/kate",
        icon: getIcon("instagram"),
      },
      {
        href: "https://linkedin.com/kate",
        icon: getIcon("linkedin"),
      },
    ],
  },
  {
    name: "Martha Doe",
    jobTitle: "Junior Front-end Developer",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/martha.jpg",
    social: [
      {
        href: "https://twitter.com/martha",
        icon: getIcon("twitter"),
      },
      {
        href: "https://linkedin.com/martha",
        icon: getIcon("linkedin"),
      },
    ],
  },
];

export { serviceItem, serviceList, placeholderData, teamMembers };
