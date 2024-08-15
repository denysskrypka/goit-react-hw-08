import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(30, "Too long")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short")
    .max(30, "Too long")
    .required("Required!"),
});

export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    values.id = nanoid(4);
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        id: "",
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.form}>
        <label htmlFor={`${id}-name`}>Name</label>
        <Field
          className={css.form_input}
          type="text"
          name="name"
          id={`${id}-name`}
        />
        <ErrorMessage
          className={css.form_message_error}
          name="name"
          component="span"
        />

        <label htmlFor={`${id}-number`}>Number</label>
        <Field
          className={css.form_input}
          type="text"
          name="number"
          id={`${id}-number`}
        />
        <ErrorMessage
          className={css.form_message_error}
          name="number"
          component="span"
        />
        <button className={css.form_button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
