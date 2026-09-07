import { Sparkles, CheckCircle2, Circle } from "lucide-react";
import BannerShell from "../common/BannerShell";
import CtaButton from "../common/CtaButton";
import BonusIllustration from "./BonusIllustration";
import { bonusVEsData } from "../../data/rewardsData";
import styles from "./BonusVEsBanner.module.css";

export default function BonusVEsBanner({ onExplore, delay }) {
  const { balance, tasks } = bonusVEsData;

  return (
    <BannerShell accent="gold" className={styles.banner} delay={delay}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <Sparkles size={14} strokeWidth={2.4} />
          Bonus Opportunities
        </span>

        <h2 className={styles.heading}>
          Boost Your <span className={styles.headingAccent}>VE Balance</span>
        </h2>

        <p className={styles.description}>
          Complete eligible activities and unlock additional VEs through
          special bonus opportunities.
        </p>

        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id} className={styles.taskItem}>
              {task.done ? (
                <CheckCircle2 size={16} strokeWidth={2.2} className={styles.taskDone} />
              ) : (
                <Circle size={16} strokeWidth={2.2} className={styles.taskPending} />
              )}
              <div>
                <span className={styles.taskLabel}>{task.label}</span>
                <span className={styles.taskDesc}>{task.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <CtaButton tone="gold" onClick={onExplore}>
          Explore Bonuses
        </CtaButton>
      </div>

      <BonusIllustration balance={balance} />
    </BannerShell>
  );
}
