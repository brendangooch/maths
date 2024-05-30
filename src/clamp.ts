/**
 * works whether min < max || min > max
 */

export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
}