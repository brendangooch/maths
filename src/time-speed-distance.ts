/**
 * 
 * obtain the time, speed or distance by setting the other 2 parameters
 * 
 * usage:
 * 
 * const time = new TimeSpeedDistance().setDistance(1000).setSpeed(1).time;
 * const speed = new TimeSpeedDistance().setDistance(1000).setTime(100).speed;
 * const distance = new TimeSpeedDistance().setSpeed(1).setTime(100).distance;
 * 
 * returns null if either required param is missing
 * 
 */

export class TimeSpeedDistance {

    private _time: number = 0;
    private _speed: number = 0;
    private _distance: number = 0;

    public constructor() {
        return this;
    }

    // time = distance / speed
    public get time(): number {
        if (this._distance === 0) return 0;
        if (this._speed === 0) return 0;
        return this._distance / this._speed;
    }

    // speed = distance / time
    public get speed(): number {
        if (this._distance === 0) return 0;
        if (this._time === 0) return 0;
        return this._distance / this._time;
    }

    // distance = speed * time
    public get distance(): number {
        if (this._speed === 0) return 0;
        if (this._time === 0) return 0;
        return this._speed * this._time;
    }

    public setTime(ms: number): TimeSpeedDistance {
        this._time = ms;
        return this;
    }

    public setSpeed(unitsPerMs: number): TimeSpeedDistance {
        this._speed = unitsPerMs;
        return this;
    }

    public setDistance(units: number): TimeSpeedDistance {
        this._distance = units;
        return this;
    }

}