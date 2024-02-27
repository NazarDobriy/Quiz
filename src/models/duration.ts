export class Duration {
  get start(): Date {
    return this._start;
  }

  get end(): Date {
    return this._end;
  }

  get duration(): number {
    return this.end.getTime() - this.start.getTime();
  }

  get seconds(): number {
    return Math.floor(this.duration / 1000);
  }

  constructor(
    private _start: Date,
    private _end: Date
  ) {}
}
