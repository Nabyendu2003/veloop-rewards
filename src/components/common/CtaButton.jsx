import { ArrowRight } from "lucide-react";
import styles from "./CtaButton.module.css";

/**
 * Shared CTA button used across all reward banners.
 * `tone` selects the accent (gold | blue | purple) so each banner
 * can stay visually distinct while sharing interaction states.
 */
export default function CtaButton({
  children,
  tone = "gold",
  onClick,
  icon: Icon = ArrowRight,
  as: Component = "button",
  ...rest
}) {
  return (
    <Component
      className={`${styles.cta} ${styles[tone]}`}
      onClick={onClick}
      type={Component === "button" ? "button" : undefined}
      {...rest}
    >
      <span>{children}</span>
      <Icon size={16} strokeWidth={2.5} className={styles.icon} aria-hidden="true" />
    </Component>
  );
}
