/**
 * round to the nearest value to the nearest parameter
 * ideal for snap-to-grid
 * (credit Coding Math channel on YouTube)
 */

export function roundNearest(value: number, nearest: number): number {
    return Math.round(value / nearest) * nearest;
}