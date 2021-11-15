import { getIcon } from "../icons";

interface IProps {
  title: string;
  icon: string;
  value: string[];
}

const ContactItem = ({ title, icon, value }: IProps): JSX.Element => {
  return (
    <li className="mb-4 md:mb-6">
      <div className="flex items-center mb-2">
        <div className="icon-small mr-2">{getIcon(icon)}</div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="ml-10">
        {value.map((v) => (
          <div key={v}>{v}</div>
        ))}
      </div>
    </li>
  );
};

export default ContactItem;
