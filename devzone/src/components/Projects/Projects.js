import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="containerBrancoProjects">
        <h1>Projetos Completos</h1>
        <p className="primeiroParagrafo">
          Nossos parceiros alcançaram o sucesso com nossos profissionais de TI.
        </p>
        <p className="ultimoParagrafo">
          Seja você também um Parceiro da DevZone!
        </p>
        {/* 
        Quando tiver as espresas colocar os links e as imagens
        Não esquecer de colocar o grid nos elementos
        */}
        <div className="grid-projects">
          <ul>
            <li>
              <img src="" alt="empresa 1"></img>
            </li>
            <li>
              <img src="" alt="empresa 2"></img>
            </li>
            <li>
              <img src="" alt="empresa 3"></img>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
