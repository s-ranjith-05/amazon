//to load side-navbar.
var sideBar=document.querySelector(".side-bar");
var hamburgerBtn=document.querySelector(".hamburger-btn");

hamburgerBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    sideBar.style.top="65px";
})