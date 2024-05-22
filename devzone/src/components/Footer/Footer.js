import "./Footer.css";
import gmail from "./o-email.png";
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
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=new">
              <img src={gmail} alt="icone gmail"></img>
            </a>
            <a href="https://www.linkedin.com/in/marcosvclementec/">
              <img src={linkedin} alt="icone linkedin"></img>{" "}
            </a>
            <a href="https://www.instagram.com/__devzone/">
              <img src={instagram} alt="icone instagram"></img>
            </a>
          </div>
          {/* 
          <div className="cnpj">
            <p>xx.xxx.xxx/0001-xx</p>
          </div>
          */}
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
              <a href="https://alnidigital.com/">ALNI Digital</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
