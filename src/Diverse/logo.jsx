import logo from "./logo.svg";
import "./logo.css";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="logo-div">
      <img src={logo} alt="" onClick={handleClick} />
      <h2 onClick={handleClick}>Sekundering.no</h2>
    </div>
  );
}
