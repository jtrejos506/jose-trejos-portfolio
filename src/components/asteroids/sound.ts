export class Sound {
  private streams: HTMLAudioElement[] = [];
  private streamNum = 0;

  constructor(src: string, maxStreams = 1, volume = 1) {
    for (let i = 0; i < maxStreams; i++) {
      const audio = new Audio(src);
      audio.volume = volume;
      this.streams.push(audio);
    }
  }

  play() {
    this.streamNum = (this.streamNum + 1) % this.streams.length;
    this.streams[this.streamNum].play();
  }

  stop() {
    const s = this.streams[this.streamNum];
    s.pause();
    s.currentTime = 0;
  }
}
