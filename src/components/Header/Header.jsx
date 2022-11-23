import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
