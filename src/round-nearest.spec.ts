/**
 * 
 */

import { roundNearest } from "./round-nearest.js";

describe('roundNearest()', () => {

    // rounds value to nearest 50
    test('rounds value to nearest 50', () => {
        expect(roundNearest(51, 50)).toBe(50);
        expect(roundNearest(74, 50)).toBe(50);
        expect(roundNearest(76, 50)).toBe(100);
        expect(roundNearest(101, 50)).toBe(100);
        expect(roundNearest(124, 50)).toBe(100);
        expect(roundNearest(126, 50)).toBe(150);
        expect(roundNearest(151, 50)).toBe(150);
        expect(roundNearest(176, 50)).toBe(200);
    });

});