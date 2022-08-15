import Button from "./Button";
import { Link } from "react-router-dom";

const HeroHeader = () => {
  const buttonOne = "See Info";
  return (
    <div className="hero-wrapper">
      <h1 class="hero-text">Learn about Dogs!</h1>
      <Link to="/info">
        <Button text={buttonOne} />
      </Link>
    </div>
  );
};

export default HeroHeader;
