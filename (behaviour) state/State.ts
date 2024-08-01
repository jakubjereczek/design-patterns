import { AudioPlayer } from './Context';

export abstract class State {
  constructor(protected player: AudioPlayer) {}

  abstract play(): void;
  abstract pause(): void;
  abstract rewind(): void;
  abstract forward(): void;
}

export class IdleState extends State {
  play(): void {
    console.log('Player is now playing.');
    this.player.changeState(new PlayingState(this.player));
    this.player.startPlayback();
    this.player.setCodec('MPEG-4 AAC');
  }

  pause(): void {
    console.log('Cannot pause. Player is idle.');
  }

  rewind(): void {
    console.log('Rewinding from idle state.');
    this.player.setTime(-15);
  }

  forward(): void {
    console.log('Forwarding from idle state.');
    this.player.setTime(15);
  }
}

export class BufferingState extends State {
  play(): void {
    console.log('Cannot play while buffering.');
  }

  pause(): void {
    console.log('Cannot pause while buffering.');
  }

  rewind(): void {
    console.log('Cannot rewind while buffering.');
  }

  forward(): void {
    console.log('Cannot forward while buffering.');
  }
}

export class PausedState extends State {
  play(): void {
    console.log('Resuming playback.');
    this.player.changeState(new PlayingState(this.player));
    this.player.startPlayback();
  }

  pause(): void {
    console.log('Cannot pause. Player is already paused.');
  }

  rewind(): void {
    console.log('Rewinding from paused state.');
    this.player.setTime(-15);
  }

  forward(): void {
    console.log('Forwarding from paused state.');
    this.player.setTime(15);
  }
}

export class PlayingState extends State {
  play(): void {
    console.log('Already playing.');
  }

  pause(): void {
    console.log('Pausing playback.');
    this.player.changeState(new PausedState(this.player));
    this.player.startPlayback();
  }

  rewind(): void {
    console.log('Rewinding while playing.');
    this.player.setTime(-15);
  }

  forward(): void {
    console.log('Forwarding while playing.');
    this.player.setTime(15);
  }
}
