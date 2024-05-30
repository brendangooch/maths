/**
 * 
 */

import { lerp } from "./lerp.js";
import { norm } from "./norm.js";

export function map(value: number, sourceMin: number, sourceMax: number, destMin: number, destMax: number): number {
    return lerp(norm(value, sourceMin, sourceMax), destMin, destMax);
}