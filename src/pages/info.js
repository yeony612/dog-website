import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Info = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random/15"
      );
      setImage(response.data.message);
    };
    getImages();
  }, []);

  return (
    <div>
      <Card image={image} />
    </div>
  );
};

export default Info;
