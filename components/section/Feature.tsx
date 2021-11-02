import Image from "next/image";
import { ReactNode } from "react";

const myLoader = ({ width }) => {
  return `https://via.placeholder.com/${width}x${width}`;
};

interface Props {
  isMediaLeft?: boolean;
  media: string;
  children: ReactNode;
}

const Feature = ({
  isMediaLeft = false,
  media,
  children,
}: Props): JSX.Element => {
  let contentLeft, contentRight;

  const contentMedia = (
    <Image loader={myLoader} src={media} width={500} height={500} />
  );

  if (isMediaLeft) {
    contentLeft = contentMedia;
    contentRight = children;
  } else {
    contentLeft = children;
    contentRight = contentMedia;
  }

  return (
    <div className="feature flex flex-col-reverse lg:flex-row w-auto">
      <div className="w-1/2 p-10 lg:p-20">{contentLeft}</div>
      <div className="w-1/2 p-10 lg:p-20">{contentRight}</div>
    </div>
  );
};

export default Feature;
