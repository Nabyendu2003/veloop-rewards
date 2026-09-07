import { Check, Keyboard, Gem } from "lucide-react";
import styles from "./CaptchaTasksBanner.module.css";

export default function CaptchaIllustration({ sampleCode }) {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <div className={styles.screen}>
        <span className={styles.screenCode}>{sampleCode}</span>
        <div className={styles.screenInputRow}>
          <span className={styles.screenInput}>{sampleCode}</span>
          <span className={styles.verifyBtn}>
            <Check size={14} strokeWidth={3} />
          </span>
        </div>
        <div className={styles.keyboardHint}>
          <Keyboard size={14} strokeWidth={1.8} />
          <span>Type to verify</span>
        </div>
      </div>

      <Gem size={20} className={`${styles.gem} ${styles.gemA}`} strokeWidth={1.6} />
      <Gem size={15} className={`${styles.gem} ${styles.gemB}`} strokeWidth={1.6} />
      <Gem size={18} className={`${styles.gem} ${styles.gemC}`} strokeWidth={1.6} />
    </div>
  );
}
