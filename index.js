let burger_button = document.getElementById("burger_button");
let container_burger = document.getElementById("container_burger");
let burger_menu = document.getElementById("burger_menu");

container_burger.addEventListener("click", () => {
    container_burger.classList.toggle("opened");
    burger_menu.classList.toggle("opened");
})

window.onscroll = () => {
    dynamic_position();
}

const dynamic_position = () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    container_burger.style.top = "20px";
    burger_menu.style.top = `${winScroll}px`;
}