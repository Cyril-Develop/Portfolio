/**********************************/
// --------- Horizontal -------- //
/********************************/
export const animSliderOnX = () => {
    const sections = gsap.utils.toArray(".main_slider_project");

    const sliderTl = gsap
        .timeline({
            ease: "none",
            scrollTrigger: {
                trigger: ".main_slider",
                start: "bottom bottom",
                scrub: 1,
                pin: true,
                end: () =>
                    "+=" + document.querySelector(".main_slider").offsetWidth,
            },
        })
        .to(".main_slider", {
            delay: 0.01,
            xPercent: -83.1
        });

    /*******************************************/
    // ------------ First section ----------- //
    /*****************************************/
    const timelineSection1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".main_title",
            start: "center 30%",
            scrub: 1
        },
    });

    timelineSection1.to(sections[0].querySelector(".overlay"), {
        y: "100%",
        ease: "none",
    });
    timelineSection1.to(
        sections[0].querySelector(".main_slider_project_infos"),
        {
            autoAlpha: 1,
            y: "0",
        }
    );

    /*******************************************/
    // ----------- Second section ----------- //
    /*****************************************/
    const sectionsSlider = gsap.utils
        .toArray(".main_slider .main_slider_project")
        .slice(1);

    const timelineSection2 = gsap.timeline({
        scrollTrigger: {
            trigger: sections[0],
            start: "center 20%",
            end: "right 40%",
            scrub: 1,
            containerAnimation: sliderTl,
        },
    });

    timelineSection2.to(sectionsSlider[0].querySelector(".overlay"), {
        y: "100%",
        ease: "none",
    });
    timelineSection2.to(
        sectionsSlider[0].querySelector(".main_slider_project_infos"),
        {
            autoAlpha: 1,
            y: "0",
        }
    );

    /*******************************************/
    // ----------- Third section ------------ //
    /*****************************************/
    const timelineSection3 = gsap.timeline({
        scrollTrigger: {
            trigger: sectionsSlider[0],
            start: "center 62%",
            end: "right 80%",
            scrub: 1,
            containerAnimation: sliderTl,
        },
    });

    timelineSection3.to(sectionsSlider[1].querySelector(".overlay"), {
        x: "100%",
        ease: "none",
    });
    timelineSection3.to(
        sectionsSlider[1].querySelector(".main_slider_project_infos"),
        {
            autoAlpha: 1,
            y: "0",
        }
    );

    /*******************************************/
    // ----------- Fourth section ----------- //
    /*****************************************/
    const timelineSection4 = gsap.timeline({
        scrollTrigger: {
            trigger: sectionsSlider[1],
            start: "center right",
            end: "80% 90%",
            scrub: 1,
            containerAnimation: sliderTl
        },
    });

    timelineSection4.to(sectionsSlider[2].querySelector(".overlay"), {
        y: "100%",
        ease: "none",
    });
    timelineSection4.to(
        sectionsSlider[2].querySelector(".main_slider_project_infos"),
        {
            autoAlpha: 1,
            y: "0",
        }
    );

    /*******************************************/
    // ----------- Fifth section ------------ //
    /*****************************************/
    const timelineSection5 = gsap.timeline({
        scrollTrigger: {
            trigger: sectionsSlider[2],
            start: "20% right",
            end: "70% 95%",
            scrub: 1,
            containerAnimation: sliderTl
        },
    });

    timelineSection5.to(sectionsSlider[3].querySelector(".overlay"), {
        x: "100%",
        ease: "none",
    });
    timelineSection5.to(
        sectionsSlider[3].querySelector(".main_slider_project_infos"),
        {
            autoAlpha: 1,
            y: "0",
        }
    );

    /*******************************************/
    // ----------- Sixth section ------------ //
    /*****************************************/
    const timelineSection6 = gsap.timeline({
        scrollTrigger: {
            trigger: sectionsSlider[3],
            start: "center right",
            end: "right center",
            scrub: 1,
            containerAnimation: sliderTl
        },
    });

    timelineSection6.to(sectionsSlider[4].querySelector(".overlay"), {
        y: "100%",
        ease: "none",
    });
    timelineSection6.to(
        sectionsSlider[4].querySelector(".main_slider_project_infos"),
        {
            autoAlpha: 1,
            y: "0",
        }
    );
};

/**********************************/
// --------- Vertical ---------- //
/********************************/
export const animSliderOnY = () => {
    const sections = gsap.utils.toArray(".main_slider_project");

    sections.forEach((section) => {
        gsap.timeline({
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top 95%",
                end: "50% center",
                scrub: 1
            },
        })
            .to(section.querySelector(".main_slider_project_infos"), {
                autoAlpha: 1,
                y: "0",
            })
            .to(section.querySelector(".overlay"), {
                y: "100%",
            });
    });
};