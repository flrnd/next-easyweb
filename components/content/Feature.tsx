import { ReactNode } from "react";

interface Props {
  isImageLeft?: boolean;
  image: ReactNode;
  children: ReactNode;
}

const Feature = ({
  isImageLeft: isMediaLeft = false,
  image,
  children,
}: Props): JSX.Element => {
  let contentLeft, contentRight;

  if (isMediaLeft) {
    contentLeft = image;
    contentRight = children;
  } else {
    contentLeft = children;
    contentRight = image;
  }

  return (
    <div className="feature">
      <div className="content">{contentLeft}</div>
      <div className="content">{contentRight}</div>
    </div>
  );
};

export default Feature;
