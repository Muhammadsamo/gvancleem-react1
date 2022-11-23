import classes from "./ProductsCard.module.css";

const ProductsCard = (props) => {
  const productCards = props.productCards;
  return (
    <div className={classes.products}>
      {productCards.map((productCard) => (
        <div className={classes.productsCard} key={productCard.id}>
          <img src={productCard.image} />
          <h2>{productCard.title}</h2>
        </div>
      ))}
      ;
    </div>
  );
};

export default ProductsCard;
