import {
  CloudIcon,
  CodeIcon,
  DatabaseIcon,
  DeviceMobileIcon,
} from "@heroicons/react/outline";
import { IList, IServiceListItem } from "lib/types";
import squarePlaceholder from "public/1280x1280.png";
import widePlaceholder from "public/1920x1280.png";
import logo from "public/assets/nextsites_logo.svg";
import clinicPlaceholder from "public/clinic.png";

/* Images */
export const wideImage = widePlaceholder;
export const squareImage = squarePlaceholder;
export const clinicImage = clinicPlaceholder;
export const logoImage = logo;

export const logotype = {
  src: logoImage,
  dimensions: {
    width: 180,
    height: 42,
  },
};

export const siteMenu = ["Services", "Pricing", "Contact Us"];

/* Social Icons */
export const companySocial = [
  {
    href: "https://twitter.com/nextsites",
    icon: "twitter",
  },
  {
    href: "https://linkedin.com/nextsites",
    icon: "linkedin",
  },
  {
    href: "https://facebook.com/nextsites",
    icon: "facebook",
  },
  {
    href: "#",
    icon: "instagram",
  },
];

/* Contact */
export const contactData = {
  email: ["hello@example.com"],
  phone: ["123-456-7890", "098-765-4321"],
  address: ["123 Main St, Anytown, CA 12345"],
  hours: ["Mon-Fri: 9am-5pm", "Sat: 10am-2pm"],
};

export const contactDataList: IList = {
  list: [
    {
      title: "Email",
      value: contactData.email,
      icon: "mail",
    },
    {
      title: "Phone",
      value: contactData.phone,
      icon: "phone",
    },
    {
      title: "Address",
      value: contactData.address,
      icon: "location-marker",
    },
    {
      title: "Hours",
      value: contactData.hours,
      icon: "clock",
    },
  ],
};

/* Services */
export const serviceItem: IServiceListItem = {
  name: "Web Development",
  description:
    "We build websites that are fast, secure, and easy to use. We use modern technologies to make your website look great and work flawlessly.",
  icon: <CodeIcon className="icon-s" />,
  href: "/web-development",
};

export const serviceList: IServiceListItem[] = [
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

/* Placeholder data */
export const placeholderData = {
  heading: "We build websites that are fast, secure, and easy to use.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cta: "Get Started",
  cta2: "Live Demo",
  featureTitle: "Feature Title",
  featureText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  buttonText: "Learn More",
};

/* team members */
export const teamMembers = [
  {
    name: "Jane Coslin",
    jobTitle: "CEO",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/assets/pictures/team/jane.jpg",
    social: [
      {
        href: "https://twitter.com/jane_coslin",
        icon: "twitter",
      },
      {
        href: "https://linkedin.com/jane_coslin",
        icon: "linkedin",
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
        icon: "twitter",
      },
      {
        href: "https://linkedin.com/john_smith",
        icon: "linkedin",
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
        icon: "twitter",
      },
      {
        href: "https://instagram.com/lisa",
        icon: "instagram",
      },
      {
        href: "https://linkedin.com/lisa",
        icon: "linkedin",
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
        icon: "twitter",
      },
      {
        href: "https://instagram.com/tyler",
        icon: "instagram",
      },
      {
        href: "https://facebook.com/tyler",
        icon: "facebook",
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
        icon: "twitter",
      },
      {
        href: "https://instagram.com/kate",
        icon: "instagram",
      },
      {
        href: "https://linkedin.com/kate",
        icon: "linkedin",
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
        icon: "twitter",
      },
      {
        href: "https://linkedin.com/martha",
        icon: "linkedin",
      },
    ],
  },
];
