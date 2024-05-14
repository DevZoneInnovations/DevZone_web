import "./PlansUpdate.css";

function PlansUpdate() {
  return (
    <div className="plansUpadate" id="plansUpdate">
      <h1>Planos de Atualizações</h1>
      <div className="planoGuardianZone">
        <div className="titulo-guardian">
          <h3>Guardian Zone</h3>
          <p>
            <b>R$ 90,00</b>
          </p>
        </div>
        <ul>
          <li>Atualizaçoes no sistema de acordo com suas necessidades;</li>
          <li>Novo planejamento seguindo o Desenvolvimento 3 etapas;</li>
          <li>Renovação de mais 30 dias de suporte técnico;</li>
        </ul>
        <div className="btn-guardian">
          <button>
            <b>Ver mais</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlansUpdate;
