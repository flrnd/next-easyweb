import { ReactNode } from "react";

interface Props {
  level?: number;
  size?: string; // tailwind class or custom css class
  children: ReactNode;
}

const Heading = ({
  level = 1,
  size = "heading",
  children,
}: Props): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={`${size}`}>{children}</HeadingTag>;
};

export default Heading;
