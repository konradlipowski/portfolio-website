//background-blob
const blob = document.getElementById("background-blob")
const blur = document.getElementById("blur")
document.addEventListener("mousemove", function (e) {
	let x = e.clientX
	let y = e.clientY
	blob.animate(
		{
			left: x + "px",
			top: y + "px",
		},
		{ duration: 2000, fill: "forwards" }
	)
})

//Nav
const hamburgerMenu = document.getElementById("hamburger-menu")

document.addEventListener("DOMContentLoaded", function () {
	const navIcon = document.getElementById("hamburger-menu")
	navIcon.addEventListener("click", function () {
		navIcon.classList.toggle("open")
	})
})

hamburgerMenu.addEventListener("click", function () {
	const nav = document.querySelector("nav")
	nav.classList.toggle("nav-open")
})
