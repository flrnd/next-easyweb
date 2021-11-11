import { ISocial } from "../../types/interfaces";
import Social from "./Social";

interface IProps {
  items: ISocial[];
}

const SocialList = ({ items }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {items.map((item) => (
        <Social key={item.href} icon={item.icon} href={item.href} />
      ))}
    </div>
  );
};

export default SocialList;
