import styles from "./styles.module.scss";
import { Container, Row, Col } from "react-bootstrap";
export function ServiceSearch() {
  return (
    <Container className={styles.servicesContainer}>
      <Row>
        <Col lg={6} className={styles.title}>
          <h1>Qual serviço você está buscando?</h1>
        </Col>
      </Row>
    </Container>
  );
}
