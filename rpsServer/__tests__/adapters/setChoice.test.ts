import { setChoice } from "../../src/adapters";
const express = require("express");
const http = require("http");
const socketio = require("socket.io");

import { Game, Player } from "../../src/entities";
import { test, expect, describe } from "@jest/globals";

let tPlayer1: Player = new Player("123test");
let tPlayer2: Player = new Player("231test");

let tGame: Game = new Game(3);
tGame.playersArray = [tPlayer1, tPlayer2];

const app = express();
const httpserver = http.Server(app);
const io = socketio(httpserver);
describe("setChoice", () => {
  test("should add Points to player1", () => {
    tPlayer1.choice = "paper";
    tPlayer2.choice = "rock";
    setChoice(tGame, io);
    expect(tPlayer1.points).toBe(1);
  });

  test("should not add Points", () => {
    tPlayer1.points = 0;
    tPlayer1.choice = "rock";
    tPlayer2.choice = "rock";
    setChoice(tGame, io);

    expect(tPlayer1.points).toBe(0);
    expect(tPlayer2.points).toBe(0);
  });
});
