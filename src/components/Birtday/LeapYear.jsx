import { useState } from "react";
import styles from "./LeapYear.module.css";
import { InputWithButton } from "../InputWithButton/InputWithButton";

export function LeapYear() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    const numYear = Number(year);

    const isLeap =
      (numYear % 4 === 0 && numYear % 100 !== 0) || numYear % 400 === 0;

    setResult(isLeap);
  };

  return (
    <div className={styles.divBox}>
      <h2 className={styles.title}>Перевір в який рік ти народився</h2>

      <div className={styles.row}>
        <InputWithButton
          value={year}
          placeholder="Введіть рік"
          onChange={(e) => setYear(e.target.value)}
          onClick={handleCheck}
          buttonText="Перевірити"
        />

        {result !== null && (
          <p className={styles.result}>
            {result
              ? "Ви народилися у високосний рік 🎉"
              : "Ви народилися не у високосний рік"}
          </p>
        )}
      </div>
    </div>
  );
}
