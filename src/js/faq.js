import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

document.addEventListener("DOMContentLoaded", function () {
    const accordion = new Accordion(".faq", {
        duration: 400,
        showMultiple: false,
        elementClass: "faq-item",
        triggerClass: "faq-btn",
        panelClass: "faq-content",
        activeClass: "is-open",
    });
});