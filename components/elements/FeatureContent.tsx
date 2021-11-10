import Link from "next/link";
import { Heading, Paragraph } from "../typography";

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
      <Paragraph
        margin="mb-6 md:mb-8"
        size="small"
        textAlign="text-center md:text-left"
      >
        {text}
      </Paragraph>

      <Link href={buttonURL}>
        <a className="text-button">{buttonText}</a>
      </Link>
    </>
  );
};

export default FeatureContent;
