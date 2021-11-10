import { ReactNode } from "react";
import { Container } from "../layout";

interface Props {
  isImageLeft?: boolean;
  image: ReactNode;
  children: ReactNode;
}

const SplitSide = ({
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
    <Container>
      <div className="split-side">
        <div className="content">{contentLeft}</div>
        <div className="content">{contentRight}</div>
      </div>
    </Container>
  );
};

export default SplitSide;
