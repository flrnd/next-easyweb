import { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  href: string;
}

const Social = ({ icon, href }: IProps): JSX.Element => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="icon-small mr-2"
    >
      {icon}
    </a>
  );
};

export default Social;
