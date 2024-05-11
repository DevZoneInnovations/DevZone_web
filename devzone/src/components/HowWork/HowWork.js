import "./HowWork.css";
import batePapo from "./bater-papo.png";
import prototipo from "./prototipo.png";
import criando from "./criando.png";

function HowWork() {
  return (
    <div className="howWork">
      <div className="containerBranco">
        <div className="container">
          <div className="imagem">
            <img src={batePapo} alt="icone-batePapo"></img>
          </div>
          <h3>Bate papo do seu negócio</h3>
          <div className="paragrafoContainer">
            <p>
              Nesta etapa programamos uma reunião estratégica para aprofundar
              nossa compreensão sobre os valores, objetivos e identidade da sua
              empresa. Esse diálogo é crucial para garantir que cada aspecto do
              seu site seja cuidadosamente alinhado com sua visão e necessidades
              específicas, resultando em uma representação digital autêntica e
              eficaz da sua empresa.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="imagem">
            <img src={prototipo} alt="icone-prototipo"></img>
          </div>
          <h3>Criação do Protótipo</h3>
          <div className="paragrafoContainer">
            <p>
              Nessa etapa iremos criar um protótipo do seu site. A partir dessa
              etapa podemos ter uma noção de como você imagina o seu site e
              executarmos todas as ideias, requisitos e dinâmicas do seu site e
              sempre em contato com você para que você possa nos dar os seus
              feedbacks em cada etapa da construção.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="imagem">
            <img src={criando} alt="icone-criando"></img>
          </div>
          <h3>Hora de botar mão na massa</h3>
          <div className="paragrafoContainer">
            <p>
              Essa etapa iremos partir para a construção oficial do seu site
              onde iremos codificar igual ao protótipo. Importante lembrar que
              essa etapa só é iniciada quando todas as outras forem completas,
              porque usaremos o seu protótipo para a construção oficial do seu
              site. A partir desse ponto não é recomendado haver alterações no
              design do site, por isso usamos a etapa do protótipo para deixar
              tudo esclarecido.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
