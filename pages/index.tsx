import Image from "next/image";
import { NextSeo } from "next-seo";
import { SplitSide, Hero, ServiceList, Card } from "../components/elements";
import { Button } from "../components/controls";
import {
  placeholderData,
  serviceList,
  teamMembers,
  placeholderImage,
} from "../test/__mocks__/fakeData";
import { Heading, Paragraph } from "../components/typography";
import { Anchor } from "../components/controls";
import { Container, Grid } from "../components/layout";
import { HomeIcon } from "@heroicons/react/outline";
import { Member, SocialIconList } from "../components/elements";

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
        image={
          <Image src={placeholderImage} alt="placeholder" placeholder="blur" />
        }
      />
      <SplitSide
        isImageLeft={true}
        image={
          <Image
            src={placeholderImage}
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
      <Container>
        <Card icon={<HomeIcon />}>
          <Heading level={3} size="small" margin="my-4" weight="font-semibold">
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
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
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
                  social={<SocialIconList items={member.social} />}
                />
              ))}
            </Grid>
          </div>
        </div>
      </Container>
    </main>
  </>
);

export default Index;
