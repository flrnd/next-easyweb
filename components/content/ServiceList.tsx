import { Service } from ".";
import { IServiceListItem } from "../../types/interfaces";
import calculateGridColumns from "../../util/calculateGridColumns";

interface IProps {
  services: IServiceListItem[];
}

const ServiceList = ({ services }: IProps): JSX.Element => {
  return (
    <div
      className={`my-4 grid grid-cols-${calculateGridColumns(
        services.length
      )} gap-4`}
    >
      {services.map((serviceItem) => (
        <Service
          key={serviceItem.title}
          heading={serviceItem.title}
          text={serviceItem.description}
          icon={serviceItem.icon}
          href={serviceItem.href}
        />
      ))}
    </div>
  );
};

export default ServiceList;
