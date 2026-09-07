import { Repeat2 } from "lucide-react";
import BannerShell from "../common/BannerShell";
import CtaButton from "../common/CtaButton";
import ExchangeIllustration from "./ExchangeIllustration";
import { exchangeCenterData } from "../../data/rewardsData";
import styles from "./ExchangeCenterBanner.module.css";

export default function ExchangeCenterBanner({ onOpen, delay }) {
  const { from, to, rate, options } = exchangeCenterData;

  return (
    <BannerShell accent="gold" className={styles.banner} delay={delay}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <Repeat2 size={14} strokeWidth={2.4} />
          Redemption
        </span>

        <h2 className={styles.heading}>
          Exchange <span className={styles.headingAccent}>Center</span>
        </h2>

        <p className={styles.description}>
          Explore available redemption options and exchange eligible VEs for
          supported rewards.
        </p>

        <div className={styles.options}>
          {options.map((option) => (
            <span key={option} className={styles.optionChip}>
              {option}
            </span>
          ))}
        </div>

        <CtaButton tone="gold" onClick={onOpen}>
          Open Exchange Center
        </CtaButton>
      </div>

      <ExchangeIllustration from={from} to={to} rate={rate} />
    </BannerShell>
  );
}
