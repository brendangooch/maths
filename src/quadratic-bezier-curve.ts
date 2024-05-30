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

    public x(t: number): number {
        t = clamp(t, 0, 1);
        return Math.pow(1 - t, 2) * this.start.x + (1 - t) * 2 * t * this.control.x + t * t * this.end.x;
    }

    public y(t: number): number {
        t = clamp(t, 0, 1);
        return Math.pow(1 - t, 2) * this.start.y + (1 - t) * 2 * t * this.control.y + t * t * this.end.y;
    }

    public vector2D(t: number): Vector2D {
        t = clamp(t, 0, 1);
        return new Vector2D(this.x(t), this.y(t));
    }

}