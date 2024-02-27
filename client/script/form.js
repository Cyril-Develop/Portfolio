import { animLoader } from "./animation/loader.js";

export const form = () => {
    const form = document.querySelector("form");
    const formValid = document.querySelector(".form_send_message");
    const fields = form.querySelectorAll("input[type='text'], textarea");
    const userLastname = document.getElementById('lastname');
    const userFirstname = document.getElementById('firstname');
    const userMessage = document.getElementById('message');
    const userEmail = document.getElementById('email');
    const loader = document.querySelector(".form_send_btn_loader");
    const btnIcon = document.querySelector(".form_send_btn_icon");

    const checkEmail = () => {
        const regex = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
        if (!userEmail.value) {
            userEmail.nextElementSibling.innerHTML = "Le champ est vide";
            userEmail.classList.add("invalid");
        } else if (regex.test(userEmail.value)) {
            userEmail.nextElementSibling.innerHTML = "";
            userEmail.classList.remove("invalid");
        } else {
            userEmail.nextElementSibling.innerHTML = "Adresse email invalide";
            userEmail.classList.add("invalid");
        }
    };

    function checkFields(field) {
        if (field.validity.valueMissing) {
            field.nextElementSibling.innerHTML = "Le champ est vide";
            field.classList.add("invalid");
        } else {
            field.nextElementSibling.innerHTML = "";
            field.classList.remove("invalid");
        }
    };

    const showLoader = () => {
        loader.style.display = "block";
        btnIcon.style.display = "none";
        animLoader();
    };

    const hideLoader = () => {
        loader.style.display = "none";
        btnIcon.style.display = "block";
    };

    const sendMail = async () => {
        showLoader();

        const data = {
            lastname: userLastname.value,
            firstname: userFirstname.value,
            email: userEmail.value,
            message: userMessage.value,
        };

        try {
            const response = await fetch("https://cyril-develop.fr/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                hideLoader();
                form.reset();
                notifSubmitMessage("Message envoyé avec succés !", "valid");
            } else {
                hideLoader();
                notifSubmitMessage("Erreur, veuillez réessayer plus tard", "invalid");
            }
        } catch (error) {
            hideLoader();
            notifSubmitMessage("Erreur, veuillez réessayer plus tard", "invalid");
        }
    };

    const notifSubmitMessage = (message, statut) => {
        formValid.style.display = "block";
        formValid.innerHTML = message;
        formValid.classList.add(statut);
        setTimeout(() => formValid.style.display = "none", 3000);
    };

    fields.forEach(field => field.addEventListener("input", () => checkFields(field)));
    userEmail.addEventListener("input", checkEmail);

    form.addEventListener("submit", e => {
        e.preventDefault();
        fields.forEach(field => checkFields(field));
        checkEmail();

        if (form.checkValidity()) sendMail();
    });
};