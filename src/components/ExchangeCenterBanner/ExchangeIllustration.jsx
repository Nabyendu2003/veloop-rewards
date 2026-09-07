import { Gem, ArrowRight, Coins, Wallet } from "lucide-react";
import styles from "./ExchangeCenterBanner.module.css";

export default function ExchangeIllustration({ from, to, rate }) {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <div className={styles.walletBadge}>
        <Wallet size={16} strokeWidth={1.8} />
      </div>

      <div className={styles.row}>
        <div className={`${styles.token} ${styles.tokenFrom}`}>
          <Gem size={22} strokeWidth={1.8} />
          <span>{from}</span>
        </div>

        <ArrowRight size={18} strokeWidth={2.4} className={styles.convertArrow} />

        <div className={`${styles.token} ${styles.tokenTo}`}>
          <Coins size={22} strokeWidth={1.8} />
          <span>{to}</span>
        </div>
      </div>

      <span className={styles.rateTag}>{rate}</span>
    </div>
  );
}
