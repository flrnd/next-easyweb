import { ReactNode } from "react";
import Heading from "../Heading";
interface IProps {
  icon: ReactNode;
  heading: string;
  text: string;
}

const Service = ({ icon, heading, text }: IProps): JSX.Element => {
  return (
    <>
      <div className="container p-4 text-center">
        {icon && icon}
        <Heading level={5} size="xsmall" weight="font-normal">
          {heading}
        </Heading>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Service;
