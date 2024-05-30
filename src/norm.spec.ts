/**
 * 
 */

import { norm } from "./norm.js";

describe('norm()', () => {

    // value: 5, min: 0, max: 10 returns 0.5
    test('value: 5, min: 0, max: 10 returns 0.5', () => {
        expect(norm(5, 0, 10)).toBe(0.5);
    });

    // value: 75, min: 50, max: 100 returns 0.5
    test('value: 75, min: 50, max: 100 returns 0.5', () => {
        expect(norm(75, 50, 100)).toBe(0.5);
    });

    // value 1.2, min: 1, max: 2, returns 0.2
    test('value 1.2, min: 1, max: 2, returns 0.2', () => {
        expect(norm(1.2, 1, 2)).toBeCloseTo(0.2);
    });

    // value: -5, min: 0, max: -10 returns -0.5
    test('value: -5, min: 0, max: -10 returns 0.5', () => {
        expect(norm(-5, 0, -10)).toBe(0.5);
    });

    // value: -5, min: 0, max: 10 returns -0.5
    test('value: -5, min: 0, max: 10 returns -0.5', () => {
        expect(norm(-5, 0, 10)).toBeCloseTo(-0.5);
    });

    // value: 6, min: 0, max: 5 returns 1.2
    test('value: 6, min: 0, max: 5 returns 1.2', () => {
        expect(norm(6, 0, 5)).toBe(1.2);
    });

});