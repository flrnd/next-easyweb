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
      aria-label={a11yTitle}
      href={href}
      className={`${color} ${size} ${weight} ${margin}`}
      onClick={onClick}
    >
      <div className={`flex justify-center ${reverse && "flex-row-reverse"}`}>
        {icon && <span className={`icon-small ${gap}`}>{icon}</span>}
        {label}
      </div>
    </a>
  );
};

export default Anchor;
