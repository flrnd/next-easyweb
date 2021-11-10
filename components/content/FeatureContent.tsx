import Link from "next/link";
import Heading from "../typography/Heading";

interface Props {
  title: string;
  text: string;
  buttonText: string;
  buttonURL: string;
}

const FeatureContent = ({
  title,
  text,
  buttonText,
  buttonURL,
}: Props): JSX.Element => {
  return (
    <>
      <Heading a11yTitle={title} level={2} size="large" weight="font-semibild">
        {title}
      </Heading>
      <p className="text-xl mb-8 text-center md:text-left">{text}</p>

      <Link href={buttonURL}>
        <a className="text-button">{buttonText}</a>
      </Link>
    </>
  );
};

export default FeatureContent;
