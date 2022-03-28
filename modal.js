const modal = document.querySelector("#modal-id");
const btnOpen = document.querySelector("#btn-open");
const btnClose = document.querySelector(".close");

btnOpen.addEventListener("click", modalActionOpen);
btnClose.addEventListener("click", modalClose);

function modalActionOpen() {
  modal.style.display = "block";
}

function modalClose() {
  modal.style.display = "none";
}
