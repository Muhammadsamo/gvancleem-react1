import { useState } from "react";
import ProductsCard from "./components/Products Card/ProductsCard";
import productImg from "./assets/Rectangle90.png";
import parkingImg from "./assets/parking1.png";
import truckImg from "./assets/delivery-truck1.png";
import interiorDesignImg from "./assets/interior-design1.png";
import coupleImg from "./assets/couple1.png";
import ServicesCard from "./components/Services/ServicesCard";

const Home = () => {
  const [productCards] = useState([
    { image: productImg, title: "Assises", id: 1 },
    { image: productImg, title: "Meubles", id: 2 },
    { image: productImg, title: "Luminaires", id: 3 },
    { image: productImg, title: "Décoration", id: 4 },
    { image: productImg, title: "Art de la Table", id: 5 },
    { image: productImg, title: "Décoration", id: 6 },
  ]);

  const [servicesCards] = useState([
    {
      image: parkingImg,
      title: "Stationnement",
      details:
        "Nous avons un service de liste de mariage en boutique qui vous permet de choisir des articles en stock ou sur commande selon vos besoins ou vos envies. Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.",
      id: 1,
    },
    {
      image: truckImg,
      title: "Livraison",
      details:
        "Nous avons un service de liste de mariage en boutique qui vous permet de choisir des articles en stock ou sur commande selon vos besoins ou vos envies. Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.",
      id: 2,
    },
    {
      image: interiorDesignImg,
      title: "Conseils Décoration ",
      details:
        "Nous avons un service de liste de mariage en boutique qui vous permet de choisir des articles en stock ou sur commande selon vos besoins ou vos envies. Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.",
      id: 3,
    },
    {
      image: coupleImg,
      title: "Listes de Mariage",
      details:
        "Nous avons un service de liste de mariage en boutique qui vous permet de choisir des articles en stock ou sur commande selon vos besoins ou vos envies. Vos invités ayant le choix de venir en boutique ou effectuer le cadeau à distance.",
      id: 4,
    },
  ]);

  return (
    <div className="Home">
      <div className="welcome">
        <h1 className="heading welcomeHeading">
          Votre Boutique de <br /> Meubles et Décoration
        </h1>
        <h2 className="welcomeHeading2">en Guadeloupe, à Jarry</h2>
        <button className="button contactButton">Coordonnées & Horaires</button>
      </div>

      <div className="products-section">
        <h1 className="sectionHeading">Gamme de Produits</h1>
        <p>
          Bienvenue chez Comptoir Nature, une boutique entièrement dédiée au
          style balinais et à l’art javanais.
        </p>
        <ProductsCard productCards={productCards} />
        <p>Objets de décoration, idées cadeaux et beaucoup plus...</p>
      </div>
      <div className="services">
        <h1 className="sectionHeading">Services</h1>
        <p>
          Bienvenue chez Comptoir Nature, une boutique entièrement dédiée au
          style balinais et à l’art javanais.
        </p>
        <ServicesCard servicesCards={servicesCards} />
        <h2>Modes de Paiement</h2>
      </div>
    </div>
  );
};

export default Home;
