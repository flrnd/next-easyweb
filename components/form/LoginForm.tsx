import { useForm } from "react-hook-form";
import { userService } from "../../services/user.service";
import { Button } from "../controls";

interface FormData {
  username: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const message = userService.login(data.username, data.password);
    alert(message);
  };

  return (
    <form className="mt-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Username
          {errors.username && (
            <span className="text-sm text-red-500 font-normal italic ml-4">
              * Missing username
            </span>
          )}
        </label>
        <input
          className="shadow appearance-none border rounded-sm w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          {...register("username", { required: true })}
          placeholder="john.doe@email.com"
        />
      </div>
      <div className="mb-6">
        <label className="block text-grey-darker text-sm font-bold mb-2">
          Password
          {errors.password && (
            <span className="text-sm text-red-500 font-normal italic ml-4">
              * Missing password
            </span>
          )}
        </label>
        <input
          className="shadow appearance-none border border-red rounded-sm w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          {...register("password", { required: true })}
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
          label="sign in"
          type="submit"
        />
      </div>
      <div className="flex items-center justify-between">
        <a
          className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800"
          href="#"
        >
          Forgot your Username or Password?
        </a>
        <span className="text-indigo-500">|</span>
        <a
          className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800"
          href="#"
        >
          Sign Up
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
