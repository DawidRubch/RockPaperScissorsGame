export function timer(setTime: any) {
  return setInterval(() => {
    setTime((time: number) => (time !== 0 ? (time -= 1) : (time = 0)));
  }, 1000);
}
