import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, Logo } from "../../components/elements";
import LoginForm from "../../components/form/LoginForm";
import { Container } from "../../components/layout";
import { Heading } from "../../components/typography";
import { useUser } from "../../lib/hooks/useUser";
import { IFormData, IMessage } from "../../lib/types";
import { logotype } from "../../__mocks__/fakeData/data";

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
              <Link href="/signup" passHref>
                <a className="inline-block align-baseline text-indigo-500 hover:text-indigo-800">
                  Register now
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
