//menu
let navigation = document.querySelector(".nav-menu");
let button_nav = document.querySelector(".nav-mobile");
let close_nav = document.querySelector(".nav-close");
let body = document.querySelector("body");

button_nav.onclick = function () {
    navigation.classList.add("-visible");
    body.classList.add("-open");
}

close_nav.onclick = function () {
    navigation.classList.remove("-visible");
    body.classList.remove("-open");
}

//form newsletter
let button_newsletter = document.querySelector(".newsletter-form .action");
let input_newsletter = document.querySelector(".newsletter-form .input");
let email_regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button_newsletter.onclick = function (e) {
    e.preventDefault();
    if (input_newsletter.value !== "" && input_newsletter.value.match(email_regex)) {
        alert("Assinatura concluída com sucesso!");
    } else {
        alert("Email inválido, tente novamente");
    }
    input_newsletter.value = "";
}
