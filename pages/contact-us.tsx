import Contact from "../components/elements/Contact";
import { contactData } from "../test/__mocks__/fakeData";

const ContactUs = (): JSX.Element => {
  return (
    <>
      <main>
        <h1>Contact Us</h1>
        <Contact contact={contactData} />
      </main>
    </>
  );
};

export default ContactUs;
