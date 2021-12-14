import { DefaultSeo } from "next-seo";
import { ReactNode } from "react";

import SEO from "../../../next-seo.config";

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props): JSX.Element => {
  return (
    <div className="layout">
      <DefaultSeo {...SEO} />
      {children}
    </div>
  );
};

export default DefaultLayout;