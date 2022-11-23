import classes from "./ServicesCard.module.css";

const ServicesCard = (props) => {
  const servicesCards = props.servicesCards;
  return (
    <div className={classes.services}>
      {servicesCards.map((servicesCard) => (
        <div className={classes.servicesCard} key={servicesCard.id}>
          <div className={classes.servicesImg}>
            <img src={servicesCard.image} />
          </div>
          <div className={classes.servicesText}>
            <h2>{servicesCard.title}</h2>
            <p>{servicesCard.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesCard;
