export const animLoader = () => {
    gsap.timeline({ repeat: -1 })
    .to(".form_send_btn_loader", { rotation: 360, duration: 1, ease: "none" });
};
