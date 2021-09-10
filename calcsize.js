/**
 * @param {string} original 
 * @param {string} converted 
 */
export function calcSizePercent(original, converted) {
    return Math.floor(100 - ((converted.length || 1) / (original.length || 3)) * 100);
}
