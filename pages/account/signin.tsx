import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Logo } from "../../components/elements";
import LoginForm from "../../components/form/LoginForm";
import { Container } from "../../components/layout";
import { Heading } from "../../components/typography";
import { useUser } from "../../lib/store/hooks/useUser";
import { IFormData, IMessage } from "../../types/interfaces";

const SignIn = (): JSX.Element => {
  const [message, setMessage] = useState<IMessage>({ type: "", content: "" });
  const { user, signIn } = useUser();
  const router = useRouter();

  const onSubmit = async (data: IFormData) => {
    const { error } = await signIn({
      email: data.username,
      password: data.password,
    });

    if (error) {
      setMessage({ type: "error", content: error.message });
    }
  };

  useEffect(() => {
    user && router.replace("/user/profile");
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
                    boxWidth="w-40"
                    margin="mx-auto"
                    padding="py-2"
                    src="/assets/pictures/brand/vitary-logo.png"
                    width={237}
                    height={64}
                  />
                </a>
              </Link>
            </>
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
            <div className="flex items-center justify-between">
              <Link href="/account/forgot-password" passHref>
                <a className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800">
                  Forgot your Password?
                </a>
              </Link>
              <span className="text-indigo-500">|</span>
              <Link href="/account/register" passHref>
                <a className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800">
                  Sign Up
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

export default SignIn;
