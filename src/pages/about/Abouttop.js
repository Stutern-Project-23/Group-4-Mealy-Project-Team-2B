import React from "react";
import headingStyles from "./About.module.css";
import styles from "./aboutTop.module.css";

const Abouttop = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h2 className={headingStyles.mainHeading}>About Us</h2>
      <p className={styles.paragraph}>
        Welcome to Mealy, your go-to food delivery website that strives to
        provide you with the best culinary experience right at your doorstep.
        With a focus on quality, convenience, and a wide range of delectable
        options, Mealy aims to make your dining experience a memorable one. In
        this article, we will explore the services we offer and what sets us
        apart from the competition.
      </p>
    </div>
  </div>
);
export default Abouttop;
