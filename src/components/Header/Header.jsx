import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleSaveName = () => {
    setSavedName(name);
    setModalOpen(false);
  };


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerInner}>


          <div className={styles.left}>
            <img className={styles.logo} src="./src/img/Logo.svg" alt="logo" />

            <div className={styles.dropdown}>
              <button
                className={styles.dropdownToggle}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Інтерактив
              </button>

              {dropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <a href="#numbers">Числовий</a>
                  <a href="#games">Ігровий</a>
                  <a href="#about">Ознайомчий</a>
                </div>
              )}
            </div>

            <ul className={styles.navList}>
              <li className={styles.navItem}>Наша команда</li>
              <li className={styles.navItem}>Контакти</li>
            </ul>
          </div>


          <div className={styles.right}>
            <p className={styles.welcome}>
              Вітаємо, {savedName || "гість"}
            </p>

            <button className={styles.button} onClick={toggleTheme}>
              {theme === "dark" ? "🌙 Тема" : "☀️ Тема"}
            </button>

            <button
              className={styles.button}
              onClick={() => setMenuOpen(true)}
            >
              Меню
            </button>
          </div>

        </div>


        {menuOpen && (
          <div className={styles.menu}>
            <button onClick={() => setMenuOpen(false)}>❌</button>

            <ul>
              <li>Інтерактив</li>
              <li>Наша команда</li>
              <li>Контакти</li>
            </ul>

            <ul>
              <li>Тел: +38 (123) 456 78 90</li>
              <li>Email: codingmagic@gmail.com</li>
            </ul>

            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        )}


        {modalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <button onClick={() => setModalOpen(false)}>❌</button>

              <p>Привіт!</p>
              <p>
                Ви потрапили на сайт інтерактивних ігор.
              </p>

              <p>Введіть своє ім’я:</p>

              <input
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше ім’я"
              />

              <button className={styles.button} onClick={handleSaveName}>
                Зберегти
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}