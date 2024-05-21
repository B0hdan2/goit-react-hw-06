import { useSelector } from "react-redux";
import { getContacts } from "../../redux/selectors.js";

import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(getContacts);

  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <li className={s.item} key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
