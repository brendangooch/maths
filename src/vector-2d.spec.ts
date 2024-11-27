/**
 * 
 */

import { Angle } from "./angle.js";
import { Vector2D } from "./vector-2d.js";
import { roundToPlaces } from "./round-to-places.js";

describe('Vector2D', () => {
    testAll();
});

function testAll(): void {

    testConstructor();

    testGetX();
    testGetY();
    testSetX();
    testSetY();
    testSetXY();

    testGetAngle();
    testGetLength();
    testSetAngle();
    testAddAngle();
    testSetLength();

    testAdd();
    testSubtract();
    testMultiply();
    testDivide();

    testAddTo();
    testSubtractFrom();
    testMultiplyBy();
    testDivideBy();

    testDistanceTo();
    testNormalise();
    testCopy();
    testClone();
    testEquals();
    testLoadAndSave();

}

function testConstructor(): void {
    describe('constructor()', () => {

        test('defaults to x = 1, y = 0 if no params given', () => {
            const v = new Vector2D();
            expect(v.x).toBe(1);
            expect(v.y).toBe(0);
        });

        test('can be chained with other methods', () => {
            const v = new Vector2D().setX(5).setY(10);
            expect(v.x).toBe(5);
            expect(v.y).toBe(10);
        });

    });
}

// get x(): number
function testGetX(): void {

    describe('get x()', () => {

        test('default value of x is 1', () => {
            const v1 = new Vector2D();
            expect(v1.x).toBe(1);
        });

        test('x correctly set in constructor', () => {
            const v1 = new Vector2D(10, 0);
            expect(v1.x).toBe(10);
        });

    });

}

// get y(): number
function testGetY(): void {

    describe('get y()', () => {

        test('default value of y is 0', () => {
            const v1 = new Vector2D();
            expect(v1.y).toBe(0);
        });

        test('y correctly set in constructor', () => {
            const v1 = new Vector2D(0, 10);
            expect(v1.y).toBe(10);
        });

    });

}

// setX(x: number): Vector2D
function testSetX(): void {

    describe('setX()', () => {

        test('can set and retrieve x', () => {
            const v1 = new Vector2D();
            v1.setX(10);
            expect(v1.x).toBe(10);
        });

        test('can be chained to other methods', () => {
            const v = new Vector2D();
            v.setX(20).setY(40);
            expect(v.x).toBe(20);
            expect(v.y).toBe(40);
        });


    });

}

// setY(y: number): Vector2D
function testSetY(): void {

    describe('setY()', () => {

        test('can set and retrieve y', () => {
            const v = new Vector2D();
            v.setY(10);
            expect(v.y).toBe(10);
        });

        test('can be chained to other methods', () => {
            const v = new Vector2D();
            v.setY(10).setX(20);
            expect(v.y).toBe(10);
            expect(v.x).toBe(20);
        });

    });

}

// setXY(x: number, y: number): Vector2D
function testSetXY(): void {
    describe('setXY(...)', () => {

        test('sets both x & y values in one call', () => {
            const v = new Vector2D(10, 10);
            v.setXY(20, 30);
            expect(v.x).toBe(20);
            expect(v.y).toBe(30);
        });

        test('can be chained to other methods', () => {
            const v = new Vector2D(10, 10);
            v.setXY(20, 30).addTo(new Vector2D(10, 10));
            expect(v.x).toBe(30);
            expect(v.y).toBe(40);
        });

    });
}

// get angle(): number
function testGetAngle(): void {

    describe('get angle()', () => {

        test('default angle is 0', () => {
            const v1 = new Vector2D();
            expect(v1.angle).toBe(0);
        });

        test('when x is 10, y is 0, angle is 0', () => {
            const v1 = new Vector2D(10, 0);
            expect(v1.angle).toBe(0);
        });

        test('when x is 0, y is 10, angle is Math.PI / 2', () => {
            const v1 = new Vector2D(0, 10);
            expect(v1.angle).toBeCloseTo(Math.PI / 2);
        });

        test('when x is -10, y is 0, angle is Math.PI', () => {
            const v1 = new Vector2D(-10, 0);
            expect(v1.angle).toBeCloseTo(Math.PI);
        });

        test('when x is 0, y is -10, angle is - Math.PI / 2', () => {
            const v1 = new Vector2D(0, -10);
            expect(v1.angle).toBeCloseTo(-Math.PI / 2);
        });

        test('when x is -10, y is 0.01, angle is less than Math.PI', () => {
            const v1 = new Vector2D(-10, 0.01);
            expect(v1.angle).toBeLessThan(Math.PI);
        });

        test('when x is -10, y is -0.01, angle is greater than -Math.PI', () => {
            const v1 = new Vector2D(-10, -0.01);
            expect(v1.angle).toBeGreaterThan(-Math.PI);
        });

    });

}

