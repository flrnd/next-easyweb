import Link from "next/link";
import { Card } from "../../components/elements";
import PartyFaceEmoji from "../../components/icons/emoji/PartyFace";
import { Container } from "../../components/layout";
import { Heading, Paragraph } from "../../components/typography";
import { useUser } from "../../lib/store/hooks/useUser";

const Welcome = (): JSX.Element => {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <Container>
          <Card
            padding="px-4 pt-8"
            width="w-full"
            shadow="shadow-none"
            rounded="rounded-none"
            margin="mx-auto mt-20"
            height="h-screen"
          >
            <div className="text-center">
              <div className="w-20 mx-auto mt-8">
                <PartyFaceEmoji />
              </div>
              <Heading level={3} margin="mb-2" size="normal">
                Welcome to Vitary!{" "}
              </Heading>
              <Paragraph margin="mb-2" size="small">
                We sent you an email with a link to verify your account. Please,
                click on the link to verify your email address.
              </Paragraph>
            </div>

            <div className="flex items-center justify-between w-48 mx-auto mt-6">
              <Link href="/" passHref>
                <a className="inline-block align-baseline text-sm text-indigo-500 hover:text-indigo-800">
                  Go back to home
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

export default Welcome;
