import { Anchor } from "../../../controls";
import { getIcon } from "../../../icons";

interface IProps {
  onClick: () => void;
}

const EditButton = ({ onClick }: IProps): JSX.Element => {
  return (
    <div className="px-4 py-1 border-solid border-2 border-grey-100 shadow-sm hover:shadow-md rounded-md">
      <Anchor
        icon={getIcon("edit")}
        size="xsmall"
        gap="ml-1"
        reverse={true}
        label="Edit"
        onClick={onClick}
      />
    </div>
  );
};

export default EditButton;