// get length(): number
function testGetLength(): void {

    describe('get length()', () => {

        test('default length is 1', () => {
            const v1 = new Vector2D();
            expect(v1.length).toBe(1);
        });

        test('length of a 3,4,5 triangle is 5', () => {
            const v1 = new Vector2D(3, 4);
            expect(v1.length).toBe(5);
        });

    });

}

// setAngle(radians: number): Vector2D
function testSetAngle(): void {

    describe('setAngle()', () => {

        test('can set and retrive the same angle', () => {
            const v1 = new Vector2D();
            const angle = new Angle();
            angle.degrees = 45;
            v1.setAngle(angle.radians);
            expect(v1.angle).toBeCloseTo(angle.radians);
        });

        test('in a normalized vector, an angle of Math.PI / 2 makes x = ~0, y = ~1', () => {
            const v1 = new Vector2D();
            v1.setAngle(Math.PI / 2);
            expect(v1.x).toBeCloseTo(0);
            expect(v1.y).toBeCloseTo(1);
        });

        test('in a normalized vector, an angle of Math.PI makes x = ~-1, y = ~0', () => {
            const v1 = new Vector2D();
            v1.setAngle(Math.PI);
            expect(v1.x).toBeCloseTo(-1);
            expect(v1.y).toBeCloseTo(0);
        });

        test('in a normalized vector, an angle of -Math.PI / 2 makes x = ~0, y = ~-1', () => {
            const v1 = new Vector2D();
            v1.setAngle(-Math.PI / 2);
            expect(v1.x).toBeCloseTo(0);
            expect(v1.y).toBeCloseTo(-1);
        });

        test('can be chained to other methods', () => {
            const v = new Vector2D();
            v.setAngle(Math.PI / 2).setLength(500);
            expect(v.length).toBeCloseTo(500);
        });

    });

}

// addAngle(radians: number): Vector2D
function testAddAngle(): void {
    describe('addAngle(...)', () => {

        test('adds to existing angle', () => {
            const v = new Vector2D(100, 100);
            v.setAngle(Math.PI / 2);
            v.addAngle(Math.PI / 2);
            expect(v.angle).toBeCloseTo(Math.PI);
        });

        test('can subtract by passing negative value', () => {
            const v = new Vector2D(100, 100);
            v.setAngle(Math.PI / 2);
            v.addAngle(-Math.PI / 2);
            expect(v.angle).toBeCloseTo(0);
        });

        test('can be chained to other methods', () => {
            const v = new Vector2D(10, 10);
            v.addAngle(Math.PI).setXY(20, 50);
            expect(v.x).toBe(20);
            expect(v.y).toBe(50);
        });

    });
}

// setLength(): Vector2D
function testSetLength(): void {

    describe('setLength(...)', () => {

        test('can set and retrieve the same length', () => {
            const v1 = new Vector2D();
            v1.setLength(10);
            expect(v1.length).toBeCloseTo(10);
            expect(v1.x).toBe(10);
        });

        test('angle stays the same when length is changed', () => {
            const v1 = new Vector2D(25, 25);
            const angle = v1.angle;
            for (let i = 1; i < 10; i++) {
                v1.setLength(i);
                expect(v1.angle).toBeCloseTo(angle);
            }

        })

        test('can be chained to other methods', () => {
            const v = new Vector2D(20, 100);
            v.setLength(100).divideBy(2);
            expect(v.length).toBeCloseTo(50);
        });

    });

}

// public add(v2: Vector2D): Vector2D
function testAdd(): void {

    describe('add()', () => {

        test('returned Vector2D has correct x & y values', () => {
            const v1 = new Vector2D(5, 5);
            const v2 = new Vector2D(5, 5);
            const v3 = v1.add(v2);
            const v4 = v2.add(v1);
            expect(v3.x).toBe(10);
            expect(v3.y).toBe(10);
            expect(v4.x).toBe(10);
            expect(v4.y).toBe(10);

        });

        test('returned Vector2D is NOT the same object as original or v2', () => {
            const v1 = new Vector2D(5, 5);
            const v2 = new Vector2D(5, 5);
            const v3 = v1.add(v2);
            const v4 = v2.add(v1);
            expect(v1 === v3).not.toBeTruthy();
            expect(v2 === v3).not.toBeTruthy();
            expect(v1 === v4).not.toBeTruthy();
            expect(v2 === v4).not.toBeTruthy();
        });

    });

}

