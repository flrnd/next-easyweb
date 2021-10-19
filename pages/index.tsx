import { NextSeo } from "next-seo";
import { Flex } from "@chakra-ui/react";

export const Index = (): JSX.Element => (
  <>
    <NextSeo title="This is a title" description="this is a description" />
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <h1>Hello there</h1>
    </Flex>
  </>
);

export default Index;
