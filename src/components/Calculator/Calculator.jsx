import React, { useState } from "react";
import { InputWithButton } from "../InputWithButton/InputWithButton";
import styles from "./Calculators.module.css";

export function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState("Результат");

  const handleCalculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult("Помилка");
      return;
    }

    let res;
    switch (operation) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n2 !== 0 ? (n1 / n2).toFixed(2) : "∞";
        break;
      default:
        res = "Результат";
    }
    setResult(res);
  };

  return (
    <div id="numeric-calc" className={styles.section}>
      <h3 className={styles.title}>Калькулятор</h3>

      <div className={styles.calcRow}>
        <div className={styles.inputBox}>
          <InputWithButton
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="Введіть число"
          />
        </div>

        <div className={styles.operations}>
          {["+", "*", "-", "/"].map((op) => (
            <button
              key={op}
              className={`${styles.opBtn} ${operation === op ? styles.activeOp : ""}`}
              onClick={() => setOperation(op)}
            >
              {op}
            </button>
          ))}
        </div>

        <div className={styles.inputBox}>
          <InputWithButton
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Введіть число"
          />
        </div>

        <button className={styles.equalBtn} onClick={handleCalculate}>
          =
        </button>

        <div className={styles.resultCapsule}>{result}</div>
      </div>
    </div>
  );
}
