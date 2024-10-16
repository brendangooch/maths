/**
 *
 */

import { clamp } from "./clamp.js";
import { Vector2D } from "./vector-2d.js";

export class CubicBezierCurve {

    private start: Vector2D;
    private controlA: Vector2D;
    private controlB: Vector2D;
    private end: Vector2D;

    public constructor(start: Vector2D, controlA: Vector2D, controlB: Vector2D, end: Vector2D) {
        this.start = start.clone();
        this.controlA = controlA.clone();
        this.controlB = controlB.clone();
        this.end = end.clone();
    }

    public save(): string {
        return JSON.stringify({
            start: this.start.save(),
            controlA: this.controlA.save(),
            controlB: this.controlB.save(),
            end: this.end.save()
        });
    }

    public load(json: string): void {
        const state = JSON.parse(json);
        if (state.start === undefined) throw new Error('missing "start" property');
        if (state.controlA === undefined) throw new Error('missing "controlA" property');
        if (state.controlB === undefined) throw new Error('missing "controlB" property');
        if (state.end === undefined) throw new Error('missing "end" property');
        this.start.load(state.start);
        this.controlA.load(state.controlA);
        this.controlB.load(state.controlB);
        this.end.load(state.end);
    }

    public x(t: number): number {
        t = clamp(t, 0, 1);
        return Math.pow(1 - t, 3) * this.start.x + Math.pow(1 - t, 2) * 3 * t * this.controlA.x + (1 - t) * 3 * t * t * this.controlB.x + t * t * t * this.end.x;
    }

    public y(t: number): number {
        t = clamp(t, 0, 1);
        return Math.pow(1 - t, 3) * this.start.y + Math.pow(1 - t, 2) * 3 * t * this.controlA.y + (1 - t) * 3 * t * t * this.controlB.y + t * t * t * this.end.y;
    }

}