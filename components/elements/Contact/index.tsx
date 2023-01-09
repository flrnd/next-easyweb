import classNames from "classnames";
import { IList, IListItem } from "../../../lib/types";
import { Heading, Paragraph } from "../../typography";
import ContactItem from "../ContactItem";

interface IProps {
  title: string;
  text?: string;
  size?: string;
  list: IList;
}

const Contact = ({ title, text, size, list }: IProps): JSX.Element => {
  return (
    <div className="contact">
      <div className="border-b-2 mb-2">
        <Heading level={2} size={size}>
          {title}
        </Heading>
        {text && <Paragraph size={size}>{text}</Paragraph>}
      </div>
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
    </div>
  );
};

export default Contact;
