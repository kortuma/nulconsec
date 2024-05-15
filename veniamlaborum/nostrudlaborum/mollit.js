// Assuming 'updatePlayerStatus' is a function that updates the player's status
const isPlayerActive = game.directionOrQueuedMove;
if (isPlayerActive) {
  updatePlayerStatus('moving');
} else {
  updatePlayerStatus('idle');
}
