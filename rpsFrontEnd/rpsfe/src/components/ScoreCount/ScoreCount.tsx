import React from "react";
import { score } from "../../core/useCases/score";
import styles from "./ScoreCount.module.css";
interface ScoreTableProps {
  scoreCount: any;
  socketId: any;
}
interface ScoreCountProps {
  playerName: string;
  playerScoreCount: number;
  cssClass: string;
}

export const ScoreTable: React.FC<ScoreTableProps> = ({
  scoreCount,
  socketId,
}) => {
  const YouScore = score(scoreCount.player1.id === socketId, scoreCount);
  const EnemyScore = score(scoreCount.player1.id !== socketId, scoreCount);

  return (
    <div className={styles.parentClass}>
      <ScoreCount
        playerName={"You"}
        playerScoreCount={YouScore}
        cssClass={`${styles.scoreCount} ${styles.you}`}
      />
      <ScoreCount
        playerName={"Enemy"}
        playerScoreCount={EnemyScore}
        cssClass={`${styles.scoreCount} ${styles.enemy}`}
      />
    </div>
  );
};

const ScoreCount: React.FC<ScoreCountProps> = ({
  playerName,
  playerScoreCount,
  cssClass,
}) => {
  return (
    <div className={cssClass}>
      <div>{playerName}</div>
      <div>{playerScoreCount}</div>
    </div>
  );
};
