/**
 *
 */

import { clamp } from "./clamp.js";
import { Vector2D } from "./vector-2d.js";

export class QuadraticBezierCurve {

    private start: Vector2D;
    private control: Vector2D;
    private end: Vector2D;

    public constructor(start: Vector2D, control: Vector2D, end: Vector2D) {
        this.start = start.clone();
        this.control = control.clone();
        this.end = end.clone();
    }

    public save(): string {
        return JSON.stringify({
            start: this.start.save(),
            control: this.control.save(),
            end: this.end.save()
        });
    }

    public load(json: string): void {
        const state = JSON.parse(json);
        if (state.start === undefined) throw new Error('missing "start" property');
        if (state.control === undefined) throw new Error('missing "control" property');
        if (state.end === undefined) throw new Error('missing "end" property');
        this.start.load(state.start);
        this.control.load(state.control);
        this.end.load(state.end);
    }

    public x(t: number): number {
        t = clamp(t, 0, 1);
        return Math.pow(1 - t, 2) * this.start.x + (1 - t) * 2 * t * this.control.x + t * t * this.end.x;
    }

    public y(t: number): number {
        t = clamp(t, 0, 1);
        return Math.pow(1 - t, 2) * this.start.y + (1 - t) * 2 * t * this.control.y + t * t * this.end.y;
    }


}