import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  a11yTitle?: string;
  level?: number;
  size?: string; // small, normal, medium, large, xlarge, xxlarge, xxxlarge
  weight?: string;
  margin?: string;
  tracking?: string;
  children: ReactNode;
}

const Heading = ({
  a11yTitle,
  level = 1,
  size = "xxxlarge",
  weight = "font-extrabold",
  margin = "mb-6",
  tracking = "tracking-tight",
  children,
}: Props): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      aria-label={a11yTitle}
      className={classNames(size, weight, margin, tracking)}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
