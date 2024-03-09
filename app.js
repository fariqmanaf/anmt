const imageLogo = document.getElementById("image");
const span = document.getElementById("rotate");

imageLogo.onmouseenter = () => {
    const span = document.getElementById("span")
    span.style.visibility = "visible"
    gsap.from("#span", { x: 100 , opacity: 0, duration: 0.5}) 
    
    imageLogo.onmouseleave = () => {
        document.getElementById("span").style.visibility = "hidden"}
}

span.onmouseleave = () => {
    gsap.to("#rotate", { rotation: 0, x: 0, yPercent: 0, duration: 0.7})
span.onmouseenter = () => {
    gsap.to("#rotate", { rotation: 360, x: 0, yPercent: 0, duration: 0.7})
}}

gsap.from("#img-content", {opacity:0,x: -300, duration: 0.4, ease: "power1.inOut"})
document.getElementById("img-content").addEventListener("click", function(){
    gsap.to("#img-content", {opacity:0,x: -500, duration: 1, ease: "power1.inOut"});
    gsap.fromTo("#btn-img", {opacity:0}, {x: 0 ,opacity:1 ,duration: 1, ease: "power1.inOut",delay: 1, visibility: "visible"});
});

document.getElementById("img-content").addEventListener("mouseover", function(){
    this.style.transform = "scale(1.02)";
});
document.getElementById("img-content").addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});

gsap.from("#text-container", {opacity:0,x: 200, duration: 1, ease: "power1.inOut"})
gsap.from(".nav-container", {opacity:0,y: -100, duration: 1, ease: "power1.inOut"})

document.getElementById("btn-img").addEventListener("mouseover", function(){
    this.style.transform = "scale(1.02)";
});
document.getElementById("btn-img").addEventListener("mouseout", function(){
    this.style.transform = "scale(1)";
});

document.getElementById("btn-img").addEventListener("click", function(){
    gsap.fromTo("#img-content", {opacity:0, x:-500}, {opacity:1 ,x: 0, duration: 1, ease: "power1.inOut", visibility: "visible"});
    gsap.fromTo("#btn-img", {opacity:1}, {x: 0 ,opacity:0 ,duration: 1, ease: "power1.inOut", visibility: "hidden"});
});

const colors = ["#840923", "#1d0c73", "#062622", "#f8af3a", "#fe7d34"];
const paragraph = document.getElementById("para");

const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
});

colors.forEach((color) => {
    tl.to(paragraph, {
        color: color,
        duration: 1,
        ease: "power2.inOut",
    });
});

tl.play();