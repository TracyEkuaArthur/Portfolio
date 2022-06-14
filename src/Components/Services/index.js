import React from "react";
import styles from "../../styles/Services.module.css";
import { GrTestDesktop } from "react-icons/gr";
import {MdQrCodeScanner} from "react-icons/md";
import {GiAbstract054} from "react-icons/gi";

const index = () => {
  return (
    <div className={styles.Services}>
      {/* <div className={styles.head}>
        <h2>My</h2>
      </div> */}
      <div className={styles.hd}>
        <h2>Services</h2>
      </div>
      <div className={styles.Services_container}>
        <div className={styles.card1}>
          <div className={styles.icons}>
            <GrTestDesktop size={50} />
          </div>
          <div className={styles.alpha}>
            <h3>Web Development</h3>
          </div>
          <div className={styles.art}>
            <p>Lorem ipsum dolor sit amet consecter adipisicing .</p>
          </div>
          <div className={styles.off}>
            <p>Eeniet necessitatibus dolorum, delectus assumeal.</p>
          </div>
          <div className={styles.tum}>
            <p>quaerat quo voluptatum nobis qui.</p>
          </div>
        </div>
        <div className={styles.card2}>
        <div className={styles.icons}>
            <MdQrCodeScanner size={50} />
          </div>
          <div className={styles.alpha}>
            <h3>Friendly Design</h3>
          </div>
          <div className={styles.art}>
            <p>Lorem ipsum dolor sit amet consecter adipisicing .</p>
          </div>
          <div className={styles.off}>
            <p>Eeniet necessitatibus dolorum, delectus assumeal.</p>
          </div>
          <div className={styles.tum}>
            <p>quaerat quo voluptatum nobis qui.</p>
          </div>
        </div>
        <div className={styles.card3}>
        <div className={styles.icons}>
            <GiAbstract054 size={50}/>
          </div>
          <div className={styles.alpha}>
            <h3>Clean Code</h3>
          </div>
          <div className={styles.art}>
            <p>Lorem ipsum dolor sit amet consecter adipisicing .</p>
          </div>
          <div className={styles.off}>
            <p>Eeniet necessitatibus dolorum, delectus assumeal.</p>
          </div>
          <div className={styles.tum}>
            <p>quaerat quo voluptatum nobis qui.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
