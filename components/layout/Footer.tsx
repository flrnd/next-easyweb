import { companySocial } from "../../test/__mocks__/fakeData";
import { SocialIconList } from "../elements";
import Logo from "../elements/Logo";
import { NavigationList } from "../navigation";

const list = ["services", "about", "contact us"];
const hours = ["Mon-Fri: 9am-5pm", "Sat: 10am-2pm", "Sun: Closed"];
const contact = ["Email: hello@example.com", "Phone: 123-456-789"];
const year = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container py-16 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div id="logo" className="footer-section flex flex-col">
            <Logo
              src="/assets/pictures/brand/vitary-logo.png"
              width={237}
              height={64}
            />
            <div className="mt-2 w-full ml-4">
              <SocialIconList
                items={companySocial}
                justify="left"
                margin="mr-3"
              />
            </div>
          </div>

          <div className="footer-section">
            <div className="text-2xl mb-2">Enlaces</div>
            <NavigationList isVertical={true} list={list} />
          </div>
          <div className="footer-section">
            <div className="text-2xl mb-2">Horario</div>
            <div>
              {hours.map((h) => (
                <div key={h}>{h}</div>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <div className="text-2xl mb-2">Contacto</div>
            <div>
              {contact.map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-indigo-800 text-center text-white py-2">
        {year} &copy; Vitary. All rights reserved. Designed by s&infin;mos
        digital
      </div>
    </footer>
  );
};

export default Footer;
