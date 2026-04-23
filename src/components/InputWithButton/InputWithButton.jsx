import React from "react";
import styles from "./InputWithButton.module.css";

export function InputWithButton({
  value,
  onChange,
  placeholder,
  onClick,
  buttonText,
}) {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {buttonText && (
        <button className={styles.button} onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}