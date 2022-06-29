import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../../lib/hooks";
import { IProfileData } from "../../../lib/types";

interface IProps {
  edit: boolean;
}

const ProfileForm = ({ edit }: IProps): JSX.Element => {
  const { profileDetails } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileData>();

  return (
    <>
      <div className="form-entry">
        <label className="form-label">
          First name
          {errors.firstName && (
            <span className="notification-red">* Missing First name</span>
          )}
        </label>
        <input
          className={classNames(
            "form-input",
            edit && "border border-gray-200 shadow",
            !edit && "border border-transparent"
          )}
          id="first_name"
          value={firstName || "Jane"}
          type="text"
          {...register("firstName", { required: false })}
          placeholder="Jane"
          onChange={(e) => setFirstName(e.target.value)}
          disabled={!edit}
        />
      </div>
      <div className="form-entry">
        <label className="form-label">
          Last name
          {errors.firstName && (
            <span className="notification-red">* Missing Last name</span>
          )}
        </label>
        <input
          className={classNames(
            "form-input",
            edit && "border border-gray-200 shadow",
            !edit && "border border-transparent"
          )}
          id="last_name"
          value={lastName || "Doe"}
          type="text"
          {...register("lastName", { required: false })}
          placeholder="Doe"
          onChange={(e) => setLastName(e.target.value)}
          disabled={!edit}
        />
      </div>
      <div className="form-entry">
        <label className="form-label">Company name</label>
        <input
          className={classNames(
            "form-input",
            edit && "border border-gray-200 shadow",
            !edit && "border border-transparent"
          )}
          id="company_name"
          value={companyName || "ACME Industries LTD"}
          type="text"
          {...register("companyName", { required: false })}
          placeholder="ACME Industries LTD"
          onChange={(e) => setCompanyName(e.target.value)}
          disabled={!edit}
        />
      </div>
    </>
  );
};

export default ProfileForm;
