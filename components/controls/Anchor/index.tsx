import Link from "next/link";
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
  const anchorInside = (
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
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={a11yTitle}
        className={classNames(color, margin, size, weight)}
      >
        {anchorInside}
      </Link>
    );
  } else {
    return (
      <button
        onClick={onClick}
        aria-label={a11yTitle}
        className={classNames(color, margin, size, weight)}
      >
        {anchorInside}
      </button>
    );
  }
};

export default Anchor;
