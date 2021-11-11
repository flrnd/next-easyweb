import { ISocial } from "../../types/interfaces";
import Social from "./Social";

interface IProps {
  list: ISocial[];
}

const SocialList = ({ list }: IProps): JSX.Element => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Social key={item.href} icon={item.icon} href={item.href} />
      ))}
    </div>
  );
};

export default SocialList;