// public subtract(v2: Vector2D): Vector2D
function testSubtract(): void {

    describe('subtract()', () => {

        test('returned Vector2D has correct x & y values', () => {
            const v1 = new Vector2D(10, 10);
            const v2 = new Vector2D(5, 5);
            const v3 = v1.subtract(v2);
            const v4 = v2.subtract(v1);
            expect(v3.x).toBe(5);
            expect(v3.y).toBe(5);
            expect(v4.x).toBe(-5);
            expect(v4.y).toBe(-5);

        });

        test('returned Vector2D is NOT the same object as original or v2', () => {
            const v1 = new Vector2D(10, 10);
            const v2 = new Vector2D(5, 5);
            const v3 = v1.subtract(v2);
            const v4 = v2.subtract(v1);
            expect(v1 === v3).not.toBeTruthy();
            expect(v2 === v3).not.toBeTruthy();
            expect(v1 === v4).not.toBeTruthy();
            expect(v2 === v4).not.toBeTruthy();
        });

    });

}

// public multiply(val: number): Vector2D
function testMultiply(): void {

    describe('multiply()', () => {

        test('returned Vector2D has correct x, y and length values', () => {
            const v1 = new Vector2D(5, 10);
            const v2 = v1.multiply(2);
            expect(v2.x).toBe(10);
            expect(v2.y).toBe(20);
            expect(v2.length).toBeCloseTo(v1.length * 2);
        });

        test('returned Vector2D is NOT the same object as original or v2', () => {
            const v1 = new Vector2D(5, 10);
            const v2 = v1.multiply(2);
            expect(v1 === v2).not.toBeTruthy();
        });

    });

}

// public divide(val: number): Vector2D
function testDivide(): void {

    describe('divide()', () => {

        test('returned Vector2D has correct x, y & length values', () => {
            const v1 = new Vector2D(10, 20);
            const v2 = v1.divide(2);
            expect(v2.x).toBe(5);
            expect(v2.y).toBe(10);
            expect(v2.length).toBeCloseTo(v1.length / 2);
        });

        test('returned Vector2D is NOT the same object as original or v2', () => {
            const v1 = new Vector2D(10, 20);
            const v2 = v1.divide(2);
            expect(v1 === v2).not.toBeTruthy();
        });

    });

}

// public addTo(v2: Vector2D): Vector2D
function testAddTo(): void {

    describe('addTo', () => {

        test('correctly adds up x & y properties', () => {
            const v1 = new Vector2D(10, 11);
            const v2 = new Vector2D(10, 11);
            v1.addTo(v2);
            expect(v1.x).toBe(20);
            expect(v1.y).toBe(22);
        });

        test('can be chained to other methods', () => {
            const v1 = new Vector2D(10, 11);
            const v2 = new Vector2D(10, 11);
            v1.addTo(v2).addTo(v2);
            expect(v1.x).toBe(30);
            expect(v1.y).toBe(33);
        });

    });

}

// public subtractFrom(v2: Vector2D): Vector2D
function testSubtractFrom(): void {

    describe('subtractFrom', () => {

        test('correctly subtracts x & y properties', () => {
            const v1 = new Vector2D(5, 8);
            const v2 = new Vector2D(3, 4);
            v1.subtractFrom(v2);
            expect(v1.x).toBe(2);
            expect(v1.y).toBe(4);
        });

        test('can be chained to other methods', () => {
            const v1 = new Vector2D(5, 8);
            const v2 = new Vector2D(3, 4);
            v1.subtractFrom(v2).subtractFrom(v2);
            expect(v1.x).toBe(-1);
            expect(v1.y).toBe(0);
        });

    });

}

// public multiplyBy(val: number): Vector2D
function testMultiplyBy(): void {

    describe('multiplyBy', () => {

        test('correctly multiplies x & y properties', () => {
            const v1 = new Vector2D(5, 6);
            v1.multiplyBy(2);
            expect(v1.x).toBe(10);
            expect(v1.y).toBe(12);
        });

        test('can be chained to other methods', () => {
            const v1 = new Vector2D(5, 6);
            v1.multiplyBy(2).divideBy(2);
            expect(v1.x).toBeCloseTo(5);
            expect(v1.y).toBeCloseTo(6);
        });

    });

}

// public divideBy(val: number): Vector2D
function testDivideBy(): void {

    describe('divideBy', () => {

        test('correctly divides x & y properties', () => {
            const v1 = new Vector2D(5, 6);
            v1.divideBy(2);
            expect(v1.x).toBe(2.5);
            expect(v1.y).toBe(3);
        });

        test('can be chained to other methods', () => {
            const v1 = new Vector2D(5, 6);
            v1.divideBy(2).multiplyBy(2);
            expect(v1.x).toBe(5);
            expect(v1.y).toBe(6);
        });

    });

}

// public distanceTo(v2: Vector2D): number
function testDistanceTo(): void {

    describe('distanceTo()', () => {

        test('works with a 3, 4, 5 triangle', () => {
            const v1 = new Vector2D(0, 0);
            const v2 = new Vector2D(3, 4);
            expect(v1.distanceTo(v2)).toBe(5);
            expect(v2.distanceTo(v1)).toBe(5);
        });

    });

}

