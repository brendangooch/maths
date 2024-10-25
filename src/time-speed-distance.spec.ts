/**
 * TimeSpeedDistance tests
 */

import { TimeSpeedDistance } from "./time-speed-distance.js";

testAll();
function testAll(): void {
    describe('TimeSpeedDistance', () => {

        const distance = 1000;
        const time = 500;
        const speed = 2;

        // time = distance / speed
        test('calculates time correctly', () => {
            expect(new TimeSpeedDistance().setDistance(distance).setSpeed(speed).time).toBe(time);
        });

        // speed = distance / time
        test('calculates speed correctly', () => {
            expect(new TimeSpeedDistance().setDistance(distance).setTime(time).speed).toBe(speed);
        });

        // distance = speed * time
        test('calculates distance correctly', () => {
            expect(new TimeSpeedDistance().setSpeed(speed).setTime(time).distance).toBe(distance);
        });

        test('time returns 0 if distance not set', () => {
            expect(new TimeSpeedDistance().setSpeed(1).time).toBe(0);
        });

        test('time returns 0 if speed not set', () => {
            expect(new TimeSpeedDistance().setDistance(500).time).toBe(0);
        });

        test('time returns 0 if speed and distance not set', () => {
            expect(new TimeSpeedDistance().time).toBe(0);
        });

        test('speed returns 0 if distance not set', () => {
            expect(new TimeSpeedDistance().setTime(800).speed).toBe(0);
        });

        test('speed returns 0 if time not set', () => {
            expect(new TimeSpeedDistance().setDistance(500).speed).toBe(0);
        });

        test('speed returns 0 if time and distance not set', () => {
            expect(new TimeSpeedDistance().speed).toBe(0);
        });

        test('distance returns 0 if speed not set', () => {
            expect(new TimeSpeedDistance().setTime(1000).distance).toBe(0);
        });

        test('distance returns 0 if time not set', () => {
            expect(new TimeSpeedDistance().setSpeed(5).distance).toBe(0);
        });

        test('distance returns 0 if time and speed not set', () => {
            expect(new TimeSpeedDistance().distance).toBe(0);
        });


    });

}