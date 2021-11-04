import Image from "next/image";

const mediaLoader = ({ source = "https://via.placeholder.com/", width }) => {
  return `${source}${width}x${width}`;
};

interface Props {
  media: string;
  width: number;
}

const Media = ({ media, width }: Props): JSX.Element => {
  return (
    <>
      <Image loader={mediaLoader} src={media} width={width} height={width} />
    </>
  );
};

export default Media;
