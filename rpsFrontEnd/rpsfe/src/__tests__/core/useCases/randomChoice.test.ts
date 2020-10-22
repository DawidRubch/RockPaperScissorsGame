import { randomChoice } from "../../../core/useCases";

const tChoices = ["rock", "paper", "scissors"];
describe("randomChoice", () => {
  test("should return random choice", () => {
    const tRandomChoice = randomChoice();
    expect(tChoices.includes(tRandomChoice)).toBe(true);
  });
});
