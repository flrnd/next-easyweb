import Media from "./Media";

interface Props {
  valueProposition: string;
  valueDescription: string;
  media: string;
}

const Hero = ({
  valueProposition,
  valueDescription,
  media,
}: Props): JSX.Element => {
  return (
    <div className="hero">
      <h1>{valueProposition}</h1>
      <p>{valueDescription}</p>
      <Media source={media} height={600} width={400} />
    </div>
  );
};

export default Hero;
