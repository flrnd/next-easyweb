import Link from "next/link";
import { ReactNode } from "react";
import stringToId from "../../util/stringToId";
import Heading from "../Heading";
interface IProps {
  icon: ReactNode;
  name: string;
  text: string;
  href: string;
  linkText?: string;
}

const Service = ({
  icon,
  name,
  text,
  href,
  linkText = "Learn more",
}: IProps): JSX.Element => {
  return (
    <>
      <div id={stringToId(name)} className="service">
        {icon && <div className="icon-s">{icon}</div>}
        <Heading level={5} size="xsmall" weight="font-normal">
          {name}
        </Heading>
        <p className="text-lg p-4">{text}</p>
        <Link href={href}>
          <a className="mt-5 font-semibold mb-4 underline">{linkText}</a>
        </Link>
      </div>
    </>
  );
};

export default Service;
