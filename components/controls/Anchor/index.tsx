import classNames from "classnames";

interface IProps {
  a11yTitle?: string;
  href?: string;
  label: string;
  color?: string;
  icon?: JSX.Element;
  gap?: string;
  reverse?: boolean;
  margin?: string;
  size?: string;
  weight?: string;
  onClick?: () => void;
}

const Anchor = ({
  a11yTitle,
  href,
  label,
  color,
  icon,
  gap,
  reverse = false,
  margin,
  size,
  weight,
  onClick,
}: IProps): JSX.Element => {
  return (
    <a
      href={href}
      aria-label={a11yTitle}
      className={classNames(color, margin, size, weight)}
      onClick={onClick}
    >
      <div
        className={`flex justify-center items-center ${
          reverse && "flex-row-reverse"
        }`}
      >
        {icon && (
          <span className={classNames("flex items-center", gap)}>{icon}</span>
        )}
        {label}
      </div>
    </a>
  );
};

export default Anchor;
