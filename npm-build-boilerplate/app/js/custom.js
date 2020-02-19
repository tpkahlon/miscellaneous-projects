//========================
// Strict Syntax Rendering
//========================
"use strict";

//==================
// Application Logic
//==================
var myApp = {};
myApp.init = () => {
	const SLANG = "Eh! ";
	const SPEAK = "Today, The weather is: ";
	let weather = 100;
	document.querySelector(".msg").textContent = SLANG + SPEAK + weather;
	$("video, audio").mediaelementplayer();
	$("#myForm").validator();
};

//===============
// Initialization
//===============
$(function() {
	myApp.init();
});