import Button from "./Button";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  const buttonOne = "Get Info";
  return (
    <div className="hero-wrapper">
      <h1 class="hero-text">Let's learn about dogs!</h1>
      <Link to="/info">
        <Button text={buttonOne} />
      </Link>
    </div>
  );
};

export default HeroHeader;
