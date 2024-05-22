import { useSelector } from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { getContacts, selectsFilter } from "../redux/selectors";

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(selectsFilter);

  // const [contacts, setContacts] = useState(() => {
  //   try {
  //     const savedContacts = JSON.parse(window.localStorage.getItem("User"));
  //     if (Array.isArray(savedContacts)) {
  //       return savedContacts;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   return initialContacts;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("User", JSON.stringify([...contacts]));
  // }, [contacts]);

  // const [filter, setFilter] = useState("");

  // const addUser = (user) => {
  //   setContacts((prev) => [...prev, user]);
  // };

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
