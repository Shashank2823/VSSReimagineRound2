document.querySelector(".ser-1").addEventListener("mousemove", function(){
    document.querySelector(".h-div-1").style.top = "0%";
    document.querySelector(".ser-1").style.cursor = "pointer";
})

document.querySelector(".ser-1").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-1").style.top = "100%";
})
 

document.querySelector(".ser-2").addEventListener("mousemove", function(){
    document.querySelector(".h-div-2").style.top = "0%";
    document.querySelector(".ser-2").style.cursor = "pointer";
})

document.querySelector(".ser-2").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-2").style.top = "100%";
})

document.querySelector(".ser-3").addEventListener("mousemove", function(){
    document.querySelector(".h-div-3").style.top = "0%";
    document.querySelector(".ser-3").style.cursor = "pointer";
})

document.querySelector(".ser-3").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-3").style.top = "100%";
})

document.querySelector(".ser-4").addEventListener("mousemove", function(){
    document.querySelector(".h-div-4").style.top = "0%";
    document.querySelector(".ser-4").style.cursor = "pointer";
})

document.querySelector(".ser-4").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-4").style.top = "100%";
})


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"50% 50%",
    end:"100% 100%",
    scrub:true,
    // markers: true,
}});
tl
.to(".banner-1",{
    left: "-20%",
}, 'a')
.to(".banner-2",{
    right: "-15%",
}, 'a')


var tl2 = gsap.timeline();

tl2.to(".loader-text-container",{
    marginTop:"0vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-15vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-29vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-43vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-58vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-72vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-87vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-102vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-117vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-132vh",
    duration:0.8,
})
.to(".loader-text-container",{
    marginTop:"-150vh",
    duration:0.8,
})
.to(".loader-img",{
    width:"100%",
    height:"10vh",
    opacity:0,
},'same')
.to("#loader",{
    opacity:0,
    display:"none",
},'same')
.to("#loader",{
    marginTop: "-100%"
})

var face = document.querySelector("#loader");
var tilt=0;
var difftilt=0;

face.addEventListener("mousemove",function(details){
    difftilt = details.clientX - tilt;
    tilt = details.clientX
    gsap.to("#facewash",{
        ease: Power1,
        top: details.clientY,
        left: details.clientX,
        xPercent: -50,
        yPercent: -7,
        rotate: gsap.utils.clamp(-80, 80, difftilt*0.4)
    })
})

// 3rd part

const cubecontainers = document.querySelectorAll(".cube-container");
const items = document.querySelectorAll(".item")
const projectNames = ['urban', 'gabru', 'real', 'men'];

function updatecubes(scrollY) {
    const yRotation = (scrollY / 2)% 360;
    const scrolloffset = scrollY*0.25;

    cubecontainers.forEach((container, containerIndex) => {
        const cubes = container.querySelectorAll(".cube");

        cubes.forEach((cube, cubeIndex) => {
            let rotationDirection = cubeIndex % 2 === 0 ? 1: -1;
            cube.style.transform = `translateZ(100px) rotateX(${yRotation * rotationDirection}deg)`;
        })
            const frontBackTextPosition = 50 + scrolloffset;
            const topBottomTextPosition = 50 - scrolloffset;

            container.querySelectorAll(".front p, .back p").forEach(p =>{
                p.style.left = `${frontBackTextPosition}%`;
            });

            container.querySelectorAll(".top p, .bottom p").forEach(p =>{
                p.style.left = `${topBottomTextPosition}%`;
            });
        })

} 

function populateText(){
    items.forEach((item, itemIndex) => {
        const projectName = projectNames[itemIndex % projectNames.length];
        const sides = item.querySelectorAll(".side p");
        const textContent = Array(50).fill(projectName).join("&nbsp;&nbsp;&nbsp;&nbsp;");

        sides.forEach( side => {
            side.innerHTML = textContent;
        })
    })
}

window.onload = function(){
    populateText();
    updatecubes(window.scrollY);
}

let ticking = false;

document.addEventListener("scroll", function(e){
    if(!ticking){
        window.requestAnimationFrame(function(){
            updatecubes(window.scrollY);
            ticking = false;
        })

        ticking = true;
        
    }
})

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
