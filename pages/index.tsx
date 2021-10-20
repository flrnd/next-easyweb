import { NextSeo } from "next-seo";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <main className="bg-red-100 py-6">
      <h1>Hello there</h1>
      <p>this is the main section</p>
    </main>
  </>
);

export default Index;
