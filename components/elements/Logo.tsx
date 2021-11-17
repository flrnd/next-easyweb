import Image from "next/image";
interface IProps {
  src: string | StaticImageData;
  width: number | string;
  height: number | string;
}

const Logo = ({ src, width, height }: IProps): JSX.Element => {
  return (
    <div className="w-40 md:w-48 lg:w-56">
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
