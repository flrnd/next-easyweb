import { Card } from "../../components/elements";
import { Container } from "../../components/layout";

const Login = (): JSX.Element => {
  return (
    <>
      <Container>
        <Card
          shadow="shadow-md"
          padding="p-4"
          margin="mx-auto"
          rounded="rounded-md"
        >
          <h1>Login</h1>
        </Card>
      </Container>
    </>
  );
};

export default Login;
