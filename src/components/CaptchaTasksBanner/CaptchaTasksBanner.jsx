import { ShieldCheck } from "lucide-react";
import BannerShell from "../common/BannerShell";
import CtaButton from "../common/CtaButton";
import CaptchaIllustration from "./CaptchaIllustration";
import { captchaTasksData } from "../../data/rewardsData";
import styles from "./CaptchaTasksBanner.module.css";

export default function CaptchaTasksBanner({ onStart, delay }) {
  const { sampleCode, reward, unit, steps } = captchaTasksData;

  return (
    <BannerShell accent="purple" className={styles.banner} delay={delay}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <ShieldCheck size={14} strokeWidth={2.4} />
          Task-based Earning
        </span>

        <h2 className={styles.heading}>
          Solve Captchas.
          <br />
          <span className={styles.headingAccent}>Earn Gems.</span>
        </h2>

        <p className={styles.description}>
          Complete available captcha tasks accurately and earn eligible{" "}
          {unit.toLowerCase()} for each submission.
        </p>

        <div className={styles.flow}>
          {steps.map((step, i) => (
            <span key={step} className={styles.flowStep}>
              {step}
              {i < steps.length - 1 && <span className={styles.flowArrow}>→</span>}
            </span>
          ))}
        </div>

        <CtaButton tone="purple" onClick={onStart}>
          Start Task · +{reward} {unit}
        </CtaButton>
      </div>

      <CaptchaIllustration sampleCode={sampleCode} />
    </BannerShell>
  );
}
