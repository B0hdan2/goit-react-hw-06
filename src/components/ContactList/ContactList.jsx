

import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";
import { selectContact } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

function ContactList() {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectNameFilter);

  const listFiltering = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul className={s.list}>
      {listFiltering.map((contact) => (
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
