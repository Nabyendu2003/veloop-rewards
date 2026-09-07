import { ArrowLeftRight, Wallet } from "lucide-react";
import BannerShell from "../common/BannerShell";
import CtaButton from "../common/CtaButton";
import SwapIllustration from "./SwapIllustration";
import { swapCenterData } from "../../data/rewardsData";
import styles from "./SwapCenterBanner.module.css";

export default function SwapCenterBanner({ onOpen, delay }) {
  const { fromCurrency, toCurrency, fromLabel, toLabel, rate } = swapCenterData;

  return (
    <BannerShell accent="purple" className={styles.banner} delay={delay}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <ArrowLeftRight size={14} strokeWidth={2.4} />
          Conversion Utility
        </span>

        <h2 className={styles.heading}>
          Swap <span className={styles.headingAccent}>Center</span>
        </h2>

        <p className={styles.description}>
          Convert eligible reward balances between supported currencies and
          manage your rewards more efficiently.
        </p>

        <div className={styles.rateChip}>
          <Wallet size={14} strokeWidth={2.2} />
          <span>{rate}</span>
        </div>

        <CtaButton tone="purple" onClick={onOpen}>
          Open Swap Center
        </CtaButton>
      </div>

      <SwapIllustration
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        fromLabel={fromLabel}
        toLabel={toLabel}
      />
    </BannerShell>
  );
}
