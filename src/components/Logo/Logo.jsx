import classes from "./Logo.module.css";
import LogoImg from "../../assets/logo.svg";

const Logo = () => {
  return (
    <div>
      <img src={LogoImg} alt="" className={classes.logo} />
    </div>
  );
};

export default Logo;
