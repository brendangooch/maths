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
    }

    get x(): number {
        return this._x;
    }

    set x(x: number) {
        this._x = x;
    }

    get y(): number {
        return this._y;
    }

    set y(y: number) {
        this._y = y;
    }

    get angle(): number {
        return Math.atan2(this._y, this._x);
    }

    set angle(radians: number) {
        const length = this.length;
        this._x = Math.cos(radians) * length;
        this._y = Math.sin(radians) * length;
    }

    get length(): number {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }

    set length(px: number) {
        const angle = this.angle;
        this._x = Math.cos(angle) * px;
        this._y = Math.sin(angle) * px;
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

    public addTo(v2: Vector2D): void {
        this._x += v2.x;
        this._y += v2.y;
    }

    public subtractFrom(v2: Vector2D): void {
        this._x -= v2.x;
        this._y -= v2.y;
    }

    public multiplyBy(val: number): void {
        this._x *= val;
        this._y *= val;
    }

    public divideBy(val: number): void {
        this._x /= val;
        this._y /= val;
    }

    public distanceTo(v2: Vector2D): number {
        return distanceBetween(this._x, this._y, v2.x, v2.y);
    }

    public normalize(): void {
        this.divideBy(this.length);
    }

    public copy(v2: Vector2D): void {
        this._x = v2.x;
        this._y = v2.y;
    }

    public clone(): Vector2D {
        return new Vector2D(this._x, this._y);
    }

}