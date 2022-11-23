import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img src="./src/assets/logo.svg" alt="" className={classes.logo} />
    </div>
  );
};

export default Logo;
