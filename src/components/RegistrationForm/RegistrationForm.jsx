import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import { toast, Toaster } from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success("Registration success!!"))
      .catch(() => toast.error("Error"));
    action.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <label htmlFor="password" name="password">
          Password
        </label>
        <Field type="text" name="password" />
        <button type="submit">Sign up</button>
        <Toaster />
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
