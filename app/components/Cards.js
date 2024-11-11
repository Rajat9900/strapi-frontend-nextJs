import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCardsData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/cards?populate=cardImage"
        );
        const data = await response.json();
        setCardsData(data.data);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardsData();
  }, []);

  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        gap: "3rem",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {cardsData.map((card) => {
        const { id, cardTitle, cardDesc, cardBtn, cardImage } = card;

        const imageUrl =
          cardImage?.[0]?.formats?.small?.url || cardImage?.[0]?.url;
        const fullImageUrl = `http://localhost:1337${imageUrl}`;

        return (
          <Card key={id} style={{ width: "19rem" }}>
            <Card.Img
              variant="top"
              src={fullImageUrl}
              alt={cardImage?.[0]?.name || "Card image"}
              style={{ height: "300px" }}
            />
            <Card.Body>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Text>{cardDesc}</Card.Text>
              <Button variant="primary">{cardBtn}</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
