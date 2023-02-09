import Card from "components/elements/Card";
import Logo from "components/elements/Logo";
import LoginForm from "components/form/LoginForm";
import Container from "components/layout/Container";
import Heading from "components/typography/Heading";
import { logotype } from "fakeData/data";
import { fetchUserProfile, signInUser } from "lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "lib/hooks";
import { IFormData, IMessage, SignInOptions } from "lib/types";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const SignIn = (): JSX.Element => {
  const [message, setMessage] = useState<IMessage>({ type: "", content: "" });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const onSubmit = useCallback(
    async (data: IFormData) => {
      const options: SignInOptions = {
        email: data.username,
        password: data.password,
      };

      const resultAction = await dispatch(signInUser(options));

      if (signInUser.fulfilled.match(resultAction)) {
        dispatch(fetchUserProfile(resultAction.payload.user.id));
      } else {
        setMessage({ type: "error", content: resultAction.payload.message });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    user && router.replace("/dashboard/profile");
  }, [router, user]);

  if (!user) {
    return (
      <Container>
        <Card
          padding="px-4 pt-8"
          shadow="shadow-none"
          rounded="rounded-none"
          margin="mx-auto"
          height="h-screen"
        >
          <Link href="/">
            <Logo
              responsive={false}
              boxWidth="w-auto"
              margin="mx-auto"
              padding="p-5"
              src={logotype.src}
              width={logotype.dimensions.width}
              height={logotype.dimensions.height}
            />
          </Link>
          <div className="mt-8">
            <Heading level={3} margin="mb-2" size="normal">
              Welcome back
            </Heading>
            <p className="mt-2 text-sm">
              Sign in with your user name and password.
            </p>
          </div>
          {message.type === "error" && (
            <div
              id="error"
              className="mt-8 text-red-500 border border-red-600 p-4"
            >
              {message.content}
            </div>
          )}
          <div className="mt-8">
            <LoginForm onSubmit={onSubmit} submitLabel="Sign In" />
          </div>
          <div className="flex items-center">
            Don&apos;t have an account yet?&nbsp;
            <Link
              href="/signup"
              className="inline-block align-baseline text-indigo-500 hover:text-indigo-800"
            >
              Register now
            </Link>
          </div>
        </Card>
      </Container>
    );
  }

  return <></>;
};

export default SignIn;
