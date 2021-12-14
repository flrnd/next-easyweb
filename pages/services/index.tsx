import { NextSeo } from "next-seo";
import { DefaultLayout } from "../../components/layout";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const Services = (): JSX.Element => {
  return (
    <>
      <DefaultLayout>
        <NextSeo title="This is a title" description="this is a description" />
        <Header />
        <main className="py-6">
          <h1>Services</h1>
        </main>
        <Footer />
      </DefaultLayout>
    </>
  );
};

export default Services;
