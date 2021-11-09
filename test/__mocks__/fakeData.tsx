import {
  CodeIcon,
  DeviceMobileIcon,
  DatabaseIcon,
  CloudIcon,
} from "@heroicons/react/outline";
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

export { serviceItem, serviceList, placeholderData };
