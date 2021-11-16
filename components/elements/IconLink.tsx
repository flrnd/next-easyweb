import classNames from "classnames";

interface IProps {
  icon: JSX.Element;
  size?: "xsmall" | "small" | "normal" | "medium" | "large" | "xlarge";
  href: string;
  margin?: string;
}

const IconLink = ({ icon, size, margin, href }: IProps): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(parseIconSize(size), margin)}
    >
      {icon}
    </a>
  );
};

export default IconLink;

const parseIconSize = (size: string): string => {
  switch (size) {
    case "xsmall":
      return "icon-xsmall";
    case "icon-small":
      return "small";
    case "normal":
      return "icon-normal";
    case "medium":
      return "icon-medium";
    case "large":
      return "icon-large";
    case "xlarge":
      return "icon-xlarge";
    default:
      return "icon-xsmall";
  }
};
