import Image from "next/image";
import Contact from "../components/elements/Contact";
import { Container } from "../components/layout";
import { clinicImage, contactDataList } from "../test/__mocks__/fakeData";

const ContactUs = (): JSX.Element => {
  return (
    <>
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
          <Image
            src={clinicImage}
            width={1920}
            height={1280}
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </main>
    </>
  );
};

export default ContactUs;
