/**
 * 
 */

import { radsToDegrees } from "./rads-to-degrees.js";

describe('degreesToRads()', () => {

    test('0 radians === 0 degrees', () => {
        expect(radsToDegrees(0)).toBeCloseTo(0);
    });

    test('Math.PI / 4 === 45', () => {
        expect(radsToDegrees(Math.PI / 4)).toBeCloseTo(45);
    });

    test('Math.PI / 2 === 90', () => {
        expect(radsToDegrees(Math.PI / 2)).toBeCloseTo(90);
    });

    test('Math.PI === 180', () => {
        expect(radsToDegrees(Math.PI)).toBeCloseTo(180);
    });

    test('Math.PI * 1.5 === 270', () => {
        expect(radsToDegrees(Math.PI * 1.5)).toBeCloseTo(270);
    });

    test('Math.PI * 2 === 360', () => {
        expect(radsToDegrees(Math.PI * 2)).toBeCloseTo(360);
    });

    test('-Math.PI / 4 === -45', () => {
        expect(radsToDegrees(-Math.PI / 4)).toBeCloseTo(-45);
    });

    test('-Math.PI / 2 === -90', () => {
        expect(radsToDegrees(-Math.PI / 2)).toBeCloseTo(-90);
    });

    test('-Math.PI === -180', () => {
        expect(radsToDegrees(-Math.PI)).toBeCloseTo(-180);
    });

    test('-Math.PI * 1.5 === -270', () => {
        expect(radsToDegrees(-Math.PI * 1.5)).toBeCloseTo(-270);
    });

    test('-Math.PI * 2 === -360', () => {
        expect(radsToDegrees(-Math.PI * 2)).toBeCloseTo(-360);
    });


});