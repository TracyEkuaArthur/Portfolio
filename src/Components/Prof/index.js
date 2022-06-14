import React from "react";
import styles from "../../styles/Prof.module.css";

const index = () => {
  return (
    <div className={styles.Prof}>
      <div className={styles.Prof_container}>
        <div className={styles.card1}>
          <div className={styles.card}>
            <img src="/images/sun-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className={styles.card1}>
          <div className={styles.text}>
            <h3>I am Professional</h3> <span style={{color:"#DD6377", fontWeight:"800"}}>Web Developer</span >
          </div>
          
          <div className={styles.para}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto cumque cupiditate temporibus labore nemo voluptatem
              eaque placeat ab, molestias quas iure vero laborum soluta deserunt
              eum minima. Iusto, obcaecati eveniet!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
              quia nostrum aliquid saepe adipisci beatae aspernatur accusantium
              delectus iste, repellendus nesciunt modi asperiores maiores
              laborum voluptas tenetur, nemo sed quas.
            </p>
          </div>

          <div>
            <br />
            <table style={{ display: "flex", width: "20rem", justifyContent: "space-between", margin: "0 0 0 0", color: "white"}}>
             <tr className={styles.row} style={{ display: "flex", flexDirection: "column" }}>
                <td>Name</td>
                <td>Address</td>
                <td>Phone</td>
                <td>E-mail</td>
                <td>Freelace</td>
              </tr>
              <tr className={styles.row} style={{ display: "flex", flexDirection: "column", color: "white" }}>
                <td>Tracy Arthur</td>
                <td>Adisadel Estate Block/100h</td>
                <td>054890350</td>
                <td>tracyekuaarthur@gmail.com</td>
                <td>Acotion</td>
              </tr>
            </table>
            <div className={styles.cv}>
              <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
