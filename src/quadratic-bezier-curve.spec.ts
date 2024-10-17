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
    start = new Vector2D(100, 200);
    control = new Vector2D(300, 400);
    end = new Vector2D(500, 600);
    bezier = new QuadraticBezierCurve();
    bezier.setStart(start);
    bezier.setControl(control);
    bezier.setEnd(end);
});

testAll();
function testAll(): void {
    describe('QuadraticBezierCurve', () => {

        testAllVectorsEqualOnInstantiationXIs1YIs0();
        testCallingSetAllSetsXYValueRegardlessOrTValue();
        testTValueCanGoVer1AndUnder0();
        testT0ReturnsStartVectorXY();
        testT1ReturnsEndVectorXY();

        testThrowsNoErrorOnSuccessfulLoad();
        testThrowsErrorOnInvalidJSON();
        testThrowsErrorOnMissingStartProperty();
        testThrowsErrorOnMissingControlProperty();
        testThrowsErrorOnMissingEndProperty();
        testReturnsSameValuesBeforeAndAfterSaveAndLoad();

    });
}

function testAllVectorsEqualOnInstantiationXIs1YIs0(): void {
    test('on instantiation, all vectors are equal and x returns 1, y returns 0, regardless of t value', () => {
        bezier = new QuadraticBezierCurve();
        expect(bezier.x(-0.5)).toBe(1);
        expect(bezier.y(-0.5)).toBe(0);
        expect(bezier.x(0)).toBe(1);
        expect(bezier.y(0)).toBe(0);
        expect(bezier.x(0.5)).toBe(1);
        expect(bezier.y(0.5)).toBe(0);
        expect(bezier.x(1)).toBe(1);
        expect(bezier.y(1)).toBe(0);
        expect(bezier.x(1.5)).toBe(1);
        expect(bezier.y(1.5)).toBe(0);
    });
}

function testCallingSetAllSetsXYValueRegardlessOrTValue(): void {
    test('when calling setAll() that vector is returned regardless of t value', () => {
        bezier.setAll(new Vector2D(100, 200));
        expect(bezier.x(-0.5)).toBe(100);
        expect(bezier.y(-0.5)).toBe(200);
        expect(bezier.x(0)).toBe(100);
        expect(bezier.y(0)).toBe(200);
        expect(bezier.x(0.5)).toBe(100);
        expect(bezier.y(0.5)).toBe(200);
        expect(bezier.x(1)).toBe(100);
        expect(bezier.y(1)).toBe(200);
        expect(bezier.x(1.5)).toBe(100);
        expect(bezier.y(1.5)).toBe(200);
    });
}

function testTValueCanGoVer1AndUnder0(): void {
    test('it is possible for t value to be under 0 or over 1', () => {
        const x0 = bezier.x(0);
        const y0 = bezier.y(0);
        const x1 = bezier.x(1);
        const y1 = bezier.y(1);
        expect(bezier.x(-0.1)).not.toBe(x0);
        expect(bezier.y(-0.1)).not.toBe(y0);
        expect(bezier.x(1.1)).not.toBe(x1);
        expect(bezier.y(1.1)).not.toBe(y1);
    });
}

function testT0ReturnsStartVectorXY(): void {
    test('t of 0 returns start vector', () => {
        expect(bezier.x(0)).toBe(start.x);
        expect(bezier.y(0)).toBe(start.y);
    });
}

function testT1ReturnsEndVectorXY(): void {
    test('t of 1 returns end vector', () => {
        expect(bezier.x(1)).toBe(end.x);
        expect(bezier.y(1)).toBe(end.y);
    });
}

function testThrowsNoErrorOnSuccessfulLoad(): void {
    test('throws no error on successful load', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            control: control.save(),
            end: end.save(),
            equal: false
        }))).not.toThrow();
    });
}

function testThrowsErrorOnInvalidJSON(): void {
    test('throws error on invalid json', () => {
        expect(() => bezier.load(JSON.stringify('['))).toThrow();
    });
}

function testThrowsErrorOnMissingStartProperty(): void {
    test('throws error on missing "start" property', () => {
        expect(() => bezier.load(JSON.stringify({
            // start: start.save(),
            control: control.save(),
            end: end.save(),
            equal: false
        }))).toThrow();
    });
}

function testThrowsErrorOnMissingControlProperty(): void {
    test('throws error on missing "control" property', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            // control: control.save(),
            end: end.save(),
            equal: false
        }))).toThrow();
    });
}

function testThrowsErrorOnMissingEndProperty(): void {
    test('throws error on missing "end" property', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            control: control.save(),
            // end: end.save(),
            equal: false
        }))).toThrow();
    });
}

function testThrowsErrorOnMissingEqualProperty(): void {
    test('throws error on missing "equal" property', () => {
        expect(() => bezier.load(JSON.stringify({
            start: start.save(),
            control: control.save(),
            end: end.save(),
            // equal: false
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
