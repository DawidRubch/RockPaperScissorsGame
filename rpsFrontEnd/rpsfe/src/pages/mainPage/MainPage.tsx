import React from "react";

import { RpsImage } from "../../components/MainPageImage/MainPageImage";
import { PlayBtn } from "../../components/PlayButton/PlayBtn"
import playBtnStyles from "../../components/PlayButton/PlayBtn.module.css";

export const MainPage: React.FC = () => {
  return (
    <div>
      <RpsImage />
      <PlayBtn
        redirection="/play-type"
        title="PLAY"
        cssClass={`${playBtnStyles.btn} ${playBtnStyles.playBtn}`}
      />
    </div>
  );
};
