const mobileMenu = document.querySelector("#mobile-menu");
const links = document.querySelector("#links");

mobileMenu.addEventListener("click", toggle);

function toggle() {
  console.log("hola");
  links.classList.toggle("hidden");
}
