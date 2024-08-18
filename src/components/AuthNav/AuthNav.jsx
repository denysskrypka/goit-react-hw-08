import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.container}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/Login">Login</NavLink>
    </div>
  );
};

export default AuthNav;
