import Contact from "components/elements/Contact";
import Container from "components/layout/Container";
import DefaultLayout from "components/layout/DefaultLayout";
import { clinicImage, contactDataList } from "fakeData/data";
import Image from "next/image";

const ContactUs = (): JSX.Element => {
  return (
    <DefaultLayout>
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
          <Image src={clinicImage} alt="" />
        </div>
      </main>
    </DefaultLayout>
  );
};

export default ContactUs;
