import convertToFoxish from "./replacer.js";

const src = /** @type {HTMLTextAreaElement} */ (document.getElementById("foxish-source"));
const tgt = /** @type {HTMLTextAreaElement} */ (document.getElementById("foxish-target"));

/**
 * @param {string} text
 */
function setTarget(text) {
    tgt.value = text;
}

src.addEventListener("input", () => {
    setTarget(convertToFoxish(src.value));
});

setTarget(convertToFoxish(""));
