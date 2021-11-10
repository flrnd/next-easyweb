import Anchor from "../controls/Anchor";
import { Heading, Paragraph } from "../typography";

interface Props {
  title: string;
  text: string;
  label: string;
  href: string;
}

const FeatureContent = ({ title, text, label, href }: Props): JSX.Element => {
  return (
    <>
      <Heading a11yTitle={title} level={2} size="large" weight="font-semibild">
        {title}
      </Heading>
      <Paragraph
        margin="mb-6 md:mb-8"
        size="small"
        textAlign="text-center lg:text-left"
      >
        {text}
      </Paragraph>
      <Anchor href={href} size="normal" weight="font-semibold" label={label} />
    </>
  );
};

export default FeatureContent;
