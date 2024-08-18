import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component, redirectTo }) => {
  const isLoggedin = useSelector(selectIsLoggedIn);
  return <div>{isLoggedin ? component : <Navigate to={redirectTo} />}</div>;
};
export default PrivateRoute;
