import { useUser } from "../lib/util/useUser";
import Example from "./example";

export default function Index(): JSX.Element {
  const { session } = useUser();
  return (
    <>
      {session && session.user.email}
      <Example />
    </>
  );
}
