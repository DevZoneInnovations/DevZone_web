import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Inicio.css";
import logo from "./logo.png";

function Inicio() {
  const [text] = useTypewriter({
    words: ["DevZone Innovations"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div className="inicio">
      <h1>Bem-Vindos à </h1>
      <h1>
        <span>{text}</span>
        <span className="span">
          <Cursor cursorStyle=" ✧" cursorBlinking={false} />
        </span>
      </h1>
      <img src={logo}></img>
    </div>
  );
}

export default Inicio;
