/**
 *
 */

import { TimeSpeedDistance } from "./time-speed-distance.js";
import { Vector2D } from "./vector-2d.js";

export class QuadraticBezierCurve {

    private s: Vector2D = new Vector2D(0, 0);
    private c: Vector2D = new Vector2D(0, 0);
    private e: Vector2D = new Vector2D(0, 0);
    private equal: boolean = true; // all vectors have the same x/y values

    public x(t: number): number {
        if (t === 0) return this.s.x;
        if (t === 1) return this.e.x;
        if (this.equal) return this.s.x;
        return this.calculateX(t);
    }

    public y(t: number): number {
        if (t === 0) return this.s.y;
        if (t === 1) return this.e.y;
        if (this.equal) return this.s.y;
        return this.calculateY(t);
    }

    public setStart(x: number, y: number): void {
        this.s.setXY(x, y);
        this.checkEqual();
    }

    public setControl(x: number, y: number): void {
        this.c.setXY(x, y);
        this.checkEqual();
    }

    public setEnd(x: number, y: number): void {
        this.e.setXY(x, y);
        this.checkEqual();
    }

    public setAll(x: number, y: number): void {
        this.setStart(x, y);
        this.setControl(x, y);
        this.setEnd(x, y);
    }

    public distanceBetween(): number {
        return this.s.distanceTo(this.e);
    }

    // angle in radians
    public setControlByDistanceAndAngleFromStart(distance: number, angle: number): void {
        this.c =
            this.e.subtract(this.s)
                .addAngle(angle)
                .setLength(distance)
                .addTo(this.s);
    }

    // sets control half way between start and end, making a perfect straight line
    // makes no sense if all points are equal
    // public makeStraight(): void {
    //     if (!this.equal) this.c = this.e.subtract(this.s).divideBy(2).addTo(this.s);
    // }

    public save(): string {
        return JSON.stringify({
            start: this.s.save(),
            control: this.c.save(),
            end: this.e.save(),
            equal: this.equal
        });
    }

    public load(json: string): void {
        const state = JSON.parse(json);
        if (state.start === undefined) throw new Error('missing "start" property');
        if (state.control === undefined) throw new Error('missing "control" property');
        if (state.end === undefined) throw new Error('missing "end" property');
        if (state.equal === undefined) throw new Error('missing "equal" property');
        this.s.load(state.start);
        this.c.load(state.control);
        this.e.load(state.end);
        this.equal = state.equal;
    }

    private calculateX(t: number): number {
        return Math.pow(1 - t, 2) * this.s.x + (1 - t) * 2 * t * this.c.x + t * t * this.e.x;
    }

    private calculateY(t: number): number {
        return Math.pow(1 - t, 2) * this.s.y + (1 - t) * 2 * t * this.c.y + t * t * this.e.y;
    }

    private checkEqual(): void {
        this.equal = this.s.equals(this.c) && this.s.equals(this.e);
    }

}