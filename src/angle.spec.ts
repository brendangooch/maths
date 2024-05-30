/**
 * 
 */

import { Angle } from "./angle.js";

describe('Angle', () => {

    test('default value === 0 turns, 0 degrees & 0 radians', () => {
        const angle = new Angle();
        expect(angle.turns).toBe(0);
        expect(angle.degrees).toBe(0);
        expect(angle.radians).toBe(0);
    });

    describe('setting angle.turns', () => {

        test('0 turns === 0 degrees === 0 radians', () => {
            const angle = new Angle();
            angle.turns = 0;
            expect(angle.turns).toBe(0);
            expect(angle.degrees).toBe(0);
            expect(angle.radians).toBe(0);
        });

        test('0.125 turns === 45 degrees === Math.PI / 4 radians', () => {
            const angle = new Angle();
            angle.turns = 0.125;
            expect(angle.turns).toBeCloseTo(0.125);
            expect(angle.degrees).toBeCloseTo(45);
            expect(angle.radians).toBeCloseTo(Math.PI / 4);
        });

        test('-0.125 turns === -45 degrees === -Math.PI / 4 radians', () => {
            const angle = new Angle();
            angle.turns = -0.125;
            expect(angle.turns).toBeCloseTo(-0.125);
            expect(angle.degrees).toBeCloseTo(-45);
            expect(angle.radians).toBeCloseTo(-Math.PI / 4);
        });

        test('0.25 turns === 90 degrees === Math.PI / 2 radians', () => {
            const angle = new Angle();
            angle.turns = 0.25;
            expect(angle.turns).toBeCloseTo(0.25);
            expect(angle.degrees).toBeCloseTo(90);
            expect(angle.radians).toBeCloseTo(Math.PI / 2);
        });

        test('-0.25 turns === -90 degrees === -Math.PI / 2 radians', () => {
            const angle = new Angle();
            angle.turns = -0.25;
            expect(angle.turns).toBeCloseTo(-0.25);
            expect(angle.degrees).toBeCloseTo(-90);
            expect(angle.radians).toBeCloseTo(-Math.PI / 2);
        });

        test('0.5 turns === 180 degrees === Math.PI radians', () => {
            const angle = new Angle();
            angle.turns = 0.5;
            expect(angle.turns).toBeCloseTo(0.5);
            expect(angle.degrees).toBeCloseTo(180);
            expect(angle.radians).toBeCloseTo(Math.PI);
        });

        test('-0.5 turns === -180 degrees === -Math.PI radians', () => {
            const angle = new Angle();
            angle.turns = -0.5;
            expect(angle.turns).toBeCloseTo(-0.5);
            expect(angle.degrees).toBeCloseTo(-180);
            expect(angle.radians).toBeCloseTo(-Math.PI);
        });

        test('0.75 turns === 270 degrees === Math.PI * 1.5 radians', () => {
            const angle = new Angle();
            angle.turns = 0.75;
            expect(angle.turns).toBeCloseTo(0.75);
            expect(angle.degrees).toBeCloseTo(270);
            expect(angle.radians).toBeCloseTo(Math.PI * 1.5);
        });

        test('-0.75 turns === -270 degrees === -Math.PI * 1.5 radians', () => {
            const angle = new Angle();
            angle.turns = -0.75;
            expect(angle.turns).toBeCloseTo(-0.75);
            expect(angle.degrees).toBeCloseTo(-270);
            expect(angle.radians).toBeCloseTo(-Math.PI * 1.5);
        });

        test('1 turns === 360 degrees === Math.PI * 2 radians', () => {
            const angle = new Angle();
            angle.turns = 1;
            expect(angle.turns).toBeCloseTo(1);
            expect(angle.degrees).toBeCloseTo(360);
            expect(angle.radians).toBeCloseTo(Math.PI * 2);
        });

        test('-1 turns === -360 degrees === -Math.PI * 2 radians', () => {
            const angle = new Angle();
            angle.turns = -1;
            expect(angle.turns).toBeCloseTo(-1);
            expect(angle.degrees).toBeCloseTo(-360);
            expect(angle.radians).toBeCloseTo(-Math.PI * 2);
        });

        test('1.5 turns === 540 degrees === Math.PI * 3 radians', () => {
            const angle = new Angle();
            angle.turns = 1.5;
            expect(angle.turns).toBeCloseTo(1.5);
            expect(angle.degrees).toBeCloseTo(540);
            expect(angle.radians).toBeCloseTo(Math.PI * 3);
        });

        test('-1.5 turns === -540 degrees === -Math.PI * 3 radians', () => {
            const angle = new Angle();
            angle.turns = -1.5;
            expect(angle.turns).toBeCloseTo(-1.5);
            expect(angle.degrees).toBeCloseTo(-540);
            expect(angle.radians).toBeCloseTo(-Math.PI * 3);
        });

    });

    describe('setting angle.degrees', () => {

        test('0 degrees === 0 turns === 0 radians', () => {
            const angle = new Angle();
            angle.degrees = 0;
            expect(angle.turns).toBe(0);
            expect(angle.degrees).toBe(0);
            expect(angle.radians).toBe(0);
        });

        test('45 degrees === 0.125 turns === Math.PI / 4 radians', () => {
            const angle = new Angle();
            angle.degrees = 45;
            expect(angle.turns).toBeCloseTo(0.125);
            expect(angle.degrees).toBeCloseTo(45);
            expect(angle.radians).toBeCloseTo(Math.PI / 4);
        });

        test('-45 degrees === -0.125 turns === -Math.PI / 4 radians', () => {
            const angle = new Angle();
            angle.degrees = -45;
            expect(angle.turns).toBeCloseTo(-0.125);
            expect(angle.degrees).toBeCloseTo(-45);
            expect(angle.radians).toBeCloseTo(-Math.PI / 4);
        });

        test('90 degrees === 0.25 turns === Math.PI / 2 radians', () => {
            const angle = new Angle();
            angle.degrees = 90;
            expect(angle.turns).toBeCloseTo(0.25);
            expect(angle.degrees).toBeCloseTo(90);
            expect(angle.radians).toBeCloseTo(Math.PI / 2);
        });

        test('-90 degrees === -0.25 turns === -Math.PI / 2 radians', () => {
            const angle = new Angle();
            angle.degrees = -90;
            expect(angle.turns).toBeCloseTo(-0.25);
            expect(angle.degrees).toBeCloseTo(-90);
            expect(angle.radians).toBeCloseTo(-Math.PI / 2);
        });

        test('180 degrees === 0.5 turns === Math.PI radians', () => {
            const angle = new Angle();
            angle.degrees = 180;
            expect(angle.turns).toBeCloseTo(0.5);
            expect(angle.degrees).toBeCloseTo(180);
            expect(angle.radians).toBeCloseTo(Math.PI);
        });

        test('-180 degrees === -0.5 turns === -0.5 turns === -Math.PI radians', () => {
            const angle = new Angle();
            angle.degrees = -180;
            expect(angle.turns).toBeCloseTo(-0.5);
            expect(angle.degrees).toBeCloseTo(-180);
            expect(angle.radians).toBeCloseTo(-Math.PI);
        });

        test('270 degrees === 0.75 turns === Math.PI * 1.5 radians', () => {
            const angle = new Angle();
            angle.degrees = 270;
            expect(angle.turns).toBeCloseTo(0.75);
            expect(angle.degrees).toBeCloseTo(270);
            expect(angle.radians).toBeCloseTo(Math.PI * 1.5);
        });

        test('-270 degrees === -0.75 turns === -Math.PI * 1.5 radians', () => {
            const angle = new Angle();
            angle.degrees = -270;
            expect(angle.turns).toBeCloseTo(-0.75);
            expect(angle.degrees).toBeCloseTo(-270);
            expect(angle.radians).toBeCloseTo(-Math.PI * 1.5);
        });

        test('360 degrees === 1 turns === Math.PI * 2 radians', () => {
            const angle = new Angle();
            angle.degrees = 360;
            expect(angle.turns).toBeCloseTo(1);
            expect(angle.degrees).toBeCloseTo(360);
            expect(angle.radians).toBeCloseTo(Math.PI * 2);
        });

        test('-360 degrees === -1 turns === -Math.PI * 2 radians', () => {
            const angle = new Angle();
            angle.degrees = -360;
            expect(angle.turns).toBeCloseTo(-1);
            expect(angle.degrees).toBeCloseTo(-360);
            expect(angle.radians).toBeCloseTo(-Math.PI * 2);
        });

        test('540 degrees === 1.5 turns === Math.PI * 3 radians', () => {
            const angle = new Angle();
            angle.degrees = 540;
            expect(angle.turns).toBeCloseTo(1.5);
            expect(angle.degrees).toBeCloseTo(540);
            expect(angle.radians).toBeCloseTo(Math.PI * 3);
        });

        test('-540 degrees === -1.5 turns === -Math.PI * 3 radians', () => {
            const angle = new Angle();
            angle.degrees = -540;
            expect(angle.turns).toBeCloseTo(-1.5);
            expect(angle.degrees).toBeCloseTo(-540);
            expect(angle.radians).toBeCloseTo(-Math.PI * 3);
        });

    });

    describe('setting angle.radians', () => {

        test('0 radians === 0 degrees === 0 turns', () => {
            const angle = new Angle();
            angle.radians = 0;
            expect(angle.turns).toBe(0);
            expect(angle.degrees).toBe(0);
            expect(angle.radians).toBe(0);
        });

        test('Math.PI / 4 radians === 45 degrees === 0.125 turns', () => {
            const angle = new Angle();
            angle.radians = Math.PI / 4;
            expect(angle.turns).toBeCloseTo(0.125);
            expect(angle.degrees).toBeCloseTo(45);
            expect(angle.radians).toBeCloseTo(Math.PI / 4);
        });

        test('-Math.PI / 4 radians === -45 degrees === -0.125 turns', () => {
            const angle = new Angle();
            angle.radians = -Math.PI / 4;
            expect(angle.turns).toBeCloseTo(-0.125);
            expect(angle.degrees).toBeCloseTo(-45);
            expect(angle.radians).toBeCloseTo(-Math.PI / 4);
        });

        test('Math.PI / 2 radians === 90 degrees === 0.25 turns', () => {
            const angle = new Angle();
            angle.radians = Math.PI / 2;
            expect(angle.turns).toBeCloseTo(0.25);
            expect(angle.degrees).toBeCloseTo(90);
            expect(angle.radians).toBeCloseTo(Math.PI / 2);
        });

        test('-Math.PI / 2 radians === -90 degrees === -0.25 turns', () => {
            const angle = new Angle();
            angle.radians = -Math.PI / 2;
            expect(angle.turns).toBeCloseTo(-0.25);
            expect(angle.degrees).toBeCloseTo(-90);
            expect(angle.radians).toBeCloseTo(-Math.PI / 2);
        });

        test('Math.PI radians === 180 degrees === 0.5 turns', () => {
            const angle = new Angle();
            angle.radians = Math.PI;
            expect(angle.turns).toBeCloseTo(0.5);
            expect(angle.degrees).toBeCloseTo(180);
            expect(angle.radians).toBeCloseTo(Math.PI);
        });

        test('-Math.PI radians === -180 degrees === -0.5 turns === -0.5 turns', () => {
            const angle = new Angle();
            angle.radians = -Math.PI;
            expect(angle.turns).toBeCloseTo(-0.5);
            expect(angle.degrees).toBeCloseTo(-180);
            expect(angle.radians).toBeCloseTo(-Math.PI);
        });

        test('Math.PI * 1.5 radians === 270 degrees === 0.75 turns', () => {
            const angle = new Angle();
            angle.radians = Math.PI * 1.5;
            expect(angle.turns).toBeCloseTo(0.75);
            expect(angle.degrees).toBeCloseTo(270);
            expect(angle.radians).toBeCloseTo(Math.PI * 1.5);
        });

        test('-Math.PI * 1.5 radians === -270 degrees === -0.75 turns', () => {
            const angle = new Angle();
            angle.radians = -Math.PI * 1.5;
            expect(angle.turns).toBeCloseTo(-0.75);
            expect(angle.degrees).toBeCloseTo(-270);
            expect(angle.radians).toBeCloseTo(-Math.PI * 1.5);
        });

        test('Math.PI * 2 radians === 360 degrees === 1 turns', () => {
            const angle = new Angle();
            angle.radians = Math.PI * 2;
            expect(angle.turns).toBeCloseTo(1);
            expect(angle.degrees).toBeCloseTo(360);
            expect(angle.radians).toBeCloseTo(Math.PI * 2);
        });

        test('-Math.PI * 2 radians === -360 degrees === -1 turns', () => {
            const angle = new Angle();
            angle.radians = -Math.PI * 2;
            expect(angle.turns).toBeCloseTo(-1);
            expect(angle.degrees).toBeCloseTo(-360);
            expect(angle.radians).toBeCloseTo(-Math.PI * 2);
        });

        test('Math.PI * 3 radians === 540 degrees === 1.5 turns', () => {
            const angle = new Angle();
            angle.radians = Math.PI * 3;
            expect(angle.turns).toBeCloseTo(1.5);
            expect(angle.degrees).toBeCloseTo(540);
            expect(angle.radians).toBeCloseTo(Math.PI * 3);
        });

        test('-Math.PI * 3 radians === -540 degrees === -1.5 turns', () => {
            const angle = new Angle();
            angle.radians = -Math.PI * 3;
            expect(angle.turns).toBeCloseTo(-1.5);
            expect(angle.degrees).toBeCloseTo(-540);
            expect(angle.radians).toBeCloseTo(-Math.PI * 3);
        });

    });

});