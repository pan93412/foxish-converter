import convertToFoxish from "./replacer.js";

/**
 * @param {Function} gtag 
 */
export function main(gtag) {
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

        gtag('event', 'translate', {
            'event_category': 'engagement',
            'event_label': 'translate',
        });
    });

    setTarget(convertToFoxish(""));
}
