import { NextSeo } from "next-seo";
import Content from "../components/section/Content";
import Feature from "../components/section/Feature";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <main className="bg-red-100 py-6">
      <Feature media="feature">
        <Content
          title="This is a title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="more info"
          buttonURL="/more_info"
        />
      </Feature>
      <Feature isMediaLeft={true} media="feature">
        <Content
          title="This is a title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="more info"
          buttonURL="/more_info"
        />
      </Feature>
    </main>
  </>
);

export default Index;
