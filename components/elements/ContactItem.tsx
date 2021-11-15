import { ReactNode } from "react";
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
        <div className="text-gray-400 icon-small mr-2">{getIcon(icon)}</div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="ml-10">{parseValue(value)}</div>
    </li>
  );
};

function parseValue(value: string[]): ReactNode {
  const valueNode = value.map((v) => (
    <div key={v} className="text-gray-600">
      {v}
    </div>
  ));

  return valueNode;
}

export default ContactItem;
