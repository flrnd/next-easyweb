import { ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  background?: string;
  hoverBg?: string;
  textColor?: string;
  rounded?: string;
  shadow?: string;
  margin?: string;
  className?: string;
  hover?: string;
  href?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  background,
  className,
  hoverBg,
  textColor,
  rounded,
  shadow,
  margin,
  hover,
  href,
  label,
  type = "button",
  onClick,
  children,
}: IProps): JSX.Element => {
  return (
    <button
      type={type}
      className={classNames(
        className,
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
      {href ? <a href={href}>{label}</a> : label}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
