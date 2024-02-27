/**********************************/
// ------- Section About ------- //
/********************************/
export const animAboutSection = () => {
    const lettersTitle = gsap.utils.toArray(".main_about_content_title span");

    // Media queries
    const mediaQueryMedium = window.matchMedia("(max-width: 1300px)");
    const mediaQuerySmall = window.matchMedia("(max-width: 800px)");

    // By default
    let startPoint = "bottom 50%";
    let endPoint = "center 55%";

    // if under 1300px or 800px
    if (mediaQuerySmall.matches) {
        startPoint = "bottom 90%";
        endPoint = "75% 80%";
    } else if (mediaQueryMedium.matches) {
        startPoint = "60% center"; 
    }   

    gsap.timeline({
        ease: "none",   
        scrollTrigger: {
            trigger: ".hero_main",
            start: startPoint,
            endTrigger: ".main_about",
            end: endPoint,
            scrub: 1
        },
    })
        .to(lettersTitle, {
            y: "5px",
            stagger: 0.1
        })
        .to(".main_about_content_text", {
            autoAlpha: 1
        })
        .to(".main_about_content_link", {
            x: 0,
            autoAlpha: 1
        });
};