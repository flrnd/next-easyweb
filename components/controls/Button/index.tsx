import { ReactNode } from "react";
import classNames from "classnames";

interface IProps {
  background?: string;
  hoverBg?: string;
  disabled?: boolean;
  textColor?: string;
  rounded?: string;
  shadow?: string;
  margin?: string;
  className?: string;
  hover?: string;
  href?: string;
  label?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  background,
  className,
  disabled,
  hoverBg,
  textColor,
  rounded,
  shadow,
  margin,
  hover,
  href,
  label,
  ariaLabel,
  type = "button",
  onClick,
  children,
}: IProps): JSX.Element => {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={classNames(
        className,
        label && "btn",
        margin,
        background,
        rounded,
        shadow,
        textColor,
        hover && !disabled && `hover:${hover}`,
        hoverBg && !disabled && `hover:${hoverBg}`
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {href ? <a href={href}>{label}</a> : label}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
