import { Anchor, Button } from "../../../controls";
import { getIcon } from "../../../icons";

interface IProps {
  handleCancel: () => void;
  handleSave: () => void;
}

const SaveCancelButtons = ({
  handleCancel,
  handleSave,
}: IProps): JSX.Element => {
  return (
    <div className="flex">
      <Button
        rounded="rounded-md"
        shadow="shadow-sm"
        hover="shadow-md"
        className="px-4 border-solid border-2 border-gray-100 mr-2"
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <div className="px-4 py-1 shadow-sm bg-indigo-600 text-white hover:bg-indigo-700 rounded-md">
        <Anchor
          icon={getIcon("save")}
          size="xsmall"
          gap="ml-1"
          reverse={true}
          label="Save"
          onClick={handleSave}
        />
      </div>
    </div>
  );
};

export default SaveCancelButtons;
