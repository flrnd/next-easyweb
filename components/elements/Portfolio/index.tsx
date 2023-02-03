import Grid from "components/layout/Grid";
import { Item } from "lib/types";
import PortfolioItem from "../PortfolioItem";

interface IProps {
  allProjects: Item[];
}

const Portfolio = ({ allProjects }: IProps): JSX.Element => {
  return (
    <div className="pt-12">
      <Grid columns={3}>
        {allProjects.map((project: Item, i: number) => (
          <PortfolioItem
            key={i}
            title={project.title}
            tags={project.category}
            cover={project.bgImage}
            slug={project.slug}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Portfolio;
