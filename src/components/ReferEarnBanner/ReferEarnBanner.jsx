import { ShieldCheck, Zap, Gift as GiftIcon, Trophy } from "lucide-react";
import BannerShell from "../common/BannerShell";
import CtaButton from "../common/CtaButton";
import ReferIllustration from "./ReferIllustration";
import { referEarnData } from "../../data/rewardsData";
import styles from "./ReferEarnBanner.module.css";

const ICONS = { share: Zap, instant: GiftIcon, secure: ShieldCheck };

export default function ReferEarnBanner({ onInvite, delay }) {
  const { referralCode, youEarn, friendGets, unit, highlights } = referEarnData;

  return (
    <BannerShell accent="blue" className={styles.banner} delay={delay}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <Trophy size={14} strokeWidth={2.4} />
          Refer &amp; Earn
        </span>

        <h2 className={styles.heading}>
          Refer Friends,
          <br />
          <span className={styles.headingAccent}>Earn Rewards</span>
        </h2>

        <p className={styles.description}>
          Invite your friends to VELOOP Rewards and earn eligible VEs together
          when they join.
        </p>

        <div className={styles.rewardRow}>
          <div className={styles.rewardBlock}>
            <span className={styles.rewardLabel}>You earn</span>
            <span className={styles.rewardValue}>
              {youEarn} <em>{unit}</em>
            </span>
          </div>
          <div className={styles.rewardDivider} />
          <div className={styles.rewardBlock}>
            <span className={styles.rewardLabel}>Friend gets</span>
            <span className={styles.rewardValue}>
              {friendGets} <em>{unit}</em>
            </span>
          </div>
        </div>

        <CtaButton tone="blue" onClick={onInvite}>
          Invite Now
        </CtaButton>

        <ul className={styles.highlights}>
          {highlights.map((item) => {
            const Icon = ICONS[item.id];
            return (
              <li key={item.id} className={styles.highlightItem}>
                <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <ReferIllustration referralCode={referralCode} />
    </BannerShell>
  );
}
