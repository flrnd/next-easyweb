import { useUser } from "../../lib/util/useUser";

const Account = (): JSX.Element => {
  const { user } = useUser();
  return (
    <div>
      <h1>Account</h1>
      {user.email}
    </div>
  );
};

export default Account;
