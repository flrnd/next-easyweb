import { NextSeo } from "next-seo";
import { DefaultLayout } from "../../components/layout";

const Pricing = (): JSX.Element => {
  return (
    <DefaultLayout>
      <NextSeo title="This is a title" description="this is a description" />

      <main className="py-6">
        <h1>Pricing</h1>
      </main>
    </DefaultLayout>
  );
};

export default Pricing;
