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
    icon: <CodeIcon className="mx-auto mb-4 icon-small" />,
    href: "/web-development",
  },
  {
    title: "Mobile Development",
    description:
      "We build mobile apps that are fast, secure, and easy to use. We use modern technologies to make your app look great and work flawlessly.",
    icon: <DeviceMobileIcon className="mx-auto mb-4 icon-small" />,
    href: "/mobile-development",
  },
  {
    title: "API Development",
    description:
      "We build APIs that are fast, secure, and easy to use. We use modern technologies to make your API look great and work flawlessly.",
    icon: <DatabaseIcon className="mx-auto mb-4 icon-small" />,
    href: "/api-development",
  },
  {
    title: "Cloud Development",
    description:
      "We build cloud solutions that are fast, secure, and easy to use. We use modern technologies to make your solution look great and work flawlessly.",
    icon: <CloudIcon className="mx-auto mb-4 icon-small" />,
    href: "/cloud-development",
  },
];

export { services };
