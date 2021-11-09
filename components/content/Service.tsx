import { ReactNode } from "react";
import Heading from "../Heading";
interface IProps {
  icon: ReactNode;
  heading: string;
  text: string;
  href: string;
}

const Service = ({ icon, heading, text, href }: IProps): JSX.Element => {
  return (
    <>
      <div className="container p-4 text-center">
        {icon && icon}
        <Heading level={5} size="xsmall" weight="font-normal">
          {heading}
        </Heading>
        <p className="text-lg">{text}</p>
        <a href={href} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </>
  );
};

export default Service;
