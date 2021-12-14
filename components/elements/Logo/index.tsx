import classNames from "classnames";
import Image from "next/image";
interface IProps {
  src: string | StaticImageData;
  boxWidth?: string;
  margin?: string;
  padding?: string;
  width: number | string;
  height: number | string;
  responsive?: boolean;
}

const Logo = ({
  src,
  boxWidth = "w-40",
  margin,
  padding,
  width,
  height,
  responsive,
}: IProps): JSX.Element => {
  return (
    <div
      className={classNames(
        responsive ? "w-40 md:w-48 lg:w-56" : boxWidth,
        margin,
        padding
      )}
    >
      <Image
        layout="responsive"
        objectFit="contain"
        src={src}
        alt="logo"
        width={width}
        height={height}
      />
    </div>
  );
};

export default Logo;
