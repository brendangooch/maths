/**
 * 
 */

import { QuadraticBezierCurve } from "./quadratic-bezier-curve.js";
import { Vector2D } from "./vector-2d.js";

let start: Vector2D;
let control: Vector2D;
let end: Vector2D;
let bezier: QuadraticBezierCurve;
beforeEach(() => {
    start = new Vector2D(0, 500);
    control = new Vector2D(500, 100);
    end = new Vector2D(1000, 500);
    bezier = new QuadraticBezierCurve(start, control, end);
});

testAll();
function testAll(): void {
    describe('QuadraticBezierCurve', () => {
        describe('load/save()', () => {
            testThrowsNoErrorOnSuccessfulLoad();
            testThrowsErrorOnInvalidJSON();
            testThrowsErrorOnMissingStartProperty();
            testThrowsErrorOnMissingControlProperty();
            testThrowsErrorOnMissingEndProperty();
            testReturnsSameValuesBeforeAndAfterSaveAndLoad();
        });
    });
}

function testThrowsNoErrorOnSuccessfulLoad(): void {
    test('throws no error on successful load', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            control: control.save(),
            end: end.save(),
        }))).not.toThrow();
    });
}

function testThrowsErrorOnInvalidJSON(): void {
    test('throws error on invalid json', () => {
        expect(() => bezier.load(JSON.stringify('['))).toThrow();
    });
}

function testThrowsErrorOnMissingStartProperty(): void {
    test('throws error on missing start property', () => {
        expect(() => bezier.load(JSON.stringify({
            // start: start.save(),
            control: control.save(),
            end: end.save(),
        }))).toThrow();
    });
}

function testThrowsErrorOnMissingControlProperty(): void {
    test('throws error on missing control property', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            // control: control.save(),
            end: end.save(),
        }))).toThrow();
    });
}

function testThrowsErrorOnMissingEndProperty(): void {
    test('throws error on missing end property', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            control: control.save()
            // end: end.save(),
        }))).toThrow();
    });
}

function testReturnsSameValuesBeforeAndAfterSaveAndLoad(): void {
    test('returns same x/y values before and after save and load', () => {
        const xBefore = bezier.x(0.5);
        const yBefore = bezier.y(0.5);
        bezier.load(bezier.save()); // <--
        const xAfter = bezier.x(0.5);
        const yAfter = bezier.y(0.5);
        expect(xAfter).toBe(xBefore);
        expect(yAfter).toBe(yBefore);
    });
}
