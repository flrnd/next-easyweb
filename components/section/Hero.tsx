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
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
          >
            Live demo
          </a>
        </div>
      </div>
      {media && <Media source={media} height={600} width={600} />}
    </div>
  );
};

export default Hero;
