import Image from "next/image";
import { NextSeo } from "next-seo";
import { Feature, FeatureContent, Hero } from "../components/content";
import placeholder from "../public/1920x1280.png";
import Button from "../components/Button";
import ServiceList from "../components/content/ServiceList";
import { services } from "../test/__mocks__/fakeData";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <main className="bg-red-100 py-6">
      <Hero
        heading="Data to enrich your online business"
        text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
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
        heading="Data to enrich your online business"
        text="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
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
        <FeatureContent
          title="This is a title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
        <FeatureContent
          title="This is a title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="more info"
          buttonURL="/more_info"
        />
      </Feature>

      <ServiceList services={services} />
    </main>
  </>
);

export default Index;
