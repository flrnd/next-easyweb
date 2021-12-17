import { useForm } from "react-hook-form";
import { IChangePasswordFormData } from "../../../lib/types";
import { Button } from "../../controls";

interface IProps {
  onSubmit: (data: IChangePasswordFormData) => void;
}

const ChangePasswordForm = ({ onSubmit }: IProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePasswordFormData>();

  return (
    <form className="mt-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="form-label">
          Current password
          {errors.currentPassword && (
            <span className="notification-red">* Empty</span>
          )}
        </label>
        <input
          className="form-input border"
          id="currentPassword"
          type="password"
          {...register("currentPassword", { required: true })}
          placeholder="******************"
        />
      </div>
      <div className="mb-6">
        <label className="form-label">
          New Password
          {errors.newPassword && (
            <span className="notification-red">* Empty</span>
          )}
        </label>
        <input
          className="form-input border"
          id="newPassword"
          type="password"
          {...register("newPassword", { required: true })}
          placeholder="******************"
        />
      </div>
      <div className="mb-6">
        <Button
          textColor="text-white"
          background="bg-indigo-600"
          rounded="rounded-sm"
          shadow="shadow-none"
          className=""
          hoverBg="bg-indigo-700"
          label="Change password"
          type="submit"
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
