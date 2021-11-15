import { ReactNode } from "react";

interface IProps {
  title: string;
  icon: JSX.Element;
  value: string | ReactNode;
}

const ContactItem = ({ title, icon, value }: IProps): JSX.Element => {
  return (
    <li className="mb-4 md:mb-6">
      <div className="flex items-center mb-2">
        <div className="text-gray-400 icon-small mr-2">{icon}</div>
        <div className="font-bold">{title}</div>
      </div>
      <div className="ml-10">{value}</div>
    </li>
  );
};

export default ContactItem;
