/**
 * works whether min < max || min > max
 */

export function inRange(value: number, min: number, max: number): boolean {
    return value >= Math.min(min, max) && value < Math.max(min, max);
}