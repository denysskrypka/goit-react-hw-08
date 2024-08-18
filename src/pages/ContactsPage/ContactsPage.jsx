import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading } from "../../redux/contacts/selectors";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { Oval } from "react-loader-spinner";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Your Contacts</h1>
      {isLoading && <Oval />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
