var buttonOpenMob = document.getElementById("button-open-mob");
var buttonCloseMob = document.getElementById("button-close-mob");
var mobailMenu = document.getElementById("mobail-menu");

buttonOpenMob.addEventListener("click", function () {
  mobailMenu.classList.add("is-open");
});
buttonCloseMob.addEventListener("click", function () {
  mobailMenu.classList.remove("is-open");
});
