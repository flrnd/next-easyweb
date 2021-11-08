import { ReactNode } from "react";
import Heading from "../elements/Heading";

interface Props {
  valueProposition: string;
  valueDescription: string;
  cta?: ReactNode;
  image?: ReactNode;
}

const Hero = ({
  valueProposition,
  valueDescription,
  cta,
  image,
}: Props): JSX.Element => {
  return (
    <div className="hero">
      <Heading>{valueProposition}</Heading>
      <p>{valueDescription}</p>
      {cta && <div className="mt-8 md:mt-5 flex justify-center">{cta}</div>}
      {image && <div className="mt-5 md:mt-8">{image}</div>}
    </div>
  );
};

export default Hero;
