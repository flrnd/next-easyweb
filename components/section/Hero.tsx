import Button from "../elements/Button";
import Heading from "../elements/Heading";
import Media from "./Media";

interface Props {
  valueProposition: string;
  valueDescription: string;
  media?: string;
}

const Hero = ({
  valueProposition,
  valueDescription,
  media,
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
      {media && <Media source={media} height={600} width={600} />}
    </div>
  );
};

export default Hero;
