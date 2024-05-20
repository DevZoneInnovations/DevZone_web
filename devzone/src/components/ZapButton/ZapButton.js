import "./ZapButton.css";
import zap_img from "./whatsapp.png";

function ZapButton() {
  return (
    <div className="btn-zap">
      <a href="https://wa.me/5511985050470">
        <img src={zap_img} alt="Whatsapp icone"></img>
      </a>
    </div>
  );
}

export default ZapButton;
