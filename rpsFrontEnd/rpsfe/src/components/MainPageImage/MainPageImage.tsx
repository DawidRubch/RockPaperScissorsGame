import React from "react";
import rpsImage from "../../images/neonRps.svg";
import styles from "./MainPageImage.module.css";
import {Title} from "../Title/Title";
import titleStyles from "../Title/Title.module.css";

export const RpsImage: React.FC = () => {
  return (
    <div>
      <Title cssClass={titleStyles.text} title="ROCK PAPER SCISSORS" />
      <img src={rpsImage} className={styles.neonImage} alt=""></img>
    </div>
  );
};

