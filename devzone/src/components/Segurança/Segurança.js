import "./Segurança.css";
import segurança from "./escudo-seguro.png";
import pagamento from "./pagar.png";
import Acompanhamento from "./verifica.png";

function Segurança() {
  return (
    <div className="segurança" id="segurança">
      <div className="containerBranco2">
        <div className="container2">
          <div className="imagem2">
            <img src={segurança} alt="icone-batePapo2"></img>
          </div>
          <h3>Segurança</h3>
          <div className="paragrafoContainer2">
            <p>Todos os seus dados seguros</p>
          </div>
        </div>

        <div className="container2">
          <div className="imagem2">
            <img src={Acompanhamento} alt="icone-prototipo2"></img>
          </div>
          <h3>Acompanhamento</h3>
          <div className="paragrafoContainer2">
            <p>Você tera acesso passo a passo do desenvolvimento</p>
          </div>
        </div>

        <div className="container2">
          <div className="imagem2">
            <img src={pagamento} alt="icone-criando2"></img>
          </div>
          <h3>Pagamento facilitado</h3>
          <div className="paragrafoContainer2">
            <p>Pague com facilidade e segurança</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Segurança;
