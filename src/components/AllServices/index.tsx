import { Container, Row, Col } from "react-bootstrap";
import { MarketOrders } from "../MarketOrders";
import { MarketSingleOrders } from "../MarketSingleOrders";

import styles from "./styles.module.scss";

import IfoodIMG from "../../Assets/images/HortiFrutiIfood.png";
import RappiIMG from "../../Assets/images/HortiFrutiRappi.png";

export function AllServices() {
  return (
    <Container className={styles.servicesContainer}>
      <Row>
        <Col lg={6}>
          <MarketOrders />
        </Col>

        <Col lg={6} className={styles.servicesContent}>
          <Row>
            <MarketSingleOrders lg={5}>
              <header>
                <h2>Pedidos Recorrentes</h2>
              </header>
              <main>
                <p>
                  Monte uma lista de compras e escolha a frequência que gostaria
                  de recebê-la.
                </p>
              </main>
              <footer>
                <button>Criar Pedido</button>
                <p>Novidade</p>
              </footer>
            </MarketSingleOrders>
            <MarketSingleOrders lg={5}>
              <header>
                <h2>Cestas de Presente</h2>
              </header>
              <main>
                <p>
                  Surpreenda na hora de presentear com nossas cestas de presente
                  incríveis.
                </p>
              </main>
              <footer className="justify-content-end">
                <button>Ver Cestas</button>
              </footer>
            </MarketSingleOrders>
            <MarketSingleOrders lg={5}>
              <header>
                <h2>Estação Natural</h2>
              </header>
              <main>
                <p>Compre aqui as delícias do nosso restaurante.</p>
              </main>
              <footer>
                <button className="btn-ifood">
                  <img src={IfoodIMG} alt="Comprar pelo Ifood" />
                </button>
                <button className="btn-rappi">
                  <img src={RappiIMG} alt="Comprar pelo Rappi" />
                </button>
              </footer>
            </MarketSingleOrders>
            <MarketSingleOrders lg={5}>
              <header>
                <h2>Assinatura de Orgânicos</h2>
              </header>
              <main>
                <p>
                  Experimente nosso novo serviço em aprceira com a Orgânicos in
                  Box!
                </p>
              </main>
              <footer className="justify-content-end">
                <button>Ver Catálogo</button>
              </footer>
            </MarketSingleOrders>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
