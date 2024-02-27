export const initHero = () => {
    const tlHero = gsap.timeline();

    const letterElements = document.querySelectorAll(".letter_fadeIn");
    const shuffledLetters = Array.from(letterElements).sort(
        () => Math.random() - 0.5
    );

    tlHero
        .to(shuffledLetters, {
            autoAlpha: 1,
            duration: 0.5,
            stagger: 0.04,
        })
        .addLabel("letters")
        .to(
            [".fadeIn_bottom", ".hero_footer"],
            {
                autoAlpha: 1,
                y: 0,
                delay: 0,
                stagger: 0,
            },
            "letters"
        )   
    if (window.innerWidth < 700) {
        tlHero.to(".hero_main_img", {
            x: "0",
            y: "0",
            rotate: "0",
            duration: 0.3,
        });
    } else if (window.innerWidth < 1200) {
        tlHero.to(".hero_main_img", {
            x: "50%",
            y: "10%",
            rotate: "-4deg",
            duration: 0.3,
        });
    }
    else if (window.innerWidth > 1200)  {
        tlHero.to(".hero_main_img", {
            x: "85%",
            y: "10%",
            rotate: "-4deg",
            duration: 0.3,
        });
    }
    tlHero
        .to(".line", {
            visibility: "visible",
            width: "15rem",
        })
        .to(".hero_footer_scroll", {
            autoAlpha: 1,
        });

    const tlScroll = gsap.timeline({ repeat: -1 });

    tlScroll
        .to(".hero_footer_scroll_anim", {
            duration: 0.5,
            y: 10,
            opacity: 1,
            ease: "power2.inOut",
        })
        .to(".hero_footer_scroll_anim", {
            duration: 1,
            y: 0,
            opacity: 0,
            ease: "power2.inOut",
        });
};