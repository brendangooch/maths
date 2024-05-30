/**
 * 
 */

import { lerp } from "./lerp.js";

describe('lerp()', () => {

    test('0.5, 0, 100 = 50', () => {
        expect(lerp(0.5, 0, 100)).toBeCloseTo(50);
    });

    test('0.1, 0, 100 = 10', () => {
        expect(lerp(0.1, 0, 100)).toBeCloseTo(10);
    });

    test('0.05, 0, 100 = 5', () => {
        expect(lerp(0.05, 0, 100)).toBeCloseTo(5);
    });

    test('-0.75, 0, 100 = -75', () => {
        expect(lerp(-0.75, 0, 100)).toBeCloseTo(-75);
    });

    test('0.5, -100, 0 = -50', () => {
        expect(lerp(0.5, -100, 0)).toBeCloseTo(-50);
    });

    test('0.5, -100, -200 = -150', () => {
        expect(lerp(0.5, -100, -200)).toBeCloseTo(-150);
    });

});