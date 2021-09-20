// window.onload = function () {
//   document.addEventListener("mouseleave", () => {
//     console.log("mouse left");
//   });
//   console.log(window.document);
// };

let emailModal = document.getElementsByClassName("email-modal")[0];

let closeModal = document.getElementsByClassName("email-modal__close-btn")[0];

let decline = document.getElementsByClassName("email-modal__decline-offer") [0];

decline.addEventListener("click", () => {
    emailModal.classList.remove("email-modal--visible");
  });

closeModal.addEventListener("click", () => {
  emailModal.classList.remove("email-modal--visible");
});

document.addEventListener("mouseleave", () => {
  emailModal.classList.add("email-modal--visible");
  console.log("mouse left");
});
