import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Container = ({ children }: IProps): JSX.Element => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