// public normalise(): void
function testNormalise(): void {

    describe('normalise()', () => {

        test('normalize sets length to 1', () => {
            const v1 = new Vector2D(50, 50);
            expect(v1.length).toBeGreaterThan(1);
            v1.normalise();
            expect(v1.length).toBeCloseTo(1);
        });

        test('normalize leaves angle the same', () => {
            for (let i = 1; i < 100; i++) {
                const v1 = new Vector2D(50, 50);
                const angle = v1.angle;
                v1.normalise();
                expect(v1.angle).toBeCloseTo(angle);
            }
        });

        test('when x & y are equal, normalize makes them < 1', () => {
            const v1 = new Vector2D(50, 50);
            v1.normalise();
            expect(v1.x).toBeLessThan(1);
            expect(v1.y).toBeLessThan(1);
        });

        test('when x is 10, y is 0, x === length, therefore normalize makes x === 1', () => {
            const v1 = new Vector2D(10, 0);
            v1.normalise();
            expect(v1.x).toBe(1);
            expect(v1.y).toBe(0);
        });

        test('when x is 0, y is 10, y === length, therefore normalize makes y === 1', () => {
            const v1 = new Vector2D(0, 10);
            v1.normalise();
            expect(v1.x).toBe(0);
            expect(v1.y).toBe(1);
        });

    });

}

// public copy(v2: Vector2D): void
function testCopy(): void {

    describe('copy()', () => {

        test('values copied correctly', () => {
            const v1 = new Vector2D(25, 50);
            const v2 = new Vector2D(50, 25);
            v1.copy(v2);
            expect(v1.x).toBe(v2.x);
            expect(v1.y).toBe(v2.y);
        });

        test('original and v2 are NOT the same object', () => {
            const v1 = new Vector2D(25, 50);
            const v2 = new Vector2D(50, 25);
            v1.copy(v2);
            expect(v1 === v2).not.toBeTruthy();
        });

    });

}

// public clone(): Vector2D
function testClone(): void {

    describe('clone()', () => {

        test('values cloned correctly', () => {
            const v1 = new Vector2D(25, 50);
            const v2 = v1.clone();
            expect(v2.x).toBe(v1.x);
            expect(v2.y).toBe(v1.y);
        });

        test('original and returned Vector2D are NOT the same object', () => {
            const v1 = new Vector2D(25, 50);
            const v2 = v1.clone();
            expect(v1 === v2).not.toBeTruthy();
        });

    });

}

function testEquals(): void {
    describe('equals(...)', () => {
        test('true when vectors have same x & y values, false otherwise', () => {
            const v1 = new Vector2D(1, 2);
            const v2 = new Vector2D(1, 2);
            const v3 = new Vector2D(2, 1);
            expect(v1.equals(v2)).toBeTruthy();
            expect(v1.equals(v3)).not.toBeTruthy();
        });
    });
}

function testLoadAndSave(): void {
    describe('load(...) / save()', () => {
        testValidLoadDoesNotThrowError();
        testInvalidJSONThrowsError();
        testMissingXPropertyThrowsError();
        testMissingYPropertyThrowsError();
        testPropertiesStayTheSameOnSaveThenLoad();
    });
}

function testValidLoadDoesNotThrowError(): void {
    test('valid load does not throw error', () => {
        const v = new Vector2D(5, 5);
        expect(() => v.load(JSON.stringify({
            x: 10,
            y: 10
        }))).not.toThrow();
    });
}

function testInvalidJSONThrowsError(): void {
    test('loading invalid json throws error', () => {
        const v = new Vector2D(5, 5);
        expect(() => v.load(JSON.stringify('}'))).toThrow();
    });
}

function testMissingXPropertyThrowsError(): void {
    test('missing x property throws error', () => {
        const v = new Vector2D();
        expect(() => v.load(JSON.stringify({
            // x: 10,
            y: 10
        }))).toThrow();
    });
}

function testMissingYPropertyThrowsError(): void {
    test('missing y property throws error', () => {
        const v = new Vector2D();
        expect(() => v.load(JSON.stringify({
            x: 10,
            // y: 10
        }))).toThrow();
    });
}

function testPropertiesStayTheSameOnSaveThenLoad(): void {
    test('properties stay the same ib save then load', () => {
        const v = new Vector2D(10, 10);
        const before = {
            x: v.x,
            y: v.y,
            length: v.length,
            angle: v.angle
        };
        v.load(v.save());
        expect(v.x).toBe(before.x);
        expect(v.y).toBe(before.x);
        expect(v.length).toBe(before.length);
        expect(v.angle).toBe(before.angle);

    });
}