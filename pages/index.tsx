import { NextSeo } from "next-seo";
import Content from "../components/section/Content";
import Feature from "../components/section/Feature";
import Hero from "../components/section/Hero";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <main className="bg-red-100 py-6">
      <Hero
        valueProposition="Data to enrich your online business"
        valueDescription="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
      />
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
