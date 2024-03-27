export const initHero = () => {
  const tlHero = gsap.timeline();

  const blocs = document.querySelectorAll(".bloc_fadeOut");
  const shuffledBlocs = Array.from(blocs).sort(() => Math.random() - 0.6);
  const letterElements = document.querySelectorAll(".letter_fadeIn");
  const shuffledLetters = Array.from(letterElements).sort(
    () => Math.random() - 0.6
  );

  tlHero
    .to(shuffledLetters, {
      autoAlpha: 1,
      duration: 0.2,
      stagger: 0.02,
    })
    .to(shuffledBlocs, {
      autoAlpha: 0,
      duration: 0.2,
      stagger: 0.02,
    })
    .addLabel("letters")
    .to(
      [".fadeIn_bottom", ".hero_footer"],
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.2,
        stagger: 0,
      },
      "letters"
    );

  tlHero
    .to(".line", {
      visibility: "visible",
      width: "15rem",
      duration: 0.2,
    })
    .to(".hero_footer_scroll", {
      autoAlpha: 1,
      duration: 0.2,
    });

  const tlScroll = gsap.timeline({ repeat: -1 });

  tlScroll
    .to(".hero_footer_scroll_anim", {
      duration: 0.2,
      y: 10,
      opacity: 1,
      ease: "power2.inOut",
    })
    .to(".hero_footer_scroll_anim", {
      duration: 0.6,
      y: 0,
      opacity: 0,
      ease: "power2.inOut",
    });
};
