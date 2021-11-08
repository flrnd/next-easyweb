import { ReactNode } from "react";
import Button from "../elements/Button";
import Heading from "../elements/Heading";

interface Props {
  valueProposition: string;
  valueDescription: string;
  image?: ReactNode;
}

const Hero = ({
  valueProposition,
  valueDescription,
  image,
}: Props): JSX.Element => {
  return (
    <div className="hero">
      <Heading>{valueProposition}</Heading>
      <p>{valueDescription}</p>
      <div className="mt-8 md:mt-5 flex justify-center">
        <Button
          bgColor="bg-indigo-600"
          textColor="text-white"
          hoverBg="bg-indigo-700"
          path="/"
          text="Get Started"
        />
        <Button
          bgColor="bg-indigo-100"
          textColor="text-indigo-700"
          hoverBg="bg-indigo-200"
          path="#"
          text="Live Demo"
        />
      </div>
      {image && <div className="mt-5 md:mt-8">{image}</div>}
    </div>
  );
};

export default Hero;
