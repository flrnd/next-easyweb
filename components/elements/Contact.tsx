import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import classNames from "classnames";
import { IContact } from "../../types/interfaces";
import { Heading, Paragraph } from "../typography";
import ContactItem from "./ContactItem";

interface IProps {
  title: string;
  description: string;
  size?: string;
  contactData: IContact;
}

const Contact = ({
  title,
  description,
  size,
  contactData,
}: IProps): JSX.Element => {
  return (
    <>
      <Heading level={2}>{title}</Heading>
      <Paragraph size={size}>{description}</Paragraph>
      <ul className={classNames("p-2", size)}>
        <ContactItem
          title="Horarios"
          icon={<ClockIcon />}
          value={contactData.hours}
        />
        <ContactItem
          title="Dirección"
          icon={<LocationMarkerIcon />}
          value={contactData.address}
        />
        <ContactItem
          title="Teléfono"
          icon={<PhoneIcon />}
          value={contactData.phone}
        />
        <ContactItem
          title="Correo"
          icon={<MailIcon />}
          value={contactData.email}
        />
      </ul>
    </>
  );
};

export default Contact;
