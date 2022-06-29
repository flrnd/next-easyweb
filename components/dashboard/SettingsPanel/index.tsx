import { useState } from "react";
import { useAppSelector } from "../../../lib/hooks";
import { Heading } from "../../typography";
import EditButton from "../EditButton";
import SaveCancelButtons from "../SaveCancelButtons";

const SettingsPanel = (): JSX.Element => {
  const { user } = useAppSelector((state) => state.user);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => setEdit(!edit);
  const handleCancelOnClick = () => {
    setEdit(false);
  };
  const handleSave = () => {
    return "";
  };

  return (
    <div className="mt-10">
      <div className="dashboard-panel">
        <div className="dashboard-panel-main-section">
          <Heading level={4} size="medium" weight="font-bold">
            {`${user && user.email} Invoice details`}
          </Heading>
          {!edit && <EditButton onClick={handleEdit} />}
          {edit && (
            <SaveCancelButtons
              handleCancel={handleCancelOnClick}
              handleSave={handleSave}
            />
          )}
        </div>
        <div className="dashboard-panel-form-section"></div>
      </div>
    </div>
  );
};

export default SettingsPanel;
