import { ReactNode } from "react";
import Media from "./Media";

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

  const contentMedia = <Media source={media} width={600} height={400} />;

  if (isMediaLeft) {
    contentLeft = contentMedia;
    contentRight = children;
  } else {
    contentLeft = children;
    contentRight = contentMedia;
  }

  return (
    <div className="feature">
      <div className="content">{contentLeft}</div>
      <div className="content">{contentRight}</div>
    </div>
  );
};

export default Feature;
