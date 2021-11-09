import {
  CodeIcon,
  DeviceMobileIcon,
  DatabaseIcon,
  CloudIcon,
} from "@heroicons/react/outline";

const services = [
  {
    title: "Web Development",
    description:
      "We build websites that are fast, secure, and easy to use. We use modern technologies to make your website look great and work flawlessly.",
    icon: <CodeIcon className="service-icon" />,
    href: "/web-development",
  },
  {
    title: "Mobile Development",
    description:
      "We build mobile apps that are fast, secure, and easy to use. We use modern technologies to make your app look great and work flawlessly.",
    icon: <DeviceMobileIcon className="service-icon" />,
    href: "/mobile-development",
  },
  {
    title: "API Development",
    description:
      "We build APIs that are fast, secure, and easy to use. We use modern technologies to make your API look great and work flawlessly.",
    icon: <DatabaseIcon className="service-icon" />,
    href: "/api-development",
  },
  {
    title: "Cloud Development",
    description:
      "We build cloud solutions that are fast, secure, and easy to use. We use modern technologies to make your solution look great and work flawlessly.",
    icon: <CloudIcon className="service-icon" />,
    href: "/cloud-development",
  },
];

export { services };
