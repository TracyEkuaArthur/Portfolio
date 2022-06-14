import React from "react";
import styles from "../../styles/Header.module.css";

const index = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.Header_container}>
        <div className={styles.card1}>
          <div className={styles.text}>
            <p>Hello!</p>
          </div>
          <div className={styles.name}>
            <h2>I Am Tracy Arthur</h2>
          </div>
          <div className={styles.par}>
            <p>
              Doloremque impedit praesentium amet voluptas possimus, laudantium
            </p>
          </div>
          <div className={styles.per}>
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className={styles.butt}>
            <button>Contact Me</button>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.img}>
            <img src="/images/laptop-removebg-preview.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default index;
