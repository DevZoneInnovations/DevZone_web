import "./ExtraPlans.css";

function ExtraPlans() {
  return (
    <div className="extra" id="extra">
      <h1>Planos extras</h1>
      <div className="grid-plansExtra">
        <div className="planoBubbleZone">
          <div className="titulo-bubble">
            <h3>Bubble Zone</h3>
            <p>
              <b>R$ 50,00</b>
            </p>
          </div>
          <ul>
            <li>
              Criação de um
              <b className="negrito-bubble"> LinkMe personalizado</b> para suas
              redes sociais;
            </li>
            <li>Desenvolvimento nas 3 etapas;</li>
            <li>Suporte técnico por 30 dias após o lançamento;</li>
            <li>Atualizações mediante pagamento;</li>
          </ul>
          <div className="btn-bubble">
            <button>Ver mais</button>
          </div>
        </div>

        <div className="planoCreativeZone">
          <div className="titulo-creative">
            <h3>Creative Zone</h3>
            <p>
              <b>R$ 45,00</b>
            </p>
          </div>
          <ul>
            <li>
              Criação de três
              <b className="negrito-creative"> Logotipos personalizadas</b> para
              suas redes sociais;
            </li>
            <li>Desenvolvimento nas 3 etapas;</li>

            <li>Suporte técnico por 30 dias após o lançamento;</li>
            <li>Atualizações mediante pagamento;</li>
          </ul>
          <div className="btn-creative">
            <button>Ver mais</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraPlans;
