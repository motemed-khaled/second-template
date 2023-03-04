// start top scroll
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
document.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    document.querySelector(".top-scroll").style.width = `${((scrollTop / height) * 100)}%`;
})
// end top scroll
// start landing slider
// data uses two connect bullets to my image
let imgSrc = ["../image/landing.jpg", "../image/2.jpg", "../image/3.png"];
let bullets = ["pone", "ptwo", "pthree"];
let slideNum = 0;

// handle pre and next button
preButton = document.getElementById("left");
nextButton = document.getElementById("right");

preButton.onclick = preSlide;
nextButton.onclick = nextSlide;
// to show next image
function nextSlide() { 
    slideNum === imgSrc.length - 1 ? slideNum = 0 : slideNum++;
    document.querySelector(".landing").style.backgroundImage = `url("${imgSrc[slideNum]}")`;
    for (let i = 0; i < bullets.length; i++) {
        document.querySelector(`.landing .bullets li.${bullets[i]}`).classList.remove("active")
    }
    document.querySelector(`.landing .bullets li.${bullets[slideNum]}`).classList.add("active");
}
// two show previous image
function preSlide() {
    slideNum = slideNum - 1;
    slideNum < 0 ? slideNum = imgSrc.length - 1 : slideNum;
    document.querySelector(".landing").style.backgroundImage = `url("${imgSrc[slideNum]}")`;
    for (let i = 0; i < bullets.length; i++) {
        document.querySelector(`.landing .bullets li.${bullets[i]}`).classList.remove("active");
    }
    document.querySelector(`.landing .bullets li.${bullets[slideNum]}`).classList.add("active");
}
// change image by bullets
document.addEventListener("click", function (e) {
    if (e.target.classList.value === "pone" || e.target.classList.value === "ptwo" || e.target.classList.value === "pthree") {
        for (let i = 0; i < bullets.length; i++) {
            document.querySelector(`.landing .bullets li.${bullets[i]}`).classList.remove("active")
        }
        document.querySelector(".landing").style.backgroundImage = `url("${imgSrc[bullets.indexOf(e.target.classList.value)]}")`;
        document.querySelector(`.landing .bullets li.${bullets[bullets.indexOf(e.target.classList.value)]}`).classList.add("active");
    }
})
// end landing slider
//=====================================================================================
// start shuffle section
let btnShuffle = document.querySelectorAll(".portofilo .shuffle li");
for (let i = 0; i < btnShuffle.length; i++) {
    btnShuffle[i].onclick = function () {
        // remove class active from all li and add this to target
        for (let j = 0; j < btnShuffle.length; j++) {
            btnShuffle[j].classList.remove("active");
        }
        this.classList.add("active");
        //target all image that has the same data-class for the button
        let boxs = document.querySelectorAll(".portofilo .image-container .box");
        if (this.getAttribute("data-class") === "all") {
            for (let i = 0; i < boxs.length; i++) {
                boxs[i].style.opacity = "1";
            }
        } else {
            for (let i = 0; i < boxs.length; i++) {
                boxs[i].style.opacity = "0.2";
                if (this.getAttribute("data-class") === boxs[i].getAttribute("data-class")) {
                boxs[i].style.opacity = "1";
                }
            }
        }
    }
}
// end shuffle section
//============================================================================