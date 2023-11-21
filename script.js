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
   button.textContent = ".";
   let counter = 0;

   let intervalId = setInterval(() => {
       let isEven = counter % 2 === 0;
       button.style.transition = "opacity 1s";
       button.style.opacity = isEven ? "1" : "0";
       counter++;
       
       if(counter > 7){
           clearInterval(intervalId);
           button.textContent = "ERROR: DATA BREACH";
           button.setAttribute("style", "color: red;")
           button.style.opacity = "1"
       }
   }, 1000);
});


