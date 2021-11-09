import { ReactNode } from "react";
import Heading from "../Heading";

interface Props {
  heading: string;
  text: string;
  cta?: ReactNode;
  image?: ReactNode;
}

const Hero = ({ heading, text, cta, image }: Props): JSX.Element => {
  return (
    <div className="hero">
      <Heading margin="mb-6 md:mb-8">{heading}</Heading>
      <p>{text}</p>
      {cta && <div className="cta">{cta}</div>}
      {image && <div className="mt-5 md:mt-8">{image}</div>}
    </div>
  );
};

export default Hero;
