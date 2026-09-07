import ReferEarnBanner from "../components/ReferEarnBanner/ReferEarnBanner";
import SwapCenterBanner from "../components/SwapCenterBanner/SwapCenterBanner";
import BonusVEsBanner from "../components/BonusVEsBanner/BonusVEsBanner";
import CaptchaTasksBanner from "../components/CaptchaTasksBanner/CaptchaTasksBanner";
import ExchangeCenterBanner from "../components/ExchangeCenterBanner/ExchangeCenterBanner";
import styles from "./RewardsPage.module.css";

export default function RewardsPage() {
  const handleAction = (label) => () => {
    // No backend — replace with real navigation/route handlers.
    console.log(`[VELOOP Rewards] ${label} clicked`);
  };

  return (
    <main className={styles.page}>
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />

      <header className={styles.pageHeader}>
        <span className={styles.pageEyebrow}>VELOOP Rewards</span>
        <h1 className={styles.pageTitle}>
          Every way to <span className={styles.pageTitleAccent}>earn</span>,
          in one place
        </h1>
        <p className={styles.pageSubtitle}>
          Refer friends, swap currencies, unlock bonuses, complete tasks and
          redeem rewards — a premium rewards experience built for VELOOP.
        </p>
      </header>

      <div className={styles.stack}>
        <ReferEarnBanner onInvite={handleAction("Refer & Earn")} delay={0} />
        <SwapCenterBanner onOpen={handleAction("Swap Center")} delay={80} />
        <BonusVEsBanner onExplore={handleAction("Bonus VEs")} delay={160} />
        <CaptchaTasksBanner onStart={handleAction("Captcha Tasks")} delay={240} />
        <ExchangeCenterBanner onOpen={handleAction("Exchange Center")} delay={320} />
      </div>
    </main>
  );
}
