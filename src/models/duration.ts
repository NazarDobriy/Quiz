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

    get daysDuration(): number {
        return Math.floor(this.duration / 1000 / 60 / 60 / 24) % 365;
    }

    get hoursDuration(): number {
        return Math.floor(this.duration / 1000 / 60 / 60) % 24;
    }

    get minutesDuration(): number {
        return Math.floor(this.duration / 1000 / 60) % 60;
    }

    get secondsDuration(): number {
        return Math.floor(this.duration / 1000) % 60;
    }

    get stringDuration(): string {
        let durationString: string = "";
        const durationCollection: Map<string, number> = new Map();

        durationCollection.set('days', this.daysDuration);
        durationCollection.set('hours', this.hoursDuration);
        durationCollection.set('min', this.minutesDuration);
        durationCollection.set('sec', this.secondsDuration);

        for (const [key, value] of durationCollection.entries()) {
            durationString += `${value ? `${value} ${key} ` : ''}`;
        }
        
        return durationString.trim();
    }

}