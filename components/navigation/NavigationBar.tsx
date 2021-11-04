import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const NavigationBar = ({ children }: Prop): JSX.Element => {
  return <nav className="flex justify-between p-4 mx-auto">{children}</nav>;
};

export default NavigationBar;
