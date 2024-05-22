import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css";

function ContactList({ contacts }) {
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
