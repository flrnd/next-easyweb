import Link from "next/link";
import { Card, Logo } from "../../components/elements";
import { Container } from "../../components/layout";
import { Heading } from "../../components/typography";

const Login = (): JSX.Element => {
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
            <p className="mt-2 text-sm">Sign in with your user ID.</p>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Login;
