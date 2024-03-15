import React from "react";
import { Carousel, Card, Divider, Button } from "antd";
import { Link } from "react-router-dom";
import CarouselCoar from "../components/CarouselCoar"

const { Meta } = Card;

const StudentHome = () => {
  const infoCardsData = [
    {
      title: "Producto Destacado",
      description: "Descubre nuestro nuevo producto estrella.",
      image: "url_de_la_imagen_1.jpg",
    },
    {
      title: "Últimas Noticias",
      description: "Entérate de las últimas novedades de nuestra plataforma.",
      image: "url_de_la_imagen_2.jpg",
    },
  ];

  return (
    <div>
      <h1>Inicio</h1>
      
      <CarouselCoar></CarouselCoar>
      <Divider />

      <div style={{ display: "flex", justifyContent: "center" }}>
        {infoCardsData.map((card, index) => (
          <Card key={index} style={{ width: 300, margin: 10 }}>
            <img src={card.image} alt={card.title} />
            <Meta title={card.title} description={card.description} />
          </Card>
        ))}
      </div>
      
      <Divider />

      <div style={{ textAlign: "center" }}>
        <h2>Últimas Noticias</h2>
        <p>Aquí va el contenido de las últimas noticias.</p>
      </div>
      
      <Divider />

      <div style={{ textAlign: "center" }}>
        <h2>Enlaces Rápidos</h2>
        <Link to="/mi-perfil">
          <Button type="primary">Mi Perfil</Button>
        </Link>
        {/* Otros enlaces rápidos... */}
      </div>
    </div>
  );
};

export default StudentHome;
