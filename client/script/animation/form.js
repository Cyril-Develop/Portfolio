/**********************************/
// ------------ Form ----------- //
/********************************/
export const animForm = () => {
    
    gsap.timeline({
        scrollTrigger: {
            trigger: ".form",
            start: "top 70%",
            end: "center 80%",
            scrub: 1
        },
    })
        .fromTo(".form", {
            autoAlpha: 0
        }, {
            autoAlpha: 1
        })
};