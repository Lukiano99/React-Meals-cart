import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} /> 
      </header>
      <div className={classes["main-image"]}>
        <img
          src={
            "https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?cs=srgb&dl=pexels-engin-akyurt-2725744.jpg&fm=jpg"
          }
          alt="A table full of food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
