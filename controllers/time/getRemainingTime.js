let testStartTime = new Date().getTime();
let totalDuration = 30 * 60;
let remainingTime = totalDuration; 

const timerInterval = setInterval(() => {
  const currentTime = new Date().getTime();
  const elapsedTimeInSeconds = Math.floor((currentTime - testStartTime) / 1000);
  remainingTime = Math.max(totalDuration - elapsedTimeInSeconds, 0); 
}, 1000);

exports.getRemainingTime = (req, res) => {
  res.status(200).json({ remainingTime });
};

process.on("SIGINT", () => {
  clearInterval(timerInterval);
  process.exit();
});
