import React from "react";
import styles from "./Timer.module.css";

interface Props {
  count: number;
}

export const Timer: React.FC<Props> = ({ count }) => {
  return <div className={styles.timer}>{count}</div>;
};
