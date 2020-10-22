import React from "react";
import styles from "./PlayBtn.module.css";
import { Redirect } from "react-router-dom";

interface Props {
  cssClass: string;
  title: string;
  information?: number;
  redirectOrNot: boolean;
  onPressed: () => void;
}

export const PlayTypeBtn: React.FC<Props> = ({
  cssClass,
  title,
  information,
  onPressed,
  redirectOrNot = false,
}) => {
  return redirectOrNot ? (
    <Redirect to={{ pathname: "/play-page", state: information }} />
  ) : (
    <button className={cssClass} onClick={onPressed}>
      <p className={styles.txt}>{title}</p>
    </button>
  );
};
