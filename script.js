// Selecting elements from the DOM
button = document.querySelector(".data");
buttonSpan = document.querySelector("#button-text");
candidate = document.querySelector(".candidate");
signUp = document.querySelector(".sign-up");
home = document.querySelector(".home")
news = document.querySelector(".news")
files = document.querySelector(".files")


// COMMENT: This code makes the button pulse for about 5 seconds (alternating opacity every second) after it's clicked.
//Add aria-label to help set context for user. 

button.addEventListener("click", () => {
	button.textContent = "."
  for(let i = 0; i < 3; i++) {
  	return i % 2 === 0 ? button.setAttribute("style", "opacity: 1; opacity: transition 1s;")
    : i % 2 != 0 ? button.setAttribute("style", "opacity: 0; opacity: transition 1s;")
    : button.setAttribute("style", "opacity: 1; opacity: transition 1s;")
  }
})


