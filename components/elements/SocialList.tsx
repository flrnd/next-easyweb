import { ISocial } from "../../types/interfaces";
import { getSocialIcon } from "../icons";
import Social from "./Social";

interface IProps {
  items: ISocial[];
}

const SocialList = ({ items }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {items.map((item) => (
        <Social
          key={item.href}
          icon={getSocialIcon(item.icon)}
          href={item.href}
        />
      ))}
    </div>
  );
};

export default SocialList;
