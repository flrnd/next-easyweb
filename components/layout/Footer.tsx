import Logo from "../elements/Logo";
import { NavigationList } from "../navigation";

const list = ["services", "about", "contact us"];
const hours = ["Mon-Fri: 9am-5pm", "Sat: 10am-2pm", "Sun: Closed"];
const contact = ["Email: hello@example.com", "Phone: 123-456-789"];

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row md:justify-between py-12">
        <div id="logo" className="footer-section logo">
          <Logo
            src="/assets/pictures/brand/vitary-logo.png"
            width={237}
            height={64}
          />
        </div>
        <div className="flex flex-col md:flex-row md:w-1/2 md:justify-end">
          <div id="nav" className="footer-section">
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
      <div className=" bg-red-800 text-center text-white py-2">
        copyright(c) 2022 marca privacidad
      </div>
    </footer>
  );
};

export default Footer;
