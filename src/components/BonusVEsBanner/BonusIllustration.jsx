import { Lock, Coins } from "lucide-react";
import styles from "./BonusVEsBanner.module.css";

export default function BonusIllustration({ balance }) {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <div className={styles.ring}>
        <svg viewBox="0 0 120 120" className={styles.ringSvg}>
          <circle cx="60" cy="60" r="52" className={styles.ringTrack} />
          <circle cx="60" cy="60" r="52" className={styles.ringProgress} />
        </svg>
        <div className={styles.ringCenter}>
          <span className={styles.ringLabel}>Bonus VE</span>
          <span className={styles.ringValue}>{balance.toLocaleString()}</span>
        </div>
      </div>

      <div className={styles.vault}>
        <Lock size={22} strokeWidth={1.8} />
      </div>

      <Coins size={18} className={`${styles.coin} ${styles.coinA}`} strokeWidth={1.8} />
      <Coins size={14} className={`${styles.coin} ${styles.coinB}`} strokeWidth={1.8} />
      <Coins size={16} className={`${styles.coin} ${styles.coinC}`} strokeWidth={1.8} />
    </div>
  );
}
