import { ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  picture: string;
  width?: string;
  height?: string;
  isRounded?: boolean;
  isVertical?: boolean;
  name: string;
  jobTitle: string;
  excerpt?: string;
  social?: ReactNode;
}

const Avatar = ({
  picture,
  width = "w-64",
  height = "h-64",
  isRounded,
  isVertical = true,
  name,
  jobTitle,
  excerpt,
  social,
}: IProps): JSX.Element => {
  return (
    <div
      className={classNames(
        "avatar",
        "flex",
        width,
        "h-full",
        isVertical ? "flex-col" : "flex-row"
      )}
    >
      <div
        className={classNames(
          "relative",
          width,
          height,
          "overflow-hidden",
          isRounded ? "rounded-full" : "rounded-xl",
          "shadow-md"
        )}
      >
        <Image
          src={picture}
          layout="fill"
          objectFit="cover"
          className={classNames(isRounded ? "rounded-full" : "rounded-xl")}
        />
      </div>

      <div className={classNames("py-2 mt-2")}>
        <div className="small">{name}</div>
        <div className="small text-indigo-800">{jobTitle}</div>
        {excerpt && <div className="text-gray-500 mt-2">{excerpt}</div>}
        {social && <div className="text-gray-500 mt-2">{social}</div>}
      </div>
    </div>
  );
};

export default Avatar;
