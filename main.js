const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

document.querySelector(".hamburger").addEventListener("click", () => {
  if (!menu.classList.contains("active")) {
    menu.classList.add("active");
    close.classList.add("active")
  }
});

document.querySelector(".close").addEventListener("click", () => {
  if (close.classList.contains("active")) {
    close.classList.remove("active");
    menu.classList.remove("active")
  }
});

if (document.querySelector(".landing-image")) {
    document.querySelector(".landing-image").addEventListener("click", () => {
    window.location.href = 'order.html'
  })
}

window.setTimeout(() => {
  document.querySelector(".modal").classList.add("active")
}, 1000);

const hideModal = () => {
  document.querySelector(".modal").classList.remove("active")
}

window.setTimeout(() => {
  hideModal()
}, 4000);

document.querySelector(".modal-button").addEventListener("click", () => {
  hideModal()
})
