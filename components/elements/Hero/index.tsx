import Container from "components/layout/Container";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import { ReactNode } from "react";

interface Props {
  heading: string;
  text: string;
  cta?: ReactNode;
  image?: ReactNode;
}

const Hero = ({ heading, text, cta, image }: Props): JSX.Element => {
  return (
    <div className="hero">
      <Container>
        <Heading margin="mb-6 md:mb-8">{heading}</Heading>
        <Paragraph margin="mb-6 md:mb-8" size="medium">
          {text}
        </Paragraph>
        {cta && <div className="cta">{cta}</div>}
      </Container>
      {image && <div className="mt-5 md:mt-8">{image}</div>}
    </div>
  );
};

export default Hero;
