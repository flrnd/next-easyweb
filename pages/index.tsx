import Image from "next/image";
import { NextSeo } from "next-seo";
import {
  Feature,
  FeatureContent,
  Hero,
  ServiceList,
} from "../components/elements";
import placeholder from "../public/1920x1280.png";
import Button from "../components/Button";
import { placeholderData, serviceList } from "../test/__mocks__/fakeData";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <main className="py-6">
      <Hero
        heading={placeholderData.heading}
        text={placeholderData.text}
        cta={
          <>
            <Button
              bgColor="bg-indigo-600"
              textColor="text-white"
              hoverBg="bg-indigo-700"
              path="/"
              text={placeholderData.cta}
            />
            <Button
              bgColor="bg-indigo-100"
              textColor="text-indigo-700"
              hoverBg="bg-indigo-200"
              path="#"
              text={placeholderData.cta2}
            />
          </>
        }
      />
      <Hero
        heading={placeholderData.heading}
        text={placeholderData.text}
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
          title={placeholderData.featureTitle}
          text={placeholderData.featureText}
          buttonText={placeholderData.buttonText}
          buttonURL="#"
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
          title={placeholderData.featureTitle}
          text={placeholderData.featureText}
          buttonText={placeholderData.buttonText}
          buttonURL="#"
        />
      </Feature>

      <ServiceList services={serviceList} />
    </main>
  </>
);

export default Index;
