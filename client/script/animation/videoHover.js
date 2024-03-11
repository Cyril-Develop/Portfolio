/**********************************/
/// ------- CURSOR EVENT ------ ///
/********************************/
export const showLinkOnHover = () => {
    const balises = document.querySelectorAll(".main_slider_project_media span");
    const videos = document.querySelectorAll(".main_slider_project_media a");
    const inertia = 0.1; // Facteur d'inertie pour le mouvement

    balises.forEach((balise, index) => {
        let baliseX = 0;
        let baliseY = 0;
        let mouseX = 0;
        let mouseY = 0;
        let baliseWidth = balise.offsetWidth;
        let baliseHeight = balise.offsetHeight;

        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const updateBalisePosition = () => {
            const rect = videos[index].getBoundingClientRect();

            const xRelativeToVideo = mouseX - rect.left - baliseWidth / 2;
            const yRelativeToVideo = mouseY - rect.top - baliseHeight / 2;

            const inVideo =
                mouseX >= rect.left &&
                mouseX <= rect.right &&
                mouseY >= rect.top &&
                mouseY <= rect.bottom;

            if (inVideo) {
                baliseX += (xRelativeToVideo - baliseX) * inertia;
                baliseY += (yRelativeToVideo - baliseY) * inertia;

                balise.style.transform = "scale(1)";
                balise.style.left = `${baliseX}px`;
                balise.style.top = `${baliseY}px`;
            } else {
                balise.style.transform = "scale(0)";
            }

            requestAnimationFrame(updateBalisePosition);
        };

        updateBalisePosition();
    });
};