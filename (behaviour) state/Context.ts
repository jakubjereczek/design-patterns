import { BufferingState, IdleState, PlayingState, State } from './State';

export class AudioPlayer {
  private time: number = 0;

  private state: State;

  constructor() {
    this.state = new IdleState(this);
  }

  changeState(state: State) {
    this.state = state;
  }

  onConnectionLost = () => {
    this.changeState(new BufferingState(this));
  };
  onConnectionRestored = () => {
    this.changeState(new PlayingState(this));
  };

  play() {
    this.state.play();
  }
  pause() {
    this.state.pause();
  }
  rewind() {
    this.state.rewind();
  }
  forward() {
    this.state.forward();
  }

  setTime(time: number) {
    this.time += time;
    console.log(`Current time ${this.time}s`)
  }
  startPlayback() {
    console.log(`Playback started.`)
  }
  stopPlayback() {
    console.log(`Playback Stopped.`)
  }
  setCodec(payload: string) {
    console.log(`Codec set to ${payload}`)
  }
}
