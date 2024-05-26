import "./Plans2.css";
import { FaCheck, FaChevronRight } from "react-icons/fa";

function Plans2() {
  return (
    <div className="plans2">
      <h1>Planos</h1>
      <div id="princing-table">
        <div className="price-box-container">
          {/* ESSENTIAL */}
          <div className="price-box">
            <div className="header-section-essential">
              <div className="plan-name-essential">
                <strong>Essential Zone</strong>
                <span>
                  Ideal para sites simples e informativos, como sites de
                  pequenos negócios locais sem lista de produtos, portfólios
                  pessoais, páginas de currículo, entre outros. Com um design
                  limpo, intuitivo, navegação fácil e adaptação a dispositivos
                  móveis.
                </span>
              </div>
              <div className="price-essential">
                <div className="pix-essential">
                  <h4>PIX</h4>
                  <p>R$ 500,00</p>
                  <p>2x R$ 250,00 Sem Juros</p>
                </div>
                <div className="cartao-essential">
                  <h4>CARTÃO</h4>
                  <p>R$ 532,42</p>
                  <p>2x R$ 266,21 Sem Juros</p>
                </div>
                <div className="features-section-essential">
                  <div className="feature-box-essential">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento nas 3 etapas;</span>
                    <div className="feature-details-essential">
                      <p>Domínio por conta do cliente;</p>
                    </div>
                  </div>

                  <div className="feature-box-essential">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Suporte técnico por 30 dias após o lançamento;</span>
                  </div>

                  <div className="feature-box-essential">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento com até 5 paginas;</span>
                  </div>

                  <div className="feature-box-essential">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Design simples e responsivo;</span>
                  </div>

                  <div className="feature-box-essential">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Atualizações mediante pagamento;</span>
                  </div>
                </div>
                <div className="chose-plan-btn-essential">
                  <a
                    href="https://wa.me/5511912125307"
                    className="btn-essencial"
                  >
                    Fale Conosco
                    <i>
                      <FaChevronRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* PREMIUM */}
          <div className="price-box">
            <div className="header-section-premium">
              <div className="plan-name-premium">
                <strong>Premium Zone</strong>
                <span>
                  Ideal para sites de pequenas e médias empresas que desejam uma
                  presença online mais robusta.Também pode ser usado para sites
                  de negócios locais, sites institucionais ou pequenas lojas
                  online com um número limitado de produtos.
                </span>
              </div>
              <div className="price-premium">
                <div className="pix-premium">
                  <h4>PIX</h4>
                  <p>R$ 980,00</p>
                  <p>3x R$ 326,67 Sem Juros</p>
                </div>
                <div className="cartao-premium">
                  <h4>CARTÃO</h4>
                  <p>R$ 1053,88</p>
                  <p>3x R$ 351,29 Sem Juros</p>
                </div>
                <div className="features-section-premium">
                  <div className="feature-box-premium">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento nas 3 etapas;</span>
                    <div className="feature-details-premium">
                      <p>Domínio garantido por 1 ano;</p>
                    </div>
                  </div>

                  <div className="feature-box-premium">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Suporte técnico por 60 dias após o lançamento;</span>
                  </div>

                  <div className="feature-box-premium">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento com até 10 paginas;</span>
                  </div>

                  <div className="feature-box-premium">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Design moderno e responsivo;</span>
                  </div>

                  <div className="feature-box-premium">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Atualizações mediante pagamento;</span>
                  </div>
                </div>
                <div className="chose-plan-btn-premium">
                  <a href="https://wa.me/5511912125307" className="btn-premium">
                    Fale Conosco
                    <i>
                      <FaChevronRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ELITE */}
          <div className="price-box">
            <div className="header-section-elite">
              <div className="plan-name-elite">
                <strong>Elite Zone</strong>
                <span>
                  Ideal para empresas maiores ou que precisam de um site
                  altamente personalizado com funcionalidades avançadas. Isso
                  inclui lojas online com um grande catálogo de produtos, sites
                  de empresas de médio a grande porte.
                </span>
              </div>
              <div className="price-elite">
                <div className="pix-elite">
                  <h4>PIX</h4>
                  <p>R$ 1390,00</p>
                  <p>5x R$ 278,00 Sem Juros</p>
                </div>
                <div className="cartao-elite">
                  <h4>CARTÃO</h4>
                  <p>R$ 1524,12</p>
                  <p>5x R$ 304,82 Sem Juros</p>
                </div>
                <div className="features-section-elite">
                  <div className="feature-box-elite">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento nas 3 etapas;</span>
                    <div className="feature-details-elite">
                      <p>Domínio garantido por 2 anos;</p>
                    </div>
                  </div>

                  <div className="feature-box-elite">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Suporte técnico por 3 meses após o lançamento;</span>
                  </div>

                  <div className="feature-box-elite">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento com até 20 paginas;</span>
                  </div>

                  <div className="feature-box-elite">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Design moderno e responsivo;</span>
                  </div>

                  <div className="feature-box-elite">
                    <i>
                      <FaCheck />
                    </i>
                    <span>
                      Atualizações garantidas por 90 dias após o lançamento;
                    </span>
                  </div>
                </div>
                <div className="chose-plan-btn-elite">
                  <a href="https://wa.me/5511912125307" className="btn-elite">
                    Fale Conosco
                    <i>
                      <FaChevronRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* GUARDIAN */}
          <div className="price-box">
            <div className="header-section-guardian">
              <div className="plan-name-guardian">
                <strong>Guardian Zone</strong>
                <span>
                  Ideal para empresas maiores ou que precisam de um site
                  altamente personalizado com funcionalidades avançadas. Isso
                  inclui lojas online com um grande catálogo de produtos, sites
                  de empresas de médio a grande porte.
                </span>
              </div>
              <div className="price-guardian">
                <div className="pix-guardian">
                  <h4>PIX</h4>
                  <p>R$ 1390,00</p>
                  <p>5x R$ 278,00 Sem Juros</p>
                </div>
                <div className="cartao-guardian">
                  <h4>CARTÃO</h4>
                  <p>R$ 1524,12</p>
                  <p>5x R$ 304,82 Sem Juros</p>
                </div>
                <div className="features-section-guardian">
                  <div className="feature-box-guardian">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento nas 3 etapas;</span>
                  </div>

                  <div className="feature-box-guardian">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Suporte técnico por 3 meses após o lançamento;</span>
                  </div>

                  <div className="feature-box-guardian">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento com até 20 paginas;</span>
                  </div>

                  <div className="feature-box-guardian">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Design moderno e responsivo;</span>
                  </div>

                  <div className="feature-box-guardian">
                    <i>
                      <FaCheck />
                    </i>
                    <span>
                      Atualizações garantidas por 90 dias após o lançamento;
                    </span>
                  </div>
                </div>
                <div className="chose-plan-btn-guardian">
                  <a
                    href="https://wa.me/5511912125307"
                    className="btn-guardian"
                  >
                    Fale Conosco
                    <i>
                      <FaChevronRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BUBBLE */}
          <div className="price-box">
            <div className="header-section-bubble">
              <div className="plan-name-bubble">
                <strong>Bublle Zone</strong>
                <span>
                  Ideal para empresas maiores ou que precisam de um site
                  altamente personalizado com funcionalidades avançadas. Isso
                  inclui lojas online com um grande catálogo de produtos, sites
                  de empresas de médio a grande porte.
                </span>
              </div>
              <div className="price-bubble">
                <div className="pix-bubble">
                  <h4>PIX</h4>
                  <p>R$ 1390,00</p>
                  <p>5x R$ 278,00 Sem Juros</p>
                </div>
                <div className="cartao-bubble">
                  <h4>CARTÃO</h4>
                  <p>R$ 1524,12</p>
                  <p>5x R$ 304,82 Sem Juros</p>
                </div>
                <div className="features-section-bubble">
                  <div className="feature-box-bubble">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento nas 3 etapas;</span>
                  </div>

                  <div className="feature-box-bubble">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Suporte técnico por 3 meses após o lançamento;</span>
                  </div>

                  <div className="feature-box-bubble">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento com até 20 paginas;</span>
                  </div>

                  <div className="feature-box-bubble">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Design moderno e responsivo;</span>
                  </div>

                  <div className="feature-box-bubble">
                    <i>
                      <FaCheck />
                    </i>
                    <span>
                      Atualizações garantidas por 90 dias após o lançamento;
                    </span>
                  </div>
                </div>
                <div className="chose-plan-btn-bubble">
                  <a href="https://wa.me/5511912125307" className="btn-bubble">
                    Fale Conosco
                    <i>
                      <FaChevronRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CREATIVE */}
          <div className="price-box">
            <div className="header-section-creative">
              <div className="plan-name-creative">
                <strong>Creative Zone</strong>
                <span>
                  Ideal para empresas maiores ou que precisam de um site
                  altamente personalizado com funcionalidades avançadas. Isso
                  inclui lojas online com um grande catálogo de produtos, sites
                  de empresas de médio a grande porte.
                </span>
              </div>
              <div className="price-creative">
                <div className="pix-creative">
                  <h4>PIX</h4>
                  <p>R$ 1390,00</p>
                  <p>5x R$ 278,00 Sem Juros</p>
                </div>
                <div className="cartao-creative">
                  <h4>CARTÃO</h4>
                  <p>R$ 1524,12</p>
                  <p>5x R$ 304,82 Sem Juros</p>
                </div>
                <div className="features-section-creative">
                  <div className="feature-box-creative">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento nas 3 etapas;</span>
                  </div>

                  <div className="feature-box-creative">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Suporte técnico por 3 meses após o lançamento;</span>
                  </div>

                  <div className="feature-box-creative">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Desenvolvimento com até 20 paginas;</span>
                  </div>

                  <div className="feature-box-creative">
                    <i>
                      <FaCheck />
                    </i>
                    <span>Design moderno e responsivo;</span>
                  </div>

                  <div className="feature-box-creative">
                    <i>
                      <FaCheck />
                    </i>
                    <span>
                      Atualizações garantidas por 90 dias após o lançamento;
                    </span>
                  </div>
                </div>
                <div className="chose-plan-btn-creative">
                  <a
                    href="https://wa.me/5511912125307"
                    className="btn-creative"
                  >
                    Fale Conosco
                    <i>
                      <FaChevronRight />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plans2;
