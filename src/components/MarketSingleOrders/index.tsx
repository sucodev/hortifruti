import { ReactNode } from "react";
import { Col, ColProps } from "react-bootstrap";

import styles from "./styles.module.scss";

interface MarketSingleProps {
  [propName: string]: ReactNode | HTMLDivElement | ColProps;
}

export function MarketSingleOrders({
  children,
  ...propName
}: MarketSingleProps) {
  return (
    <Col className={styles.container} {...propName}>
      {children}
    </Col>
  );
}
