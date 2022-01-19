import { NextSeo } from "next-seo";
import { DefaultLayout } from "../../components/layout";

const Services = (): JSX.Element => {
  return (
    <>
      <DefaultLayout>
        <NextSeo title="This is a title" description="this is a description" />
        <main className="py-6">
          <h1>Services</h1>
        </main>
      </DefaultLayout>
    </>
  );
};

export default Services;
