import { companySocial, logotype } from "../../__mocks__/fakeData";
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
          <div className="footer-section justify-items-center md:justify-items-start">
            <div className="flex flex-col items-center lg:items-start">
              <Logo
                src={logotype.src}
                width={logotype.dimensions.width}
                height={logotype.dimensions.height}
              />
              <div className="mt-2 ml-4">
                <SocialIconList
                  items={companySocial}
                  justify="left"
                  margin="mr-3"
                />
              </div>
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
