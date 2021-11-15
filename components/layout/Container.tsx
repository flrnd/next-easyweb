import classNames from "classnames";
import { ReactNode } from "react";

interface IProps {
  size?: string;
  margin?: string;
  children: ReactNode;
}
const Container = ({
  size,
  margin = "mx-auto",
  children,
}: IProps): JSX.Element => {
  return (
    <div className={classNames("container", size, margin)}>{children}</div>
  );
};

export default Container;
