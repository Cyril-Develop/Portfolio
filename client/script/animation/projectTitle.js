/**********************************/
// ------ Title "PROJETS" ------ //
/********************************/
export const animProjectTitle = () => {

    // Media queries
    const mediaQuery = window.matchMedia("(max-width: 1300px)");

    // By default
    let startPoint = "top bottom";

    // if under 1200px
    if(mediaQuery.matches) {
        startPoint = "top 100%";
    }

    gsap.timeline({
        ease: "none",
        scrollTrigger: {
            trigger: ".main_title",
            start: startPoint,
            endTrigger: ".main_slider_project",
            end: "bottom bottom",
            scrub: 1
        }
    })
        .to(".title-bg", {
            x: "0",
            duration: 2
        });
};