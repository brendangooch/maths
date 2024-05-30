/**
 * 
 */

import { degreesToRads } from "./degrees-to-rads.js";

describe('degreesToRads()', () => {

    test('0 degrees === 0 radians', () => {
        expect(degreesToRads(0)).toBeCloseTo(0);
    });

    test('45 degrees === Math.PI / 4', () => {
        expect(degreesToRads(45)).toBeCloseTo(Math.PI / 4);
    });

    test('90 degrees === Math.PI / 2', () => {
        expect(degreesToRads(90)).toBeCloseTo(Math.PI / 2);
    });

    test('180 degrees === Math.PI', () => {
        expect(degreesToRads(180)).toBeCloseTo(Math.PI);
    });

    test('270 degrees === Math.PI * 1.5', () => {
        expect(degreesToRads(270)).toBeCloseTo(Math.PI * 1.5);
    });

    test('360 degrees === Math.PI * 2', () => {
        expect(degreesToRads(360)).toBeCloseTo(Math.PI * 2);
    });

    test('-45 degrees === -Math.PI / 4', () => {
        expect(degreesToRads(-45)).toBeCloseTo(-Math.PI / 4);
    });

    test('-90 degrees === -Math.PI / 2', () => {
        expect(degreesToRads(-90)).toBeCloseTo(-Math.PI / 2);
    });

    test('-180 degrees === -Math.PI', () => {
        expect(degreesToRads(-180)).toBeCloseTo(-Math.PI);
    });

    test('-270 degrees === Math.PI * -1.5', () => {
        expect(degreesToRads(-270)).toBeCloseTo(-Math.PI * 1.5);
    });

    test('-360 degrees === -Math.PI * 2', () => {
        expect(degreesToRads(-360)).toBeCloseTo(-Math.PI * 2);
    });

});