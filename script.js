let fElem = document.querySelector("#f-elem");
let fSpan = document.querySelector("#f-span");
fElem.addEventListener("mouseover",function(){
        fSpan.style.display = "initial";
        // fSpan.style.transitionProperty = "top, right";
        fElem.style.scale = 1.1;
})
fElem.addEventListener("mouseleave",function(){  
        fSpan.style.display = "none";
        fElem.style.scale = 1;
        fElem.style.transition = "all ease 0.5s"
}) 

let xElem = document.querySelector("#x-elem");
let xSpan = document.querySelector("#x-span");
xElem.addEventListener("mouseover",function(){
        xSpan.style.display = "initial";
        // xSpan.style.transitionProperty = "top, right";
        xElem.style.scale = 1.1;
})
xElem.addEventListener("mouseleave",function(){  
        xSpan.style.display = "none";
        xElem.style.scale = 1;
        xElem.style.transition = "all ease 0.5s"
})  

let iElem = document.querySelector("#i-elem");
let iSpan = document.querySelector("#i-span");
iElem.addEventListener("mouseover",function(){
        iSpan.style.display = "initial";
        iElem.style.scale = 1.1;
})
iElem.addEventListener("mouseleave",function(){  
        iSpan.style.display = "none";
        iElem.style.scale = 1;
        iElem.style.transition = "all ease 0.5s"
})  

let liElem = document.querySelector("#li-elem");
let liSpan = document.querySelector("#li-span");
liElem.addEventListener("mouseover",function(){
        liSpan.style.display = "initial";
        liElem.style.scale = 1.1;
})
liElem.addEventListener("mouseleave",function(){  
        liSpan.style.display = "none";
        liElem.style.scale = 1;
        liElem.style.transition = "all ease 0.5s"
})   

fElem.addEventListener("click",function(){
        window.location.href = "http://www.facebook.com";
})
xElem.addEventListener("click",function(){
        window.location.href = "http://twitter.com/";
})
iElem.addEventListener("click",function(){
        window.location.href = "https://www.instagram.com/";
})
liElem.addEventListener("click",function(){
        window.location.href = "https://www.linkedin.com/";
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