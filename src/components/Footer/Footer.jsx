import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer id="footer-section" className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.logoSection}>
          <img src="./src/img/Logo.svg" alt="Logo" className={styles.logo} /> 

        </div>


        <div className={styles.contacts}>
          <p>Тел: +38 (123) 456 78 90</p>
          <p>E-Mail: codingmagic@gmail.com</p>
          <p>Facebook: CodingMagic</p>
          <p>Twitter: CodingMagic</p>
          <p>Instagram: CodingMagic</p>
        </div>


        <div className={styles.subscribe}>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Ваша ел. адреса..." className={styles.input} />
            <button className={styles.subBtn}>Підписатись</button>
          </div>
          <p className={styles.hint}>
            *Підписавшись, Ви зможете отримувати інформацію про новинки на сайті
          </p>
        </div>
      </div>
    </footer>
  );
}