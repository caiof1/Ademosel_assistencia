// CSS
import styles from "./Home.module.css";

// Images
import betoneira from "../../images/MotorBetoneira.png";
import garantia from "../../images/GarantiaQualidade.png";
import preco from "../../images/PrecoJusto.png";
import geladeira from "../../images/Geladeira.png";
import balcao from "../../images/BalcaoFrigorifico.png";
import maquina from "../../images/MaquinaLavar.png";
import freezer from "../../images/Freezers.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.container_betoneira}>
        <div className={styles.text_betoneira}>
          <h1>
            Deseja <span>consertar algo?</span> Mande uma mensagem para o nosso{" "}
            <span>whatsapp e faremos um orçamento</span>
          </h1>
          <p>
            Especialista em manutenção de geladeiras, freezers, balcão
            frigorifico, chopeira, maquina de lavar
          </p>
          <button>Ver serviços</button>
        </div>
        <div className={styles.container_image_betoneira}>
          <h3>
            <span>Rebobinagem</span> de motor
          </h3>
          <img
            src={betoneira}
            width="80%"
            alt="Imagem do motor de uma betoneira"
          />
        </div>
      </section>

      <section className={styles.container_garantia}>
        <span>
          <img src={garantia} alt="" />
          <span>Garantia no serviço e peça trocada</span>
        </span>
        <span>
          <img src={preco} alt="" />
          <span>Preço Justo!</span>
        </span>
      </section>

      <section className={styles.container_orcamento + " sections"}>
        <h3>
          Como faço o meu <span>orçamento</span>
        </h3>
        <p>Aqui está alguns modos de como você pode ter seu orçamento</p>
        <div className={styles.container_whats_assistencia}>
          <div>
            <i className="fa-brands fa-whatsapp"></i>
            <h4>WhatsApp</h4>
            <p>Nos chame no whatsapp informando o seu problema</p>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <h4>Assistência</h4>
            <p>
              Vá até o endereço da nossa assistência e lá poderá ter o seu
              orçamento
            </p>
          </div>
        </div>
      </section>

      <section className={styles.container_servicos + " sections"}>
        <h3>
          Quais são <span>nossos serviços?</span>
        </h3>
        <p>
          Somos especialista em resolver seu problema com diversos equipamentos.
          Consulte a nossa lista de equipamentos
        </p>
        <div className={styles.container_nossos_servicos}>
          <div>
            <h4>MANUTENÇÃO</h4>
            <p>
              Assistência realizada com eficiência e transparência, deixando o
              seu equipamento nas melhores condições para o uso e seu ambiente
              livre de fungos e bactérias, ajudando assim a sua saúde.
            </p>
          </div>
          <div>
            <h4>PEÇAS</h4>
            <p>
              Trabalhamos com as melhores peças de fabricantes do mercado,
              otimizando o funcionamento do seu equipamento e evitando futuro
              transtornos.
            </p>
          </div>
          <div>
            <h4>REFRIGERAÇÃO</h4>
            <p>
              Um aparelho em perfeita condição é obtido pela sua refrigeração.
              Caso seu equipamento esteja apresentando baixo funcionamento,
              entre em contato conosco, estaremos prontos para lhe ajudar.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.container_consertamos + " sections"}>
        <h3>
          O que <span>consertamos?</span>
        </h3>
        <div className={styles.container_oque_consertamos}>
          <div>
            <img src={geladeira} alt="imagem de uma geladeira" />
            <h4>Geladeiras</h4>
          </div>
          <div>
            <img src={balcao} alt="imagem de um balcão frigorifico" />
            <h4>Balcão frigorifico</h4>
          </div>
          <div>
            <img src={maquina} alt="imagem de uma maquina de lavar" />
            <h4>Maquina de lavar</h4>
          </div>
          <div>
            <img src={freezer} alt="imagem de um freezer" />
            <h4>Freezers</h4>
          </div>
        </div>
      </section>

      <section className={styles.container_diferencial + " sections"}>
        <h3>
          Qual é o nosso <span>diferencial?</span>
        </h3>
        <div className={styles.container_quais_diferencial}>
          <div>
            <h5>Profissionais Qualificados</h5>
            <p>
              São profissionais que juntos constroem excelentes projetos, com
              segurança, pontualidade na entrega, e total comprometimento com a
              qualidade de seus serviços.
            </p>
          </div>
          <div>
            <h5>Interação com o Cliente</h5>
            <p>
              Compreender as necessidades dos clientes e analisá-las
              cuidadosamente, para que dessa forma a empresa possa oferecer-lhes
              a melhor solução em projetos e empreendimentos diversos.
            </p>
          </div>
          <div>
            <h5>Compromisso De Entrega</h5>
            <p>
              Um dos pilares da nossa empresa é o compromisso com o prazo de
              entrega, sabemos que o cliente merece essa dedicação.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.container_local + " sections"}>
        <h3>
          Onde você pode nos <span>encontrar?</span>
        </h3>
        <div className={styles.container_qual_local}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0925483145074!2d-48.330457590624334!3d-18.971519709102086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44352c1f96e93%3A0xcc5e422e985137c!2sR.%20Baicker%20Bernardino%20-%20Jardim%20Cana%C3%A3%2C%20Uberl%C3%A2ndia%20-%20MG%2C%2038412-498!5e0!3m2!1spt-BR!2sbr!4v1690045602724!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
