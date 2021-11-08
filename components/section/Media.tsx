import Image from "next/image";

interface Props {
  source: string | StaticImageData;
  height: number;
  width: number;
  alt?: string;
  placeholder?: "blur" | "empty";
}

const Media = ({
  source,
  height,
  width,
  alt,
  placeholder = "empty",
}: Props): JSX.Element => {
  return (
    <>
      <Image
        src={source}
        width={width}
        height={height}
        alt={alt}
        placeholder={placeholder}
      />
    </>
  );
};

export default Media;
