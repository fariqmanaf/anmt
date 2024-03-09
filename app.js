const imageLogo = document.getElementById("image");
const span = document.getElementById("rotate");

imageLogo.onmouseenter = () => {
    const span = document.getElementById("span")
    span.style.visibility = "visible"
    gsap.from("#span", { x: 100 , opacity: 0, duration: 0.5})  
}

imageLogo.onmouseleave = () => {
    const span = document.getElementById("span")
    span.style.visibility = "hidden"
}


span.onmouseenter = () => {
    gsap.to("#rotate", { rotation: 360, x: 0, yPercent: 0, duration: 0.7})
}

gsap.from("#img-content", {opacity:0,x: -200, duration: 0.6, ease: "power1.inOut"})
gsap.from("#text-container", {opacity:0,x: 200, duration: 1, ease: "power1.inOut"})
gsap.from(".nav-container", {opacity:0,y: -100, duration: 1, ease: "power1.inOut"})