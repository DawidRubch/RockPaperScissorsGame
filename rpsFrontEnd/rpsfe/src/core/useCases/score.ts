export function score(isYouOrEnemy: boolean, scoreCount: any) {
  return isYouOrEnemy ? scoreCount.player1.points : scoreCount.player2.points;
}
