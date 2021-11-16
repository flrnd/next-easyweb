import Image from "next/image";
interface IProps {
  src: string;
  width: number | string;
  height: number | string;
}

const Logo = ({ src, width, height }: IProps): JSX.Element => {
  return (
    <div className="relative" style={{ width: width, height: height }}>
      <Image layout="fill" objectFit="contain" src={src} alt="logo" />
    </div>
  );
};

export default Logo;
