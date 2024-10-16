/**
 * 
 */

import { AspectRatio } from "./aspect-ratio.js";

testAll();
function testAll(): void {
    describe('AspectRatio', () => {

        test('outputs correct width and height at 1:2 ratio', () => {
            const aspect = new AspectRatio(1, 2);
            expect(aspect.width(100)).toBe(50);
            expect(aspect.height(50)).toBe(100);
        });

        test('outputs correct width and height at 1:4 ratio', () => {
            const aspect = new AspectRatio(1, 4);
            expect(aspect.width(100)).toBe(25);
            expect(aspect.height(25)).toBe(100);
        });

        test('outputs correct width and height at 2:1 ratio', () => {
            const aspect = new AspectRatio(2, 1);
            expect(aspect.width(100)).toBe(200);
            expect(aspect.height(200)).toBe(100);
        });

        test('outputs correct width and height at 4:1 ratio', () => {
            const aspect = new AspectRatio(4, 1);
            expect(aspect.width(100)).toBe(400);
            expect(aspect.height(400)).toBe(100);
        });

    });
}