import React, { useState } from 'react';
import styles from './TimeCalculator.module.css';

export function TimeCalculator() {
  const [inputValue, setInputValue] = useState('');
  const [timeResult, setTimeResult] = useState('0 дн. 00:00:00');

  const handleConvert = () => {
    let seconds = parseInt(inputValue);
    if (isNaN(seconds)) return;

    const days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const formatted = `${days} дн. ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    setTimeResult(formatted);
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Калькулятор часу</h3>
      
      <div className={styles.calcRow}>

        <div className={styles.timeInputContainer}>
          <input 
            type="text"
            className={styles.timeInput}
            placeholder="Введіть число"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className={styles.searchBtn} onClick={handleConvert}>



            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>



            </svg>
          </button>
        </div>


        <div className={styles.dotsSeparator}>
          ...........................
        </div>


        <div className={styles.timeValueDisplay}>
          {timeResult}
        </div>
      </div>
    </div>
  );
}