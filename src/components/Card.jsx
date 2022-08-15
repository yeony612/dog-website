import Button from "./Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Card = (props) => {
  const buttonText = "Learn more";
  const [name, setName] = useState([]);
  useEffect(() => {
    const getNames = async () => {
      const response = await axios.get(
        "https://api.fungenerators.com/name/categories.json?start=0&limit=15"
      );
      let arr = [];

      for (let i = 0; i < response.data.contents[0].length; i++) {
        const name = response.data.contents[0][i]["name"];
        const pushing = arr.push(name);
        console.log(arr);
      }
      setName(arr);
    };
    getNames();
  }, []);
  return (
    <div className="row">
      {props.image.map((image) => (
        <div className="column">
          <div key={image.id} className="card">
            <div className="img-wrapper">
              <img className="clip-sq" src={image} alt="poster" />
            </div>

            <Button text={buttonText} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
