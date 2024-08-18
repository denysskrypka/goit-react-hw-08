import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice.js";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contact_list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
