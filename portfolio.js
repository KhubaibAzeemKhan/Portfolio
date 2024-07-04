let sec = document.querySelector("section")
let span = document.querySelector(".portfolio span")
let port1 = document.querySelector(".port-content1")
let port2 = document.querySelector(".port-content2")
let netflix = document.querySelector("#netflix")
let show = 0;
var width = window.matchMedia("(max-width: 533px)")
span.addEventListener("click",function showContent(){
    if(show == 0){
        sec.style.height = "1500px";
        span.innerHTML = "SHOW LESS>"
        show = 1;
        port1.style.display = "flex";
        port2.style.display = "flex";
        span.style.color = "#00D646";
    }
    else if(show == 1){
        show = 0;
        sec.style.height = "790px";
        span.innerHTML = "SEE MORE>";
        port1.style.display = "none";
        port2.style.display = "none";
        span.style.color = "#fff";
    }
})


let hamburger = document.querySelector(".close i");
let left = document.querySelector(".left");
let close = document.querySelector(".left i");
hamburger.addEventListener("click", function(){
        left.style.display = "initial"
})
close.addEventListener("click", function(){
        left.style.display = "none"
})