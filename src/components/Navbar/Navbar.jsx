import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.mainNav}>
      <ul className={classes.navList}>
        <li className={classes.navListItem}>
          <a href="/">Accueil</a>
        </li>
        <li className={classes.navListItem}>
          <a href="/">Produits</a>
        </li>
        <li className={classes.navListItem}>
          <a href="/">Services</a>
        </li>
        <li className={classes.navListItem}>
          <a href="/">Actualités</a>
        </li>
        <li className={classes.navListItem}>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
