import { useState } from "react";
import styles from "./GuessNum.module.css";
import { InputWithButton } from "../InputWithButton/InputWithButton";

export function GuessNum() {
const [randomNum, setRandomNum] = useState(
  () => Math.floor(Math.random() * 10) + 1
);

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

const handleCheck = () => {
  const numGuess = Number(guess);

  if (numGuess === randomNum) {
    setMessage("Вітаю, ви вгадали число!");

    setRandomNum(Math.floor(Math.random() * 10) + 1);
    setGuess(""); 
  } else if (numGuess < randomNum) {
    setMessage("Загадане число більше");
  } else {
    setMessage("Загадане число менше");
  }
};

  return (
    <div>
      <h2 className={styles.title}>
        Вгадай число, яке загадав комп’ютер
      </h2>

      <div className={styles.row}>
        <InputWithButton
          value={guess}
          placeholder="Введіть число"
          onChange={(e) => setGuess(e.target.value)}
          onClick={handleCheck}
          buttonText="Перевірити"
        />

        {message && (
          <p className={styles.result}>{message}</p>
        )}
      </div>
    </div>
  );
}