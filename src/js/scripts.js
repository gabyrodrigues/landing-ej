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

button_newsletter.onclick = function (e) {
    e.preventDefault();
    alert("Assinatura concluída com sucesso!");
    input_newsletter.value = "";
}
