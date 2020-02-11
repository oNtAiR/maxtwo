import React from "react";
import Logo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

const logo = () => (
  <div className={classes.Logo}>
    <img src={Logo} alt="Burger drawing"></img>
  </div>
);

export default logo;