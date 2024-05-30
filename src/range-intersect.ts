/**
 * do 2 ranges intersect?
 * works whether min < max || min > max
 */

export function rangeIntersect(min0: number, max0: number, min1: number, max1: number): boolean {
    return Math.max(min0, max0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(min1, max1);
}