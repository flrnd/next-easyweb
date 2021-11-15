import Contact from "../components/elements/Contact";
import { Container } from "../components/layout";
import { contactDataList } from "../test/__mocks__/fakeData";

const ContactUs = (): JSX.Element => {
  return (
    <>
      <main>
        <Container size="max-w-lg" margin="mx-5">
          <Contact
            title="Contacto"
            text="Para cualquier duda no dude en contactar con nosotros"
            size="medium"
            list={contactDataList}
          />
        </Container>
      </main>
    </>
  );
};

export default ContactUs;
