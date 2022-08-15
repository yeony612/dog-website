import Button from "./Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const buttonText = "Learn more";

  return (
    <div className="row">
      {props.image.map((image) => (
        <div className="column">
          <div key={image.id} className="card">
            <div className="img-wrapper">
              <img className="clip-sq" src={image} alt="poster" />
            </div>
            <Link to="/info">
              <Button text={buttonText} style={{ paddingTop: "15px" }} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
