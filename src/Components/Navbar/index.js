import React from 'react'
import styles from "../../styles/Navbar.module.css";

 const index = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <h2>Tracy</h2>
      </div>
      <div className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>

    </div>
  );
}
export default index;