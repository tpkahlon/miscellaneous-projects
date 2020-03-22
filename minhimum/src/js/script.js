let navToggle = document.querySelectorAll(".navigation__toggle");
let navList = document.querySelectorAll(".navigation__list");

navToggle.forEach(nav =>
  nav.addEventListener("click", e => {
    e.currentTarget.focus();
    e.currentTarget.nextElementSibling.classList.toggle("d-none");
    e.currentTarget.dataset.toggle === "secondary"
      ? document
          .querySelector(`[data-toggle="primary"]`)
          .nextElementSibling.classList.add("d-none")
      : document
          .querySelector(`[data-toggle="secondary"]`)
          .nextElementSibling.classList.add("d-none");
  })
);

window.addEventListener("DOMContentLoaded", () =>
  navList.forEach(nav => nav.classList.add("d-none"))
);
