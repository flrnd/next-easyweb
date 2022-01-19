import { PortfolioItem } from "..";
import { Item } from "../../../lib/types";
import { Grid } from "../../layout";

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
