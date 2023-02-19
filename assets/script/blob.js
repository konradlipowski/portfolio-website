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
		{ duration: 3000, fill: "forwards" }
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

//Changing text
var Messenger = function (el) {
	"use strict"
	var m = this

	m.init = function () {
		m.codeletters = "&#*+%?£@§$"
		m.message = 0
		m.current_length = 0
		m.fadeBuffer = false
		m.messages = [
			"Frontend Developer.",
			"UI/UX Sensai.",
			"Web Developer ninja.",
			"Code Artist.",
			"Master of Pixels.",
			"Digital Dreamweaver.",
			"Design & Code Fanatic.",
		]

		setTimeout(m.animateIn, 100)
	}

	m.generateRandomString = function (length) {
		var random_text = ""
		while (random_text.length < length) {
			random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length))
		}

		return random_text
	}

	m.animateIn = function () {
		if (m.current_length < m.messages[m.message].length) {
			m.current_length = m.current_length + 2
			if (m.current_length > m.messages[m.message].length) {
				m.current_length = m.messages[m.message].length
			}

			var message = m.generateRandomString(m.current_length)
			el.innerHTML = message

			setTimeout(m.animateIn, 20)
		} else {
			setTimeout(m.animateFadeBuffer, 20)
		}
	}

	m.animateFadeBuffer = function () {
		if (m.fadeBuffer === false) {
			m.fadeBuffer = []
			for (var i = 0; i < m.messages[m.message].length; i++) {
				m.fadeBuffer.push({ c: Math.floor(Math.random() * 12) + 1, l: m.messages[m.message].charAt(i) })
			}
		}

		var do_cycles = false
		var message = ""

		for (var i = 0; i < m.fadeBuffer.length; i++) {
			var fader = m.fadeBuffer[i]
			if (fader.c > 0) {
				do_cycles = true
				fader.c--
				message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length))
			} else {
				message += fader.l
			}
		}

		el.innerHTML = message

		if (do_cycles === true) {
			setTimeout(m.animateFadeBuffer, 90)
		} else {
			setTimeout(m.cycleText, 2000)
		}
	}

	m.cycleText = function () {
		m.message = m.message + 1
		if (m.message >= m.messages.length) {
			m.message = 0
		}

		m.current_length = 0
		m.fadeBuffer = false
		el.innerHTML = ""

		setTimeout(m.animateIn, 0)
	}

	m.init()
}

console.clear()
var messenger = new Messenger(document.getElementById("header__changing-text"))
