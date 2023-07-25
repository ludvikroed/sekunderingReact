import logoIMG from "./logo.png";
import "./logo.css";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="logo-div">
      <img src={logoIMG} alt="" onClick={handleClick} />
      <h2 onClick={handleClick}>SEKUNDERING</h2>
    </div>
  );
}
