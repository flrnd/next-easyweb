import classNames from "classnames";
import { ReactNode } from "react";

interface IProps {
  backgroundColor?: string;
  shadow?: string;
  padding?: string;
  margin?: string;
  width?: string;
  rounded?: string;
  icon?: ReactNode;
  iconColor?: string;
  iconSize?: string;
  iconBackgroundColor?: string;
  children: ReactNode;
}

const Card = ({
  backgroundColor = "bg-white",
  shadow = "shadow-md",
  padding = "p-6",
  margin,
  width = "max-w-sm",
  rounded = "rounded-md",
  icon,
  iconColor = "text-white",
  iconSize = "icon-small",
  iconBackgroundColor = "bg-blue-800",
  children,
}: IProps): JSX.Element => {
  return (
    <>
      {icon && (
        <div
          className={classNames(
            "card-icon",
            iconColor,
            iconSize,
            iconBackgroundColor
          )}
        >
          {icon}
        </div>
      )}
      <div
        className={classNames(
          "overflow-hidden",
          backgroundColor,
          shadow,
          padding,
          margin,
          width,
          rounded
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Card;
