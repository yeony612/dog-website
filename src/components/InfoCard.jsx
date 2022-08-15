import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const InfoCard = () => {
  const text = "Go Home";
  return (
    <div className="info-card">
      <h1>Dog Fact</h1>
      <Link to="/">
        <Button text={text} />
      </Link>
    </div>
  );
};

export default InfoCard;
