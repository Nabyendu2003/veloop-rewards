import { Gift, UserRound, Coins } from "lucide-react";
import styles from "./ReferEarnBanner.module.css";

export default function ReferIllustration({ referralCode }) {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <div className={styles.orbit}>
        <div className={`${styles.avatar} ${styles.avatarLeft}`}>
          <UserRound size={22} strokeWidth={2} />
        </div>
        <div className={`${styles.avatar} ${styles.avatarRight}`}>
          <UserRound size={22} strokeWidth={2} />
        </div>

        <div className={styles.giftCore}>
          <Gift size={34} strokeWidth={1.8} />
        </div>

        <div className={styles.codeChip}>
          <span className={styles.codeLabel}>Your code</span>
          <span className={styles.codeValue}>{referralCode}</span>
        </div>

        <Coins size={20} className={`${styles.coin} ${styles.coinA}`} strokeWidth={1.8} />
        <Coins size={16} className={`${styles.coin} ${styles.coinB}`} strokeWidth={1.8} />
        <Coins size={18} className={`${styles.coin} ${styles.coinC}`} strokeWidth={1.8} />
      </div>
    </div>
  );
}
