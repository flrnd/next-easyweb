import Image from "next/image";
import { NextSeo } from "next-seo";
import Content from "../components/section/Content";
import Feature from "../components/section/Feature";
import Hero from "../components/section/Hero";
import placeholder from "../public/1920x1280.png";
import Button from "../components/elements/Button";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <main className="bg-red-100 py-6">
      <Hero
        valueProposition="Data to enrich your online business"
        valueDescription="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        cta={
          <>
            <Button
              bgColor="bg-indigo-600"
              textColor="text-white"
              hoverBg="bg-indigo-700"
              path="/"
              text="Get Started"
            />
            <Button
              bgColor="bg-indigo-100"
              textColor="text-indigo-700"
              hoverBg="bg-indigo-200"
              path="#"
              text="Live Demo"
            />
          </>
        }
      />
      <Hero
        valueProposition="Data to enrich your online business"
        valueDescription="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
        image={<Image src={placeholder} alt="placeholder" />}
      />
      <Feature
        image={
          <Image
            src={placeholder}
            height={1280}
            width={1920}
            alt="Placeholder image"
            placeholder="empty"
          />
        }
      >
        <Content
          title="This is a title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="more info"
          buttonURL="/more_info"
        />
      </Feature>
      <Feature
        isImageLeft={true}
        image={
          <Image
            src={placeholder}
            height={1280}
            width={1920}
            alt="Placeholder image"
            placeholder="empty"
          />
        }
      >
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
