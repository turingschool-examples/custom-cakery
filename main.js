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
  document.querySelector("body").classList.add("modal-active")
}, 5000);

const hideModal = () => {
  document.querySelector(".modal").classList.remove("active")
  document.querySelector("body").classList.remove("modal-active")
}

window.setTimeout(() => {
  hideModal()
}, 10000);

document.querySelector(".modal-button").addEventListener("click", () => {
  hideModal()
})

document.querySelector(".modal--close").addEventListener("click", () => {
  hideModal()
})
