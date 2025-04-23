export const getHighScore = () => {
  const highScore = localStorage.getItem("gameScore");
  if (highScore) {
    return parseInt(highScore, 10);
  }
  return 0;
}
