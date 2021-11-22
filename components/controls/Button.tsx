import { ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  background?: string;
  hoverBg?: string;
  textColor?: string;
  rounded?: string;
  shadow?: string;
  margin?: string;
  hover?: string;
  href?: string;
  label?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  background,
  hoverBg,
  textColor,
  rounded,
  shadow,
  margin,
  hover,
  href,
  label,
  onClick,
  children,
}: IProps): JSX.Element => {
  return (
    <button
      className={classNames(
        label && "btn",
        margin,
        background,
        rounded,
        shadow,
        textColor,
        hover && `hover:${hover}`,
        hoverBg && `hover:${hoverBg}`
      )}
      onClick={onClick}
    >
      {href && <a href={href}>{label}</a>}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
