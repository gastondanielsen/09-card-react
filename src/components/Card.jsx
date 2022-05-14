import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMzIzMDg1NQ&ixlib=rb-1.2.1&q=85"
          alt="Foto"
          className="image"
        />
        <h3>GDcode</h3>
        <h5>Full Stack Web Developer</h5>
        <div className="details">
          <div className="col1">
            <h2>17.8K</h2>
            <p>Seguidores</p>
          </div>
          <div className="col1">
            <h2>7.8K</h2>
            <p>Siguiendo</p>
          </div>
        </div>
        <div className="btn">
          <button>Seguir</button>
          <button>Mensaje</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
