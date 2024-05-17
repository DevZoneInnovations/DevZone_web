import "./Plans.css";

function Plans() {
  return (
    <div className="plans" id="plans">
      <h1>Planos</h1>
      <div className="grid-plans">
        <div className="planoEssencialZone">
          <div className="titulo-essencial">
            <h3>Essential Zone</h3>
            <p>
              <b>R$ 500,00</b>
            </p>
          </div>
          <ul>
            <li>Desenvolvimento nas 3 etapas;</li>
            <li>Suporte técnico por 30 dias após o lançamento;</li>
            <li>Desenvolvimento com até 5 paginas;</li>
            <li>Design simples e responsivo;</li>
            <li>Atualizações mediante pagamento;</li>
            <li>
              <b className="negrito-essential">
                Domínio garantido por 30 dias;
              </b>
            </li>
          </ul>
          <div className="btn-essecial">
            <button>
              <b>Ver mais</b>
            </button>
          </div>
        </div>
        <div className="planoPremiumZone">
          <div className="titulo-premium">
            <h3>Premium Zone</h3>
            <p>
              <b>R$ 950,00</b>
            </p>
          </div>
          <ul>
            <li>Desenvolvimento nas 3 etapas;</li>
            <li>Suporte técnico por 60 dias após o lançamento;</li>
            <li>Desenvolvimento com até 10 paginas;</li>
            <li>Design moderno e responsivo;</li>
            <li>Atualizações mediante pagamento;</li>
            <li>
              <b className="negrito-premium">Domínio garantido por 60 dias;</b>
            </li>
          </ul>
          <div className="btn-premium">
            <button>
              <b>Ver mais</b>
            </button>
          </div>
        </div>
        <div className="planoEliteZone">
          <div className="titulo-elite">
            <h3>Elite Zone</h3>
            <p>
              <b>R$ 1390,00</b>
            </p>
          </div>
          <ul>
            <li>Desenvolvimento nas 3 etapas;</li>
            <li>Suporte técnico por 3 meses após o lançamento;</li>
            <li>Desenvolvimento com até 20 paginas;</li>
            <li>Design moderno e responsivo;</li>
            <li>Atualizações garantidas por 90 dias após o lançamento;</li>
            <li>
              <b className="negrito-elite">Domínio garantido por 90 dias;</b>
            </li>
          </ul>
          <div className="btn-elite">
            <button>
              <b>Ver mais</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
