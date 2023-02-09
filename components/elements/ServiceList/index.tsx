import ServiceItem from "components/elements/ServiceItem";
import Container from "components/layout/Container";
import Grid from "components/layout/Grid";
import { IServiceListItem } from "lib/types";
import { calculateGridColumns } from "lib/util";

interface IProps {
  services: IServiceListItem[];
}

const ServiceList = ({ services }: IProps): JSX.Element => {
  const columns = calculateGridColumns(services.length);

  return (
    <Container>
      <Grid columns={columns} gap="gap-2" ariaLabel="services-list">
        {services.map((serviceItem) => (
          <ServiceItem
            ariaLabel="services-listitem"
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
