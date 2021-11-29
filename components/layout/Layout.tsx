import { DefaultSeo } from "next-seo";
import { ReactNode } from "react";
import { Footer, Header } from ".";
import SEO from "../../next-seo.config";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="layout">
      <DefaultSeo {...SEO} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
