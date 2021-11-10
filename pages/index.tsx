import Image from "next/image";
import { NextSeo } from "next-seo";
import { SplitSide, Hero, ServiceList } from "../components/elements";
import placeholder from "../public/1920x1280.png";
import Button from "../components/controls/Button";
import { placeholderData, serviceList } from "../test/__mocks__/fakeData";
import { Heading, Paragraph } from "../components/typography";
import { Anchor } from "../components/controls";

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
              background="bg-indigo-600"
              textColor="text-white"
              hoverBg="bg-indigo-700"
              href="/"
              label={placeholderData.cta}
            />
            <Button
              background="bg-indigo-100"
              textColor="text-indigo-700"
              hoverBg="bg-indigo-200"
              href="#"
              label={placeholderData.cta2}
            />
          </>
        }
      />
      <Hero
        heading={placeholderData.heading}
        text={placeholderData.text}
        image={<Image src={placeholder} alt="placeholder" />}
      />
      <SplitSide
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
        <Heading
          a11yTitle={placeholderData.featureTitle}
          level={2}
          size="large"
          weight="font-semibild"
        >
          {placeholderData.heading}
        </Heading>
        <Paragraph margin="mb-2" textAlign="text-center lg:text-left">
          {placeholderData.text}
        </Paragraph>
        <Paragraph margin="mb-6 md:mb-8" textAlign="text-center lg:text-left">
          {placeholderData.text}
        </Paragraph>
        <Anchor
          href="/some-link"
          size="small"
          weight="font-semibold"
          label={placeholderData.buttonText}
        />
      </SplitSide>

      <ServiceList services={serviceList} />
    </main>
  </>
);

export default Index;
