import Image from "next/image";

const mediaLoader = ({ source = "https://via.placeholder.com/", width }) => {
  return `${source}${width}`;
};

interface Props {
  source: string;
  height: number;
  width: number;
}

const Media = ({ source, height, width }: Props): JSX.Element => {
  return (
    <>
      <Image loader={mediaLoader} src={source} width={width} height={height} />
    </>
  );
};

export default Media;
