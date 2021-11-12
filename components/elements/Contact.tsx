import { IContact } from "../../types/interfaces";

interface IProps {
  contact: IContact;
}

const Contact = ({ contact }: IProps): JSX.Element => {
  return (
    <div>
      <div>{contact.address}</div>
      <div>{contact.hours}</div>
      <div>{contact.phone}</div>
      <div>{contact.email}</div>
    </div>
  );
};

export default Contact;
