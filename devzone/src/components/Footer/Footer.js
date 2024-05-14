import "./Footer.css";
import whatsapp from "./whatsapp.png";
import linkedin from "./logotipo-do-linkedin.png";
import instagram from "./instagram.png";
import logo from "./logo-completa.png";

function Footer() {
  return (
    <div className="footer">
      <div className="containerFooter">
        <div className="empresa">
          <div className="logo-empresa">
            <img src={logo} alt="logo da empresa"></img>
          </div>
          <div className="redesSociais">
            <a href="https://wa.me/5511985050470">
              <img src={whatsapp} alt="icone whatsapp"></img>
            </a>
            <a href="https://www.linkedin.com/in/marcosvclementec/">
              <img src={linkedin} alt="icone linkedin"></img>{" "}
            </a>
            <a href="https://www.instagram.com/__devzone/">
              <img src={instagram} alt="icone instagram"></img>
            </a>
          </div>
          <div className="cnpj">
            <p>xx.xxx.xxx/0001-xx</p>
          </div>
        </div>
        <div className="navegação">
          <ul>
            <h4>Barra de Navegação</h4>
            <li>
              <a href="#sobre">Inicio</a>
            </li>
            <li>
              <a href="#howWork">Como trabalhamos</a>
            </li>
            <li>
              <a href="#whyDevZone">Benefícios</a>
            </li>
            <li>
              <a href="#projects">Projetos Contratados</a>
            </li>
            <li>
              <a href="#plans">Planos</a>
            </li>
            <li>
              <a href="#plansUpdate">Planos Update</a>
            </li>
            <li>
              <a href="#extra">Planos extras</a>
            </li>
          </ul>
        </div>
        <div className="parceiros">
          {/*adicionar hrefs*/}
          <ul>
            <h4>Parceiros</h4>
            <li>
              <a>Empresa tal 1</a>
            </li>
            <li>
              <a>Empresa tal 2</a>
            </li>
            <li>
              <a>Empresa tal 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
