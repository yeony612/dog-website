import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const InfoCard = () => {
  const text = "Go Home";

  const [fact, setFact] = useState([]);
  useEffect(() => {
    const getFact = async () => {
      const response = await axios.get("facts.json");
      var randomNumber = Math.floor(Math.random() * 14) + 1;
      console.log(randomNumber);

      setFact(response.data[randomNumber]);
    };
    getFact();
  }, []);
  return (
    <div className="info-card">
      <h1>Dog Fact</h1>
      <p>{fact}</p>
      <Link to="/">
        <Button text={text} />
      </Link>
    </div>
  );
};

export default InfoCard;
