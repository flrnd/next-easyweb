import Image from "next/image";

interface IProps {
  title: string;
  tags: string;
  cover: string;
  slug: string;
}
const PortfolioItem = ({ title, tags, cover, slug }: IProps): JSX.Element => {
  return (
    <a className="" href={`trabajos/${slug}`}>
      <div className="relative">
        <Image
          priority={true}
          height={650}
          width={650}
          objectFit="cover"
          src={cover}
          alt=""
        />

        <div className="overlay">
          <div className="portfolio-label">
            <div className="text-2xl font-semibold">{title}</div>
            <div>{tags}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PortfolioItem;
