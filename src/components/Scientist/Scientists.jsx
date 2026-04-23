import React, { useState, useEffect } from "react";
import styles from "./Scientists.module.css";

export function Scientists() {
  const [scientists, setScientists] = useState([]);
  const [allScientists, setAllScientists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {

        const famousSurnames = ["Einstein", "Newton", "Curie", "Copernicus", "Planck", "Pauli", "Kepler", "Galilei", "Darwin", "Tesla"];
        
        const transformedData = data.map((user, index) => ({
          name: user.name.split(" ")[0],
          surname: famousSurnames[index] || "Scientist",
          born: 1800 + index * 12,
          dead: 1870 + index * 10,
          id: user.id
        }));
        
        setScientists(transformedData);
        setAllScientists(transformedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Помилка завантаження:", err);
        setLoading(false);
      });
  }, []);

 

  const filter19th = () => {
    setScientists(allScientists.filter(s => s.born >= 1801 && s.born <= 1900));
  };

  const findEinstein = () => {
    setScientists(allScientists.filter(s => s.surname === "Einstein"));
  };

  const sortAlphabet = () => {
    setScientists([...scientists].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const findSurnameC = () => {
    setScientists(allScientists.filter(s => s.surname.startsWith("C")));
  };

  const sortByYears = () => {
    setScientists([...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born)));
  };

  const deleteA = () => {
    setScientists(scientists.filter(s => !s.name.startsWith("A")));
  };

  const reset = () => setScientists(allScientists);

  if (loading) return <div className={styles.loader}>Завантаження через API...</div>;

  return (
    <div id="numeric-calc" className={styles.container}>
      <h2 className={styles.title}>Обери вченого/их</h2>
      
      <div className={styles.grid}>
        {scientists.map((s) => (
          <div key={s.id} className={styles.card}>
            <p className={styles.name}>{s.name} {s.surname}</p>
            <p className={styles.years}>{s.born} - {s.dead}</p>
          </div>
        ))}
      </div>

      <div className={styles.btnGrid}>
        <button className={styles.blackBtn} onClick={filter19th}>
          Які вчені народилися в 19 ст.
        </button>
        
        <button className={styles.blackBtn} onClick={findEinstein}>
          Знайти рік народження Albert Einstein
        </button>
        
        <button className={styles.blackBtn} onClick={sortAlphabet}>
          Відсортувати вчених за алфавітом
        </button>
        
        <button className={styles.blackBtn} onClick={findSurnameC}>
          Вчені, прізвища яких починаються на "C"
        </button>
        
        <button className={styles.blackBtn} onClick={sortByYears}>
          Відсортувати за прожитими роками
        </button>
        
        <button className={styles.blackBtn} onClick={deleteA}>
          Видалити всіх вчених на літеру "A"
        </button>
        
        <button className={`${styles.blackBtn} ${styles.reset}`} onClick={reset}>
          Скинути все
        </button>
      </div>
    </div>
  );
}