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

// Updated to take the span including the buttons context. Context now pulsates; not the button.
button.addEventListener("click", () => {
    buttonSpan.textContent = ".";
    let counter = 0;
 
    let intervalId = setInterval(() => {
        let isEven = counter % 2 === 0;
        buttonSpan.style.transition = "opacity 0.2s";
        buttonSpan.style.opacity = isEven ? "1" : "0";
        counter++;
 
        if(counter > 8){
            clearInterval(intervalId);
            buttonSpan.textContent = "401 Unauthorized";
            button.setAttribute("style", "color: red;")
            button.style.opacity = "1"
            buttonClick = true;
                 reveal()
        }
    }, 1000);
 });
 
 // reaveal candidate & sign-up upon click of button-text
 let buttonClick = false; 
 
 let reveal = () => {
     if(buttonClick === true) {
       candidate.setAttribute("style", "opacity: 1; opacity: transition: 0.2s;")
     signUp.setAttribute("style", "opacity: 1; opacity: transition: 0.2s")
   }
 };
 
 home.addEventListener("click", () => {
 })
 
// Inline Javascript added to for-candidate & sign to open google forms
// <button onclick = "window.location = 'https://forms.gle/vUfZau3JRmA1Y9pi6';" 
// class = "for-candidate"> inline to open on same tab