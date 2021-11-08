import { ReactNode } from "react";

interface Props {
  isMediaLeft?: boolean;
  media: ReactNode;
  children: ReactNode;
}

const Feature = ({
  isMediaLeft = false,
  media,
  children,
}: Props): JSX.Element => {
  let contentLeft, contentRight;

  if (isMediaLeft) {
    contentLeft = media;
    contentRight = children;
  } else {
    contentLeft = children;
    contentRight = media;
  }

  return (
    <div className="feature">
      <div className="content">{contentLeft}</div>
      <div className="content">{contentRight}</div>
    </div>
  );
};

export default Feature;
