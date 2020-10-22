export function randomChoice() {
  const choiceArray: string[] = ["rock", "paper", "scissors"];
  return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}
