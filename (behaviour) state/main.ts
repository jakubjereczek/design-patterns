import { AudioPlayer } from "./Context";

const player = new AudioPlayer();

console.log("Initial state:");
player.play();  // "Player is now playing.", "Playback started.", "Codec set to MPEG-4 AAC"

console.log("\nSimulating connection loss:");
player.onConnectionLost(); 
player.play();  // "Cannot play while buffering."
player.pause(); // "Cannot pause while buffering."
player.rewind(); // "Cannot rewind while buffering."
player.forward(); // "Cannot forward while buffering."

console.log("\nSimulating connection restoration:");
player.onConnectionRestored(); 
player.play();  // "Already playing."
player.rewind(); // "Rewinding while playing.", "Current time: -15s"
player.forward(); // "Forwarding while playing.", "Current time: 0s"

console.log("\nPausing playback:");
player.pause(); // "Pausing playback.", "Playback started."

console.log("\nOperations after pause:");
player.rewind(); // "Rewinding from paused state.", "Current time: -15s"
player.forward(); // "Forwarding from paused state.", "Current time: 0s"