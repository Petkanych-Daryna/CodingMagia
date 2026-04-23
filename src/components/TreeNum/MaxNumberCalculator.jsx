import React, { useState, useEffect } from 'react';
import styles from './MaxNumberCalculator.module.css'; 

export function MaxNumberCalculator() {
  const [numbers, setNumbers] = useState({ n1: '', n2: '', n3: '' });
  const [max, setMax] = useState('(число)');

  const handleChange = (e, field) => {
    setNumbers({ ...numbers, [field]: e.target.value });
  };

  useEffect(() => {
    const vals = Object.values(numbers)
      .map(v => parseFloat(v))
      .filter(v => !isNaN(v));

    if (vals.length > 0) {
      setMax(Math.max(...vals));
    } else {
      setMax('(число)');
    }
  }, [numbers]);

  return (
    <div className={styles.maxNumContainer}>
      <h3 className={styles.maxTitle}>Введіть 3 числа</h3>
      
      <div className={styles.inputsRow}>
        <input 
          type="number"
          className={styles.maxInput} 
          placeholder="Введіть число" 
          value={numbers.n1}
          onChange={(e) => handleChange(e, 'n1')}
        />
        <input 
          type="number"
          className={styles.maxInput} 
          placeholder="Введіть число" 
          value={numbers.n2}
          onChange={(e) => handleChange(e, 'n2')}
        />
        <input 
          type="number"
          className={styles.maxInput} 
          placeholder="Введіть число" 
          value={numbers.n3}
          onChange={(e) => handleChange(e, 'n3')}
        />
      </div>

      <p className={styles.maxResultText}>
        Найбільше число, яке ви ввели - <span className={styles.maxValue}>{max}</span>
      </p>
    </div>
  );
}