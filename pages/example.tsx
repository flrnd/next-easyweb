import Image from "next/image";
import { NextSeo } from "next-seo";
import DefaultLayout from "components/layout/DefaultLayout";
import Hero from "components/elements/Hero";
import {
  placeholderData,
  serviceList,
  teamMembers,
  wideImage,
} from "fakeData/data";
import Button from "components/controls/Button";
import ImageWithParagraph from "components/elements/ImageWithParagraph";
import Heading from "components/typography/Heading";
import Paragraph from "components/typography/Paragraph";
import Anchor from "components/controls/Anchor";
import ServiceList from "components/elements/ServiceList";
import Container from "components/layout/Container";
import { HomeIcon } from "@heroicons/react/outline";
import Card from "components/elements/Card";
import Grid from "components/layout/Grid";
import Member from "components/elements/Member";
import SocialIconList from "components/elements/SocialIconList";

const Example = (): JSX.Element => {
  return (
    <DefaultLayout>
      <NextSeo title="This is a title" description="this is a description" />

      <main className="py-6">
        <Hero
          heading={placeholderData.heading}
          text={placeholderData.text}
          image={<Image src={wideImage} alt="placeholder" placeholder="blur" />}
          cta={
            <>
              <Button
                background="bg-indigo-100"
                textColor="text-indigo-700"
                hoverBg="bg-indigo-200"
                href="#"
                label={placeholderData.cta2}
              />
              <Button
                className="disabled:opacity-50"
                background="bg-indigo-100"
                textColor="text-indigo-700"
                hoverBg="bg-indigo-200"
                href="#"
                label="disabled"
                disabled={true}
              />
            </>
          }
        />

        <ImageWithParagraph
          isImageLeft={true}
          image={
            <Image
              src={wideImage}
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
        </ImageWithParagraph>

        <ServiceList services={serviceList} />
        <Container>
          <Card icon={<HomeIcon />}>
            <Heading
              level={3}
              size="small"
              margin="my-4"
              weight="font-semibold"
            >
              This is a card
            </Heading>
            <Paragraph margin="mb-2">{placeholderData.text}</Paragraph>
          </Card>
        </Container>
        <div className="mt-6" />
        <Container>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-2">
              <Heading
                level={2}
                size="large"
                weight="font-semibold"
                margin="mb-4"
              >
                <span className="text-indigo-800">Meet our team</span>
              </Heading>
              <Paragraph margin="mb-6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Paragraph>
            </div>
            <div className="md:w-2/3 p-2">
              <Grid columns={3} gap="gap-3">
                {teamMembers.map((member) => (
                  <Member
                    key={member.name}
                    image={member.image}
                    width="w-full"
                    height="h-64"
                    name={member.name}
                    jobTitle={member.jobTitle}
                    excerpt={member.excerpt}
                    social={
                      <SocialIconList
                        items={member.social}
                        margin="mr-4"
                        justify="left"
                      />
                    }
                  />
                ))}
              </Grid>
            </div>
          </div>
        </Container>
      </main>
    </DefaultLayout>
  );
};

export default Example;
