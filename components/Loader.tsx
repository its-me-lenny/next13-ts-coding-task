import React from "react";
import styles from "@/styles/styles.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loading;
