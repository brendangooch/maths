/**
 * round to fixed number of places
 * OR the nearest 10, 100, 1000, ... by entering a negative value as the places param
 * (credit Coding Math channel on YouTube)
 */

export function roundToPlaces(value: number, places: number): number {
    const mult = Math.pow(10, places);
    return Math.round(value * mult) / mult;
}