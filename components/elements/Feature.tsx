import { ReactNode } from "react";
import { Container } from "../layout";

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
    <Container>
      <div className="feature">
        <div className="content">{contentLeft}</div>
        <div className="content">{contentRight}</div>
      </div>
    </Container>
  );
};

export default Feature;
