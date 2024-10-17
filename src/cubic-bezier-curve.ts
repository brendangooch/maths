/**
 *
 */

import { Vector2D } from "./vector-2d.js";

export class CubicBezierCurve {

    private s: Vector2D = new Vector2D(1, 0);
    private a: Vector2D = new Vector2D(1, 0);
    private b: Vector2D = new Vector2D(1, 0);
    private e: Vector2D = new Vector2D(1, 0);
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

    public save(): string {
        return JSON.stringify({
            start: this.s.save(),
            controlA: this.a.save(),
            controlB: this.b.save(),
            end: this.e.save(),
            equal: this.equal,
        });
    }

    public load(json: string): void {
        const state = JSON.parse(json);
        if (state.start === undefined) throw new Error('missing "start" property');
        if (state.controlA === undefined) throw new Error('missing "controlA" property');
        if (state.controlB === undefined) throw new Error('missing "controlB" property');
        if (state.end === undefined) throw new Error('missing "end" property');
        if (state.equal === undefined) throw new Error('missing "equal" property');
        this.s.load(state.start);
        this.a.load(state.controlA);
        this.b.load(state.controlB);
        this.e.load(state.end);
        this.equal = state.equal;
    }

    public setStart(v: Vector2D): void {
        this.s.copy(v);
        this.checkEqual();
    }

    public setControlA(v: Vector2D): void {
        this.a.copy(v);
        this.checkEqual();
    }

    public setControlB(v: Vector2D): void {
        this.b.copy(v);
        this.checkEqual();
    }

    public setEnd(v: Vector2D): void {
        this.e.copy(v);
        this.checkEqual();
    }

    public setAll(v: Vector2D): void {
        this.setStart(v);
        this.setControlA(v);
        this.setControlB(v);
        this.setEnd(v);
    }

    private calculateX(t: number): number {
        return Math.pow(1 - t, 3) * this.s.x + Math.pow(1 - t, 2) * 3 * t * this.a.x + (1 - t) * 3 * t * t * this.b.x + t * t * t * this.e.x;
    }

    private calculateY(t: number): number {
        return Math.pow(1 - t, 3) * this.s.y + Math.pow(1 - t, 2) * 3 * t * this.a.y + (1 - t) * 3 * t * t * this.b.y + t * t * t * this.e.y;
    }

    private checkEqual(): void {
        this.equal = this.s.equals(this.a) && this.s.equals(this.b) && this.s.equals(this.e);
    }

}