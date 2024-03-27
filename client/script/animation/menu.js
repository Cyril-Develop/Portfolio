/***********************************************/
// -------- Display and animate menu -------- //
/*********************************************/
export const AnimMenu = () => {
  const btnHamb = document.querySelectorAll(".btn_menu");
  const navWrapper = document.querySelector(".hero_header_menu");
  const allLink = document.querySelectorAll(".nav_list_item");

  function resetMenu() {
    navWrapper.classList.remove("active");
    tlMenu.reverse();
  }

  const tlMenu = gsap.timeline({ paused: true });

  btnHamb.forEach((btn) => btn.addEventListener("click", toggleMenu));
  allLink.forEach((link) => link.addEventListener("click", navigateToSection));

  tlMenu
    .fromTo(
      ".btn_menu_open",
      { y: "0" },
      { y: "-100%", duration: 0.1, delay: 0 }
    )
    .to(navWrapper, { y: "0", duration: 0.1, delay: 0, ease: "none" })
    .fromTo(
      ".btn_menu_close",
      { y: "-100%" },
      { y: "0", duration: 0.1, delay: 0 }
    )
    .to(".nav_list_item_link", { y: 0, delay: 0, stagger: 0.1 });

  function toggleMenu() {
    navWrapper.classList.toggle("active");

    navWrapper.classList.contains("active") ? tlMenu.play() : tlMenu.reverse();
  }

  /************************************************************/
  // -------- Animation when clicking on menu links -------- //
  /**********************************************************/
  function navigateToSection() {
    resetMenu();
    gsap
      .timeline({ ease: "power4.inOut" })
      .set(".curtain", { flexDirection: "row" })
      .set(".curtain_tile", { height: "0", width: "100%", top: "0" })
      .to(".curtain_tile", {
        duration: 0.55,
        height: "100%",
        top: "0%",
        delay: 0.1,
        stagger: 0.05,
      })
      .to(".curtain_tile", {
        duration: 0.55,
        height: "100%",
        top: "100%",
        delay: 0.1,
        stagger: -0.05,
      })
      .set(".curtain_tile", { top: "0", height: "0" });
  }
};
