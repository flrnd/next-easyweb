import { ISocial } from "../../types/interfaces";
import { getSocialIcon } from "../icons";
import IconLink from "./IconLink";

interface IProps {
  items: ISocial[];
}

const IconLinkList = ({ items }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {items.map((item) => (
        <IconLink
          key={item.href}
          icon={getSocialIcon(item.icon)}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default IconLinkList;
