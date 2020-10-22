import React from "react";
import styles from "./App.module.css";
import layoutImage from "./images/layout.png";
import { MainPage } from "./pages/mainPage/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PlayTypePage } from "./pages/playType/PlayTypePage";
import PlayPage from "./pages/playPage/PlayPage";

export const App: React.FC = () => {
  return (
    <Router>
      <div
        className={styles.App}
        style={{ backgroundImage: `url(${layoutImage})` }}
      >
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/play-type" exact component={PlayTypePage} />
          <Route path="/play-page" exact component={PlayPage} />
        </Switch>
      </div>
    </Router>
  );
};
