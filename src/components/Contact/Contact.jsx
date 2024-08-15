import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.container}>
      <div className={css.contact_name}>
        <IoPerson className={css.contact_icon} size={16} />
        <span>{name}</span>
      </div>

      <div className={css.contact_phone}>
        <FaPhoneAlt className={css.phone_icon} size={16} />
        <span>{number}</span>
      </div>

      <button className={css.delete_button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
