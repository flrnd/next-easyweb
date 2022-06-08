import { useRouter } from "next/router";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Card, Logo } from "../../components/elements";
import LoginForm from "../../components/form/LoginForm";
import { Container } from "../../components/layout";
import { Heading } from "../../components/typography";
import { IFormData, IMessage, SignUpOptions } from "../../lib/types";
import { User } from "@supabase/gotrue-js";
import { validatePasswordStrength } from "../../lib/util";
import { logotype } from "../../__mocks__/fakeData/data";
import { signUpUser } from "../../lib/features/User";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";

const SignUp = (): JSX.Element => {
  const [newUser, setNewUser] = useState<User | null>(null);
  const [message, setMessage] = useState<IMessage>({ type: "", content: "" });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const onSubmit = useCallback(async (data: IFormData) => {
    const passwordStrength = validatePasswordStrength(data.password);

    if (passwordStrength.validation) {
      const options: SignUpOptions = {
        email: data.username,
        password: data.password,
      };

      const resultAction = await dispatch(signUpUser(options));
      if (signUpUser.fulfilled.match(resultAction)) {
        setNewUser(resultAction.payload.user);
      }
    } else {
      setMessage({
        type: "error",
        content: `Password error: ${passwordStrength.errors.join(", ")}`,
      });
    }
  }, []);

  useEffect(() => {
    newUser && router.replace("/welcome");
  }, [newUser]);

  useEffect(() => {
    user && router.replace("/dashboard/profile");
  }, [user]);

  if (!user) {
    return (
      <>
        <Container>
          <Card
            padding="px-4 pt-8"
            shadow="shadow-none"
            rounded="rounded-none"
            margin="mx-auto"
            height="h-screen"
          >
            <>
              <Link href="/" passHref>
                <a>
                  <Logo
                    responsive={false}
                    boxWidth="w-auto"
                    margin="mx-auto"
                    padding="p-5"
                    src={logotype.src}
                    width={logotype.dimensions.width}
                    height={logotype.dimensions.height}
                  />
                </a>
              </Link>
            </>
            <div className="mt-8">
              <Heading level={3} margin="mb-2" size="normal">
                Sign up form
              </Heading>
              <p className="mt-2 text-sm">
                Enter a valid email address as username and a password.
              </p>
            </div>
            {message.type === "error" && (
              <div
                id="error"
                className="mt-8 text-red-600 border border-red-600 p-4"
              >
                {message.content}
              </div>
            )}
            {message.type === "note" && (
              <div
                id="note"
                className="mt-8 text-green-600 border border-green-600 p-4"
              >
                {message.content}
              </div>
            )}
            <div className="mt-8">
              <LoginForm onSubmit={onSubmit} submitLabel="Sign Up" />
            </div>
            <div className="flex items-center justify-between">
              <Link href="/forgot-password" passHref>
                <a className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800">
                  Forgot your Password?
                </a>
              </Link>
              <span className="text-indigo-500">|</span>
              <Link href="/signin" passHref>
                <a className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800">
                  Sign In
                </a>
              </Link>
            </div>
          </Card>
        </Container>
      </>
    );
  }

  return <></>;
};

export default SignUp;
