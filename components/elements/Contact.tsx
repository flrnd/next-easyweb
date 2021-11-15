import classNames from "classnames";
import { IList, IListItem } from "../../types/interfaces";
import { Heading, Paragraph } from "../typography";
import ContactItem from "./ContactItem";

interface IProps {
  title: string;
  description: string;
  size?: string;
  list: IList;
}

const Contact = ({ title, description, size, list }: IProps): JSX.Element => {
  return (
    <>
      <Heading level={2}>{title}</Heading>
      <Paragraph size={size}>{description}</Paragraph>
      <ul className={classNames("p-2", size)}>
        {list.list.map((item: IListItem) => (
          <ContactItem
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </ul>
    </>
  );
};

export default Contact;
