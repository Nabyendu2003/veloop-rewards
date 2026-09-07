import styles from "./BannerShell.module.css";

/**
 * Shared chrome for every reward banner: width, responsive height
 * range, glass card surface, hover elevation/glow and staggered
 * entrance animation. Each banner supplies its own content + a
 * matching illustration via children.
 */
export default function BannerShell({
  children,
  className = "",
  accent = "gold",
  delay = 0,
  ...rest
}) {
  return (
    <section
      className={`${styles.shell} ${styles[accent]} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
      {...rest}
    >
      <span className={styles.sheen} aria-hidden="true" />
      <span className={styles.grid} aria-hidden="true" />
      {children}
    </section>
  );
}
