import { useDispatch } from "react-redux";
import { Field, Formik, Form } from "formik";
import { login } from "../../redux/auth/operations";
import { toast, Toaster } from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    dispatch(login(values))
      .unwrap()
      .then(() => toast.success("Authorization successful"))
      .catch((error) => toast.error(error));
    action.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <label htmlFor="password">Password</label>
          <Field type="text" name="password" />
          <button type="submit">Sign In</button>
          <Toaster />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
