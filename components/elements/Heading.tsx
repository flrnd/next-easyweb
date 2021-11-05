import { ReactNode } from "react";

interface Props {
  a11yTitle?: string;
  level?: number;
  size?: string; // tailwind class or custom css class
  weight?: string; // tailwind class or custom css class
  margin?: string; // tailwind class or custom css class
  tracking?: string; // tailwind class or custom css class
  children: ReactNode;
}

const Heading = ({
  a11yTitle,
  level = 1,
  size = "xlarge-heading",
  weight = "font-extrabold",
  margin = "mb-4",
  tracking = "tracking-tight",
  children,
}: Props): JSX.Element => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      aria-label={a11yTitle}
      className={`${size} ${weight} ${margin} ${tracking}`}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
