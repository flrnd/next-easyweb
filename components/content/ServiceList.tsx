import { Service } from ".";
import { IServiceListItem } from "../../types/interfaces";
import calculateGridColumns from "../../util/calculateGridColumns";

interface IProps {
  services: IServiceListItem[];
}

const ServiceList = ({ services }: IProps): JSX.Element => {
  const columns = calculateGridColumns(services.length);

  return (
    <div className={`my-4 lg:grid lg:grid-cols-${columns} gap-4`}>
      {services.map((serviceItem) => (
        <Service
          key={serviceItem.name}
          name={serviceItem.name}
          text={serviceItem.description}
          icon={serviceItem.icon}
          href={serviceItem.href}
        />
      ))}
    </div>
  );
};

export default ServiceList;
