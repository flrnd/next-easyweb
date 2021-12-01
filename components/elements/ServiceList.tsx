import { Service } from ".";
import { IServiceListItem } from "../../types/interfaces";
import { calculateGridColumns } from "../../lib/helpers";
import { Container, Grid } from "../layout";

interface IProps {
  services: IServiceListItem[];
}

const ServiceList = ({ services }: IProps): JSX.Element => {
  const columns = calculateGridColumns(services.length);

  return (
    <Container>
      <Grid columns={columns} gap="gap-2">
        {services.map((serviceItem) => (
          <Service
            key={serviceItem.name}
            name={serviceItem.name}
            text={serviceItem.description}
            icon={serviceItem.icon}
            href={serviceItem.href}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceList;
