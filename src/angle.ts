/**
 * represents an angle.  Current value is stored internally in turns (0 - 1)
 */

export class Angle {

    private angle: number = 0;

    public constructor() {
        return this;
    }

    public init(turns: number): Angle {
        this.angle = turns;
        return this;
    }

    public get turns(): number {
        return this.angle;
    }

    public get degrees(): number {
        return this.turns * 360;
    }

    public get radians(): number {
        return this.turns * Math.PI * 2;
    }

    public set turns(turns: number) {
        this.angle = turns;
    }

    public set degrees(degrees: number) {
        this.angle = degrees / 360;
    }

    public set radians(radians: number) {
        this.angle = radians / (Math.PI * 2);
    }

}