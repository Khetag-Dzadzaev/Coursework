document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-menu").classList.toggle("open");
  document.querySelector(".burger-line").classList.toggle("active");
});





document.querySelectorAll("#button-modal").forEach(element => {
  element.addEventListener("click", function () {
    document.body.classList.toggle("noscrole");
    document.querySelector(".modal").classList.toggle("active");
    document.querySelector(".modal-content__close").classList.remove("close");
  })

});



document.querySelector(".modal-content__close").addEventListener("click", function () {
  document.body.classList.remove("noscrole");
  document.querySelector(".modal").classList.remove("active");
  document.querySelector(".modal-content__close").classList.toggle("close");
});
document.querySelector("#button-reg").addEventListener("click", function () {
  document.querySelector(".modal-reg").classList.toggle("active");
  document.querySelector(".modal-content__close-reg").classList.remove("close");
  document.querySelector(".modal").classList.remove("active");
});
document.querySelector(".modal-content__close-reg").addEventListener("click", function () {
  document.body.classList.remove("noscrole");
  document.querySelector(".modal-reg").classList.remove("active");
  document.querySelector(".modal-content__close-reg").classList.toggle("close");
});


