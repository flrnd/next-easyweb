import { ReactNode } from "react";
import { Container } from "../layout/";
import { Heading, Paragraph } from "../typography";

interface Props {
  heading: string;
  text: string;
  cta?: ReactNode;
  image?: ReactNode;
}

const Hero = ({ heading, text, cta, image }: Props): JSX.Element => {
  return (
    <Container>
      <div className="hero">
        <Heading margin="mb-6 md:mb-8">{heading}</Heading>
        <Paragraph margin="mb-6 md:mb-8" size="medium">
          {text}
        </Paragraph>
        {cta && <div className="cta">{cta}</div>}
        {image && <div className="mt-5 md:mt-8">{image}</div>}
      </div>
    </Container>
  );
};

export default Hero;
