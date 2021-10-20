import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config"; // Default Seo configuration options
import "../styles/global.css";
import Layout from "../components/Layout";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Header />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
