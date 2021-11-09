import Link from "next/link";
import { ReactNode } from "react";
import stringToId from "../../util/stringToId";
import Heading from "../Heading";
interface IProps {
  icon: ReactNode;
  name: string;
  text: string;
  href: string;
}

const Service = ({ icon, name, text, href }: IProps): JSX.Element => {
  return (
    <>
      <div id={stringToId(name)} className="container p-4 text-center">
        {icon && <div className="icon">{icon}</div>}
        <Heading level={5} size="xsmall" weight="font-normal">
          {name}
        </Heading>
        <p className="text-lg">{text}</p>
        <Link href={href}>
          <a className="font-semibold">Learn more</a>
        </Link>
      </div>
    </>
  );
};

export default Service;
