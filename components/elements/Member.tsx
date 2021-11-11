import { ReactNode } from "react";
import Image from "next/image";
import classNames from "classnames";

interface IProps {
  image: string;
  width?: string;
  height?: string;
  isRounded?: boolean;
  isVertical?: boolean;
  name: string;
  jobTitle: string;
  excerpt?: string;
  social?: ReactNode;
}

const Member = ({
  image,
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
        "flex",
        width,
        "h-full",
        isVertical ? "flex-col" : "flex-row",
        "mb-4"
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
          priority={true}
          placeholder="empty"
          src={image}
          layout="fill"
          objectFit="cover"
          className={classNames(isRounded ? "rounded-full" : "rounded-xl")}
        />
      </div>

      <div className={classNames("py-2", "mt-2", isRounded && "text-center")}>
        <div className="small">{name}</div>
        <div className="small text-indigo-800">{jobTitle}</div>
        {excerpt && <div className="text-gray-500 mt-2">{excerpt}</div>}
        {social && (
          <div
            className={classNames(
              "mt-4",
              "mb-6",
              "flex",
              isRounded && "justify-center"
            )}
          >
            {social}
          </div>
        )}
      </div>
    </div>
  );
};

export default Member;
