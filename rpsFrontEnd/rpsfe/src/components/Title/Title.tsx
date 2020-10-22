import React from "react";
import styles from "./Title.module.css";

interface Props {
  title: string;
  cssClass: string;
}

export const Title: React.FC<Props> = ({ title, cssClass }) => {
  return (
    <div className={styles.container}>
      <p className={cssClass}>{title}</p>
    </div>
  );
};

