import React, { useState, useEffect } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styles from "./PlayPage.module.css";
import titleStyles from "../../components/Title/Title.module.css";
import pickerContainerStyles from "../../components/PickerContainer/PickerContainer.module.css";

import RockSvg from "../../images/rock.svg";
import PaperSvg from "../../images/paper.svg";
import ScissorsSvg from "../../images/scissors.svg";

import { PickerContainer, Timer, Title, ScoreTable } from "../../components";
import { Socket } from "../../core/SocketClient/socket";
import {
  changePointsCount,
  emitChoice,
  endGame,
  enemyLeft,
  makeRoundEnd,
} from "../../core/socketUseCases";
import { randomChoice, timer } from "../../core/useCases";

const PlayPage = () => {
  let history = useHistory();
  const socketID: string = Socket.socket.id;
  const choiceRandom: string = randomChoice();
  const [time, setTime] = useState<number>(10);
  const [choice, setChoice] = useState<string>("");
  const [won, setWon] = useState<boolean>();
  const [endRound, setEndRound] = useState<boolean>();
  const [pointsCount, setPointsCount] = useState({
    player1: { points: 0 },
    player2: { points: 0 },
  });

  useEffect(() => {
    emitChoice(choice);
    makeRoundEnd(setChoice, setTime);
    setEndRound(true);
    changePointsCount(setPointsCount);
  }, [choice]);

  useEffect(() => {
    if (choice === "" && time === 0) {
      setChoice(choiceRandom);
      setTime(10);
    }
  }, [time, choice, choiceRandom]);

  useEffect(() => {
    const interval = timer(setTime);

    return () => clearInterval(interval);
  }, [endRound]);

  useEffect(() => {
    endGame(socketID, setWon);
  }, [socketID]);

  useEffect(() => {
    enemyLeft(history, won);
  }, [won, history]);

  return won === undefined ? (
    <div>
      <Title title="SHOOT" cssClass={titleStyles.text} />
      <Timer count={time} />
      <ScoreTable scoreCount={pointsCount} socketId={socketID} />
      <div className={styles.PickContainer}>
        <PickerContainer
          btnCssClass={`${pickerContainerStyles.button} ${pickerContainerStyles.rock}`}
          imgCssClass={pickerContainerStyles.svg}
          svg={RockSvg}
          onPressed={() => {
            setChoice("rock");
          }}
        />
        <PickerContainer
          btnCssClass={`${pickerContainerStyles.button} ${pickerContainerStyles.paper}`}
          imgCssClass={pickerContainerStyles.svg}
          svg={PaperSvg}
          onPressed={() => {
            setChoice("paper");
          }}
        />
        <PickerContainer
          btnCssClass={`${pickerContainerStyles.button} ${pickerContainerStyles.scissors}`}
          imgCssClass={pickerContainerStyles.svg}
          svg={ScissorsSvg}
          onPressed={() => {
            setChoice("scissors");
          }}
        />
      </div>
    </div>
  ) : won ? (
    <div className={styles.finalScreen}>You won</div>
  ) : (
    <div className={styles.finalScreen}>You lost</div>
  );
};
export default withRouter(PlayPage);
