import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import HeroHeader from "../components/HeroHeader";

const Home = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    const getImages = async () => {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random/15"
      );
      console.log(response.data.message);
      setImage(response.data.message);
    };
    getImages();
  }, []);

  return (
    <div>
      <HeroHeader />

      <Card image={image} />
    </div>
  );
};

export default Home;
