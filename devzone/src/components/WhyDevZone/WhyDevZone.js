import "./WhyDevZone.css";
import logoCompleta from "./logo-completa.png";

function WhyDevZone() {
  return (
    <div className="whydevzone" id="whyDevZone">
      <h1>Porque escolher a DevZone</h1>
      <div className="whydevzone-grid">
        <div className="lista">
          <h3>
            Temos o Profissional Especialista na Tecnologia que Você Precisa
          </h3>
          <ul>
            <li>Profissionais especializados</li>
            <li>Processo simplificado</li>
            <li>Avaliação contínua</li>
            <li>Acompanhamento e suporte</li>
            <li>O menor custo do mercado</li>
          </ul>
        </div>
        <div className="imagem-lista">
          <img src={logoCompleta} alt="logo-completa-DevZone"></img>
        </div>
      </div>
    </div>
  );
}

export default WhyDevZone;
