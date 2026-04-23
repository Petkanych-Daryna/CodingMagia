import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Популярні інтерактивні ігри
        </h1>
      </div>
    </section>
  );
}