import { BaseSyntheticEvent } from "react";
import EditButton from "../EditButton";
import SaveCancelButtons from "../SaveCancelButtons";

interface IProps {
  handleEdit: {
    onClick: () => void;
    cancelOnClick: () => void;
    onSubmit: (
      e?: BaseSyntheticEvent<Record<string, unknown>, any, any>
    ) => Promise<void>;
  };
  edit: boolean;
}

const EditHandler = ({ handleEdit, edit }: IProps) => {
  return !edit ? (
    <EditButton onClick={handleEdit.onClick} />
  ) : (
    <SaveCancelButtons
      handleCancel={handleEdit.cancelOnClick}
      handleSave={handleEdit.onSubmit}
    />
  );
};

export default EditHandler;
