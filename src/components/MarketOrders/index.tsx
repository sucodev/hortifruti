import styles from "./styles.module.scss";
import CestaIMG from "../../Assets/images/HortiFrutiCesta.png";

export function MarketOrders() {
  return (
    <div className={styles.market}>
      <div className={styles.content}>
        <header>
          <div>
            <span>Pedidos de</span>
            <h2>Supermercado</h2>
          </div>
          <div>
            <img src={CestaIMG} alt="Montar lista de compras - super mercado" />
          </div>
        </header>
        <main>
          <p>
            Monte sua lista de compra com suas preferências e deixe o trabalho
            de montar o carrinho com nossa equipe. Se algum produto estiver
            esgotado, entraremos em contato com você.
          </p>
        </main>
        <footer>
          <div>
            <p>
              Próximo Horário Disponível: <span>17:00 - 21:00</span>
            </p>
            <button>Pedir Agora</button>
          </div>
        </footer>
      </div>
    </div>
  );
}
