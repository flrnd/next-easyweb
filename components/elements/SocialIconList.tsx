import { ISocial } from "../../types/interfaces";
import { getIcon } from "../icons";
import IconLink from "./IconLink";

interface IProps {
  items: ISocial[];
}

const SocialIconList = ({ items }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {items.map((item) => (
        <IconLink key={item.href} icon={getIcon(item.icon)} href={item.href} />
      ))}
    </div>
  );
};

export default SocialIconList;
