/**
 * linear interpolation
 */

export function lerp(norm: number, min: number, max: number): number {
    return (Math.max(min, max) - Math.min(min, max)) * norm + Math.min(min, max);
}