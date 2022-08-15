import Button from "./Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const InfoCard = () => {
  const text = "Go Home";

  const [fact, setFact] = useState([]);
  useEffect(() => {
    const getFact = async () => {
      const response = await axios.get(
        "https://zoo-animal-api.herokuapp.com/animals/rand"
      );
      console.log(response);
      setFact(response.data.diet);
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
