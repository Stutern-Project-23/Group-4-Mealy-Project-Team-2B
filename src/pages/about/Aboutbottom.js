import React from "react";
import styles from "./About.module.css";

const Aboutbottom = () => (
  <div className={styles.bottCont}>
    <div className={styles.bottom}>
      <div className={styles.textDiv}>
        <h3 className={styles.bottText}>
          Choose Mealy for a delightful dining experience that combines
          convenience, quality, and flavor. Explore our menu, place your order,
          and embark on a culinary journey like no other.
        </h3>

        <a href="/menu">
          <button type="button" className={styles.signupBtn}>
            Explore menu
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Aboutbottom;
