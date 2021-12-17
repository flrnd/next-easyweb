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
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Current password
          {errors.currentPassword && (
            <span className="text-sm text-red-500 font-normal italic ml-4">
              * You must enter your current password
            </span>
          )}
        </label>
        <input
          className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-grey-darker"
          id="currentPassword"
          type="password"
          {...register("currentPassword", { required: true })}
          placeholder="******************"
        />
      </div>
      <div className="mb-6">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          New Password
          {errors.newPassword && (
            <span className="text-sm text-red-500 font-normal italic ml-4">
              * You must enter a new password
            </span>
          )}
        </label>
        <input
          className="shadow appearance-none border border-red rounded-sm w-full py-2 px-3 text-grey-darker mb-3"
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
          className="w-full"
          hoverBg="bg-indigo-700"
          label="Change password"
          type="submit"
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
