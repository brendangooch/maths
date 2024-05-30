/**
 * 
 */

import { rangeIntersect } from "./range-intersect.js";

describe('rangeIntersect()', () => {

    // true if ranges intersect
    test('true if ranges intersect', () => {
        expect(rangeIntersect(1, 10, 9.9, 20)).toBeTruthy();
    });

    // false if ranges do not intersect
    test('false if ranges do not intersect', () => {
        expect(rangeIntersect(1, 10, 10.1, 20)).not.toBeTruthy();
    });

    // works with negative ranges
    test('works with negative ranges', () => {
        expect(rangeIntersect(-10, -1, -10.1, -9.9)).toBeTruthy();
        expect(rangeIntersect(-10, -1, -10.2, -10.1)).not.toBeTruthy();
    });

    // works if min > max
    test('works if min > max', () => {
        expect(rangeIntersect(10, 1, 20, 9.9)).toBeTruthy();
        expect(rangeIntersect(10, 1, 20, 10.1)).not.toBeTruthy();
    });

});