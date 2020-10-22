import React from "react";
import styles from "./PlayBtn.module.css";
import { Link } from "react-router-dom";

interface Props {
  cssClass: string;
  title: string;
  redirection: string;
  information?: number;
  onPressed?: () => void | undefined;
}

export const PlayBtn: React.FC<Props> = ({
  cssClass,
  title,
  redirection,
  information,
}) => {
  return (
    <Link
      className={styles.Link}
      to={{ pathname: redirection, state: information }}
    >
      <button className={cssClass}>
        <p className={styles.txt}>{title}</p>
      </button>
    </Link>
  );
};
