/**
 *
 */

import { distanceBetween } from "./distance-between.js";

export class Vector2D {

    private _x: number;
    private _y: number;

    public constructor(x: number = 1, y: number = 0) {
        this._x = x;
        this._y = y;
        return this;
    }

    public get x(): number {
        return this._x;
    }

    public get y(): number {
        return this._y;
    }

    public get angle(): number {
        return Math.atan2(this._y, this._x);
    }

    public get length(): number {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    public setX(x: number): Vector2D {
        this._x = x;
        return this;
    }

    public setY(y: number): Vector2D {
        this._y = y;
        return this;
    }

    public setXY(x: number, y: number): Vector2D {
        this.setX(x);
        this.setY(y);
        // this._x = x;
        // this._y = y;
        return this;
    }

    public setAngle(radians: number): Vector2D {
        const length = this.length;
        this.setX(Math.cos(radians) * length);
        this.setY(Math.sin(radians) * length);
        // this._x = Math.cos(radians) * length;
        // this._y = Math.sin(radians) * length;
        return this;
    }

    // add angle to existing angle rather than setting again
    public addAngle(radians: number): Vector2D {
        this.setAngle(this.angle + radians);
        return this;
    }

    public setLength(px: number): Vector2D {
        const angle = this.angle;
        this.setX(Math.cos(angle) * px);
        this.setY(Math.sin(angle) * px);
        // this._x = Math.cos(angle) * px;
        // this._y = Math.sin(angle) * px;
        return this;
    }

    public add(v2: Vector2D): Vector2D {
        return new Vector2D(this._x + v2.x, this._y + v2.y);
    }

    public subtract(v2: Vector2D): Vector2D {
        return new Vector2D(this._x - v2.x, this._y - v2.y);
    }

    public multiply(val: number): Vector2D {
        return new Vector2D(this._x * val, this._y * val);
    }

    public divide(val: number): Vector2D {
        return new Vector2D(this._x / val, this._y / val);
    }

    public addTo(v2: Vector2D): Vector2D {
        this._x += v2.x;
        this._y += v2.y;
        return this;
    }

    public subtractFrom(v2: Vector2D): Vector2D {
        this._x -= v2.x;
        this._y -= v2.y;
        return this;
    }

    public multiplyBy(val: number): Vector2D {
        this._x *= val;
        this._y *= val;
        return this;
    }

    public divideBy(val: number): Vector2D {
        this._x /= val;
        this._y /= val;
        return this;
    }

    public distanceTo(v2: Vector2D): number {
        return distanceBetween(this._x, this._y, v2.x, v2.y);
    }

    public normalise(): Vector2D {
        this.divideBy(this.length);
        return this;
    }

    public copy(v2: Vector2D): Vector2D {
        this.setX(v2.x);
        this.setY(v2.y);
        return this;
    }

    public clone(): Vector2D {
        return new Vector2D(this._x, this._y);
    }

    public save(): string {
        return JSON.stringify({
            x: this._x,
            y: this._y
        });
    }

    public load(json: string): void {
        const state = JSON.parse(json);
        if (state.x === undefined) throw new Error('missing "x" property');
        if (state.y === undefined) throw new Error('missing "y" property');
        this.setX(state.x);
        this.setY(state.y);
    }

    public equals(v2: Vector2D): boolean {
        return this._x === v2.x && this._y === v2.y;
    }



}