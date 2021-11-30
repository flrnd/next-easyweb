import Link from "next/link";
import { useState } from "react";
import { Card, Logo } from "../../components/elements";
import LoginForm from "../../components/form/LoginForm";
import { Container } from "../../components/layout";
import { Heading } from "../../components/typography";
import { userService } from "../../services/user.service";
import { IFormData } from "../../types/interfaces";

const Login = (): JSX.Element => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(0);
  const [token, setToken] = useState("");

  const onSubmit = async (data: IFormData) => {
    const loginResponse = await userService.login(data.username, data.password);
    setMessage(loginResponse.message);
    setStatus(loginResponse.status);
    setToken(loginResponse.token);
  };

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
          <div className="mt-8">
            <LoginForm onSubmit={onSubmit} />
          </div>
        </Card>
        {message}
        {status}
        {token}
      </Container>
    </>
  );
};

export default Login;
