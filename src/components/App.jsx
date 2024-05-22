import { useSelector } from "react-redux";
import { selectContact } from "../redux/contactsSlice";
import { selectFilter } from "../redux/filtersSlice";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);

  const listFiltering = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={listFiltering} />
    </>
  );
}

export default App;
