import Link from "next/link";

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonURL: string;
}

const FeatureContent = ({
  title,
  description,
  buttonText,
  buttonURL,
}: Props): JSX.Element => {
  return (
    <>
      <h1 className="text-5xl">{title}</h1>
      <p className="text-lg">{description}</p>
      <button className="bg-gray-300 px-4 py-2">
        <Link href={buttonURL}>
          <a>{buttonText}</a>
        </Link>
      </button>
    </>
  );
};

export default FeatureContent;
