import React, { useEffect, useState } from "react";
import { PlayTypeBtn } from "../../components/PlayButton/PlayTypeButton";
import playBtnStyles from "../../components/PlayButton/PlayBtn.module.css";
import titleStyles from "../../components/Title/Title.module.css";
import { Title } from "../../components/Title/Title";

import { initiateSocket, emitGameType, startGame } from "../../core/socketUseCases";
export const PlayTypePage: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const [gameType, setGameType] = useState<number>(0);

  useEffect(() => {
    initiateSocket();
  }, []);

  useEffect(() => {
    emitGameType(gameType);
  }, [gameType]);

  useEffect(() => {
    startGame(setRedirect);
  }, []);

  return (
    <div>
      <Title
        cssClass={`${titleStyles.text} ${titleStyles.playTypeText}`}
        title="PICK YOUR GAME"
      />
      <PlayTypeBtn
        onPressed={() => {
          setGameType(1);
        }}
        redirectOrNot={redirect}
        information={1}
        title="BEST OF 1"
        cssClass={`${playBtnStyles.btn} ${playBtnStyles.bo1}`}
      />
      <PlayTypeBtn
        onPressed={() => {
          setGameType(3);
        }}
        information={3}
        redirectOrNot={redirect}
        title="BEST OF 3"
        cssClass={`${playBtnStyles.btn} ${playBtnStyles.bo3}`}
      />
    </div>
  );
};
