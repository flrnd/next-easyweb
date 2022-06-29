import classNames from "classnames";
import { useAppSelector } from "../../../lib/hooks";

const SettingsForm = ({ isDisabled, onChange, onSubmit }): JSX.Element => {
  const { user, session, profileDetails } = useAppSelector(
    (state) => state.user
  );

  return (
    <>
      <div className="form-entry">
        <label className="form-label"></label>
        <input
          className={classNames(
            "form-input",
            isDisabled && "border border-gray-200 shadow",
            !isDisabled && "border border-transparent"
          )}
          id=""
          value={}
          type="text"
          placeholder=""
          onChange={}
          disabled={isDisabled}
        />
      </div>
    </>
  );
};

export default SettingsForm;
