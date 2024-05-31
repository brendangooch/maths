/**
 * 
 */

import { roundToPlaces } from "./round-to-places.js";

describe('roundToPlaces()', () => {

    // correctly returns the value of PI through 12 decimal places
    // 3.141592653589793
    test('correctly returns the value of PI through 6 decimal places', () => {
        expect(roundToPlaces(Math.PI, 0)).toBe(3);
        expect(roundToPlaces(Math.PI, 1)).toBe(3.1);
        expect(roundToPlaces(Math.PI, 2)).toBe(3.14);
        expect(roundToPlaces(Math.PI, 3)).toBe(3.142);
        expect(roundToPlaces(Math.PI, 4)).toBe(3.1416);
        expect(roundToPlaces(Math.PI, 5)).toBe(3.14159);
        expect(roundToPlaces(Math.PI, 6)).toBe(3.141593);
    });

    // works on inverse places too
    // PI multiplied by 100000
    // 314159.~
    test('works on inverse places too', () => {
        const BIG_PI = Math.PI * 100000;
        // nearest 10
        expect(roundToPlaces(BIG_PI, -1)).toBe(314160);
        // nearest 100
        expect(roundToPlaces(BIG_PI, -2)).toBe(314200);
        // nearest 1,000
        expect(roundToPlaces(BIG_PI, -3)).toBe(314000);
        // nearest 10,000
        expect(roundToPlaces(BIG_PI, -4)).toBe(310000);
        // nearest 100,000
        expect(roundToPlaces(BIG_PI, -5)).toBe(300000);
    });

});