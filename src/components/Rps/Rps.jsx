import { useState } from "react";
import styles from "./RPS.module.css";

export function RPS() {
  const [text, setText] = useState("");
  const [compChoice, setCompChoice] = useState("");
  const [showComp, setShowComp] = useState(false);

  const play = (user) => {
    const arr = ["Камінь", "Ножиці", "Папір"];
    const comp = arr[Math.floor(Math.random() * 3)];

    setCompChoice(comp);

    setText(
      user === comp
        ? "draw"
        : (user === "Камінь" && comp === "Ножиці") ||
          (user === "Ножиці" && comp === "Папір") ||
          (user === "Папір" && comp === "Камінь")
        ? "win"
        : "lose"
    );

    setShowComp(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Камінь - ножиці - папір</h2>

      <div className={styles.buttons}>
        <button className={styles.choiceBtn} onClick={() => play("Камінь")}>🪨
        </button>

        <button className={styles.choiceBtn} onClick={() => play("Ножиці")}>✂️
        </button>


        <button className={styles.choiceBtn} onClick={() => play("Папір")}>📃
        </button>
      </div>

      {text && (
        <p
          className={`${styles.result} ${
            text === "win"
              ? styles.win
              : text === "lose"
              ? styles.lose
              : styles.draw
          }`}
        >
          {text === "win"
            ? "Ти виграв(ла) 🎉"
            : text === "lose"
            ? "Ти програв(ла)"
            : "Нічия"}
        </p>
      )}

      <button
        className={styles.showBtn}
        onClick={() => setShowComp(!showComp)}
      >
        Варіант комп’ютера
      </button>

      {showComp && compChoice && (
        <p className={styles.computer}>
          Комп’ютер вибрав: {compChoice}
        </p>
      )}
    </div>
  );
}