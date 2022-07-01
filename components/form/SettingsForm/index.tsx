import classNames from "classnames";

const SettingsForm = ({ isDisabled }): JSX.Element => {
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
          value=""
          type="text"
          placeholder=""
          disabled={isDisabled}
        />
      </div>
    </>
  );
};

export default SettingsForm;
