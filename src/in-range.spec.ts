/**
 * 
 */

import { inRange } from "./in-range.js";

describe('inRange()', () => {

    // true if value in range
    test('true if value in range', () => {
        expect(inRange(5, 1, 10)).toBeTruthy();
    });

    // false if value < range
    test('false if value < range', () => {
        expect(inRange(4.9, 5, 10)).not.toBeTruthy();
    });

    // false if value > range
    test('false if value > range', () => {
        expect(inRange(10.1, 5, 10)).not.toBeTruthy();
    });

    // works if min > max
    test('works if min > max', () => {
        expect(inRange(6, 10, 5)).toBeTruthy();
    });

    // works with negative numbers
    test('works with negative numbers', () => {
        expect(inRange(-6, -10, -5)).toBeTruthy();
        expect(inRange(-6, -5, -10)).toBeTruthy();
        expect(inRange(-11, -10, -5)).not.toBeTruthy();
        expect(inRange(-4, -10, -5)).not.toBeTruthy();
    });

});