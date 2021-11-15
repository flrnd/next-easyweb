import { NavigationList } from "../navigation";

const list = ["services", "about", "contact us"];
const hours = ["Mon-Fri: 9am-5pm", "Sat: 10am-2pm", "Sun: Closed"];
const contact = ["Email: hello@example.com", "Phone: 123-456-789"];

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="flex flex-col md:flex-row md:justify-between container mx-auto py-12">
        <div id="logo" className="bg-yellow-300 p-5 w-1/4 mb-3 md:mb-0">
          logo
        </div>
        <div className="flex flex-col md:flex-row md:w-1/2">
          <div id="nav" className="bg-green-400 p-5 mb-3 md:mb-0">
            <div className="text-2xl mb-2">Enlaces</div>
            <NavigationList isVertical={true} list={list} />
          </div>
          <div className="bg-blue-400 p-5 mb-3 md:mb-0">
            <div className="text-2xl mb-2">Horario</div>
            <div>
              {hours.map((h) => (
                <div key={h}>{h}</div>
              ))}
            </div>
          </div>
          <div className="bg-indigo-500 p-5 mb-3 md:mb-0">
            <div className="text-2xl mb-2">Contacto</div>
            <div>
              {contact.map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-red-500 text-center py-2">
        copyright(c) 2022 marca privacidad
      </div>
    </footer>
  );
};

export default Footer;
