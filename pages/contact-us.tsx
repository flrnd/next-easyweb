import Image from "next/image";
import Contact from "../components/elements/Contact";
import { Container, Layout } from "../components/layout";
import { clinicImage, contactDataList } from "../__mocks__/fakeData";

const ContactUs = (): JSX.Element => {
  return (
    <>
      <Layout>
        <main className="container mx-auto flex flex-col-reverse md:flex-row">
          <Container size="max-w-lg" margin="mx-5">
            <Contact
              title="Contacto"
              text="Para cualquier duda no dude en contactar con nosotros"
              size="medium"
              list={contactDataList}
            />
          </Container>
          <div className="w-full mb-4 md:mb-0">
            <Image src={clinicImage} layout="responsive" objectFit="contain" />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default ContactUs;
