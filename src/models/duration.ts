export class Duration {
  constructor (
    private _start: Date,
    private _end: Date
  ) {}

  get start(): Date {
      return this._start;
  }

  get end(): Date {
      return this._end;
  }

  get duration(): number {
      return this.end.getTime() - this.start.getTime();
  }

  get days(): number {
      return Math.floor(this.duration / 1000 / 60 / 60 / 24) % 365;
  }

  get hours(): number {
      return Math.floor(this.duration / 1000 / 60 / 60) % 24;
  }

  get minutes(): number {
      return Math.floor(this.duration / 1000 / 60) % 60;
  }

  get seconds(): number {
      return Math.floor(this.duration / 1000) % 60;
  }

  public toString(): string {
      let durationString: string = "";
      const durationCollection: Map<string, number> = new Map();

      durationCollection.set('days', this.days);
      durationCollection.set('hours', this.hours);
      durationCollection.set('min', this.minutes);
      durationCollection.set('sec', this.seconds);

      for (const [key, value] of durationCollection.entries()) {
          durationString += `${value ? `${value} ${key} ` : ''}`;
      }
      
      return durationString.trim();
  }

}