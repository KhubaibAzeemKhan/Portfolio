let fElem = document.querySelector("#f-elem");
fElem.addEventListener("click",function(){
    window.location.href = "http://www.facebook.com";
})
let xElem = document.querySelector("#x-elem");
xElem.addEventListener("click",function(){
    window.location.href = "http://twitter.com/";
})
let iElem = document.querySelector("#i-elem");
iElem.addEventListener("click",function(){
    window.location.href = "https://www.instagram.com/";
})
let liElem = document.querySelector("#li-elem");
liElem.addEventListener("click",function(){
    window.location.href = "https://www.linkedin.com/";
})

let hamburger = document.querySelector(".close i");
let left = document.querySelector(".left1");
let close = document.querySelector(".left1 i");
hamburger.addEventListener("click", function(){
        left.style.display = "initial"
})
close.addEventListener("click", function(){
        left.style.display = "none"
})