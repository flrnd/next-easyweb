import { ArrowRightIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";

import Anchor from "components/controls/Anchor";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { stringToId } from "lib/util";

interface IProps {
  ariaLabel?: string;
  icon: ReactNode;
  name: string;
  text: string;
  href: string;
  linkText?: string;
}

const ServiceItem = ({
  ariaLabel,
  icon,
  name,
  text,
  href,
  linkText = "Learn more",
}: IProps): JSX.Element => {
  return (
    <div aria-label={ariaLabel} id={stringToId(name)} className="service">
      {icon && <div className="icon icon-medium">{icon}</div>}
      <Heading level={5} size="small" weight="font-bold">
        {name}
      </Heading>
      <Paragraph margin="mb-6 md:mb-8" size="small">
        {text}
      </Paragraph>
      <Anchor
        href={href}
        margin="mt-5"
        weight="font-semibold"
        label={linkText}
        gap="px-2"
        reverse={true}
        icon={<ArrowRightIcon />}
      />
    </div>
  );
};

export default ServiceItem;
