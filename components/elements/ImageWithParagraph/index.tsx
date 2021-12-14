import { ReactNode } from "react";

interface Props {
  isImageLeft?: boolean;
  image: ReactNode;
  children: ReactNode;
}

const ImageWithParagraph = ({
  isImageLeft = false,
  image,
  children,
}: Props): JSX.Element => {
  let contentLeft, contentRight;

  if (isImageLeft) {
    contentLeft = image;
    contentRight = children;
  } else {
    contentLeft = children;
    contentRight = image;
  }

  return (
    <div className="split-side">
      <div className="w-full lg:w-1/2">{contentLeft}</div>
      <div className="content">{contentRight}</div>
    </div>
  );
};

export default ImageWithParagraph;
