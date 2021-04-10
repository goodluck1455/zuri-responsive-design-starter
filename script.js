let navBar = document.querySelector(".nav-bar ul")
let hamburger = document.querySelector(".fa-bars")
let fatimes = document.querySelector(".fa-times")

hamburger.addEventListener("click", ()=>{
 navBar.style.top = "3.9rem"
 hamburger.style.display = "none"
 fatimes.style.display = "block"
})
fatimes.addEventListener("click", () => {
 navBar.style.top = "-18rem"
 hamburger.style.display = "block"
 fatimes.style.display = "none"
})