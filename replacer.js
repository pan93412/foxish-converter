import { attr } from "./attrtable.js";

export const defaultText = [";_;", ">w<"];

/**
 * @returns {string}
 */
export function getRandomDefaultText() {
    return defaultText[Math.floor(Math.random() * 2)];
}

/** @type {[RegExp, string][]} */
export const replacers = [
    [/^(.+)(?:ies)(\s|$|\!|\?|\.|\,)/g, "$1y$2"],
    [/^(.+)(?:[e]s)(\s|$|\!|\?|\.|\,)/g, "$1$2"],
    [/^(.+)(?:ing)(\s|$|\!|\?|\.|\,)/g, "$1$2"],
    [/^(.+)(?:ied)(\s|$|\!|\?|\.|\,)/g, "$1y$2"],
    [/^(.+)(?:ed)(\s|$|\!|\?|\.|\,)/g, "$1$2"],
    [/'|"|‘|‘|“|“/g, ""],
    [/([^\!oE])\1+/g, "$1"],
    [/\!/g, "1"],
    [/,|\./g, ""],
];

/**
 * Convert a text to Foxish.
 * 
 * @param {string} source
 */
export default function convertToFoxish(source) {
    let val = source;
    if (val.length === 0) return getRandomDefaultText();
    
    // Grammar Part
    replacers.forEach(([matcher, to]) => val = val.replace(matcher, to));

    // Vocabulary Part
    attr.forEach(([src, tgt]) => val = val.replace(src, tgt));
    
    return val.toLowerCase();
}
