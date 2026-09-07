import { RefreshCw, Sparkle } from "lucide-react";
import styles from "./SwapCenterBanner.module.css";

export default function SwapIllustration({ fromCurrency, toCurrency, fromLabel, toLabel }) {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <div className={`${styles.card} ${styles.cardFrom}`}>
        <span className={styles.cardTicker}>{fromCurrency}</span>
        <span className={styles.cardCaption}>{fromLabel}</span>
        <Sparkle size={16} className={styles.cardIcon} strokeWidth={2} />
      </div>

      <div className={styles.swapCore}>
        <RefreshCw size={22} strokeWidth={2.2} className={styles.swapIcon} />
      </div>

      <div className={`${styles.card} ${styles.cardTo}`}>
        <span className={styles.cardTicker}>{toCurrency}</span>
        <span className={styles.cardCaption}>{toLabel}</span>
        <Sparkle size={16} className={styles.cardIcon} strokeWidth={2} />
      </div>
    </div>
  );
}
