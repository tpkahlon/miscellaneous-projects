//========================
// Strict Syntax Rendering
//========================
"use strict";

//==================
// Application Logic
//==================
let button = document.querySelector(".btn-sign-up");
button.addEventListener("click", () => {
	button.classList.toggle("active");
});