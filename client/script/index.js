import { initHero } from "./animation/heroSection.js";
import { AnimMenu } from "./animation/menu.js";
import { animSliderOnX, animSliderOnY } from "./animation/sliderSection.js";
import { showLinkOnHover } from "./animation/videoHover.js";
import { animAboutSection } from "./animation/aboutSection.js";
import { animProjectTitle } from "./animation/projectTitle.js";
import { form } from "./form.js";
import { animForm } from "./animation/form.js";

/**********************************/
// ------- Smooth scroll ------- //
/********************************/
const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

/**********************************/
/// ----- Init hero section ---- //
/********************************/
window.addEventListener("load", initHero);

/**********************************/
/// -------- Animations -------- //
/********************************/
AnimMenu();
animProjectTitle();
if (window.innerWidth > 1300) {
    showLinkOnHover();
    animSliderOnX();
} else {
    animSliderOnY();
}
animAboutSection();
if (window.innerWidth > 1000) animForm();

/**********************************/
/// ----------- Form ----------- //
/********************************/
form();