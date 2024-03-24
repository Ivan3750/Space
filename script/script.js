const sliderBox = document.querySelector('.slider');
const slideElement = document.querySelectorAll('.slide');
const slideImage = document.querySelectorAll('.slide__image');
const astronautImage = document.querySelectorAll('.astronaut');
/* const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');

 */

const animLetters = document.querySelectorAll('.animation-letter');
console.log(slideElement.length)

/* PARAMETERS */
let SlideIndex = 0
slideColor = ["#FA6401","#32C5FF","#6236FF","#F7B501"]
/* slideColor = ["#986042","#41539B","#FDE0BF","#DF8316"]
 */
document.body.style.backgroundColor = slideColor[0]

function showSlide(Index){
    sliderBox.style.transform = `translateX(-${Index * 100}%)`;
}

function toSlide(Index){
    SlideIndex = Index
    document.body.style.backgroundColor = slideColor[Index]
    showSlide(SlideIndex)
}



/* btnRight.addEventListener("click", goNextSlide)
 */
function goNextSlide(){
    SlideIndex =  (SlideIndex + 1) % slideElement.length
    document.body.style.backgroundColor = slideColor[SlideIndex]
    showSlide(SlideIndex)
    animLetters[SlideIndex].classList.add("show")
    
}

/* btnLeft.addEventListener("click", goPrevSlide)
*/
function goPrevSlide(){
    SlideIndex = (SlideIndex - 1 + slideElement.length) % slideElement.length
    document.body.style.backgroundColor = slideColor[SlideIndex]
    showSlide(SlideIndex)
}




/* KEYDOWN */
window.addEventListener("keydown", ()=>{
    if(event.keyCode  == "39"){
        goNextSlide()
    }else if(event.keyCode  == "37"){
        goPrevSlide()
    }
})


/* 
/* let IndexAnimation = ""

/* NO-SCRIPT */




/* DOTS */

const dotsElement = document.querySelectorAll('.dots__element');

dotsElement.forEach((dot, index) =>{  
    dot.addEventListener('click', ()=>{
        toSlide(index)
    })
})






/* 
window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x/80}px, ${-y/80}px)`;
}) */