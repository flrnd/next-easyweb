import { Service } from ".";
import { IServiceListItem } from "../../types/interfaces";

interface IProps {
  services: IServiceListItem[];
}

const calculateGridColumns = (length: number) => {
  switch (length % 2 === 0) {
    case true:
      return 2;
    case false:
      return 3;
  }
};

const ServiceList = ({ services }: IProps): JSX.Element => {
  return (
    <div
      className={`grid grid-cols-${calculateGridColumns(
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
