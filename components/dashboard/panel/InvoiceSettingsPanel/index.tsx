import router from "next/router";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../lib/hooks";
import { Heading } from "../../../typography";
import EditButton from "../../buttons/EditButton";
import SaveCancelButtons from "../../buttons/SaveCancelButtons";

const InvoiceSettingsPanel = (): JSX.Element => {
  const { session } = useAppSelector((state) => state.user);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => setEdit(!edit);
  const handleCancelOnClick = () => {
    setEdit(false);
  };
  const handleSave = () => {
    return "";
  };

  useEffect(() => {
    if (!session) {
      router.replace("/signin");
    }
  });

  return (
    <div className="mt-10">
      <div className="dashboard-panel">
        <div className="dashboard-panel-main-section">
          <Heading level={4} size="medium" weight="font-bold">
            Invoice Settings
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

export default InvoiceSettingsPanel;
