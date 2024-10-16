/**
 * an extremely simple way of maintaining an aspect ratio; enter initial width and height and aspect ratio is stored for life of object
 */

export class AspectRatio {

    private aspect: number = 1;

    constructor(width: number, height: number) {
        this.aspect = width / height;
    }

    width(height: number): number {
        return this.aspect * height;
    }

    height(width: number): number {
        return width / this.aspect;
    }

};