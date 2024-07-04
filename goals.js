let hamburger = document.querySelector(".close i");
let left = document.querySelector(".left");
let close = document.querySelector(".left i");
hamburger.addEventListener("click", function(){
        left.style.display = "initial"
})
close.addEventListener("click", function(){
        left.style.display = "none"
})