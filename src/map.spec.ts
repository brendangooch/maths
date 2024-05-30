/**
 * 
 */

import { map } from "./map.js";

describe('map()', () => {

    test('1.5, 1, 2, 100, 200 = 150', () => {
        expect(map(1.5, 1, 2, 100, 200)).toBeCloseTo(150);
    });

    test('0.9, 1, 2, 100, 200 = 90', () => {
        expect(map(0.9, 1, 2, 100, 200)).toBeCloseTo(90);
    });

    test('6.1, 0, 10, 0, 1000 = 610', () => {
        expect(map(6.1, 0, 10, 0, 1000)).toBeCloseTo(610);
    });

    test('-10, 0, -20, 0, -200', () => {
        expect(map(-10, 0, -20, 0, -200)).toBeCloseTo(-100);
    });

});