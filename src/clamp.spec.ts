/**
 * 
 */

import { clamp } from "./clamp.js";

describe('clamp()', () => {

    // clamps lower value to min
    test('clamps lower value to min', () => {
        expect(clamp(0.9, 1, 2)).toBe(1);
    });

    // clamps higher value to max
    test('clamps higher value to max', () => {
        expect(clamp(2.1, 1, 2)).toBe(2);
    });

    // works when max < min
    test('works when max < min', () => {
        expect(clamp(0, 2, 1)).toBe(1);
        expect(clamp(3, 2, 1)).toBe(2);
    });

    // works on negative values
    test('works on negative values', () => {
        expect(clamp(-10, -9, 9)).toBe(-9);
        expect(clamp(10, -9, 9)).toBe(9);
    });

});