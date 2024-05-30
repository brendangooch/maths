/**
 * 
 */

import { distanceBetween } from "./distance-between.js";

describe('distanceBetween()', () => {

    test('works as expected on 3 x 4 x 5 triangle', () => {
        expect(distanceBetween(1, 1, 4, 5)).toBe(5);
    });

});