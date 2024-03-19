const sliderBox = document.querySelector('.slider');
const slideElement = document.querySelectorAll('.slide');
const slideImage = document.querySelectorAll('.slide__image');
/* const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');

 */

const animLetters = document.querySelectorAll('.animation-letter');


/* PARAMETERS */
let SlideIndex = 0
slideColor = ["#986042","#41539B","#FDE0BF","#DF8316"]

document.body.style.backgroundColor = slideColor[0]

function showSlide(Index){
    sliderBox.style.transform = `translateX(-${Index * 100}%)`;
}

function toSlide(Index){
    SlideIndex = Index
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


function updateSlide(index){
    SlideIndex = index
    slideElement.forEach(function(element) {
        element.classList.remove('active');
    });  
   
    document.body.style.backgroundColor = slideColor[SlideIndex]
    slideElement[SlideIndex].classList.add('active')

}



/* DOTS */
/*
const dotsElement = document.querySelectorAll('.dots__element');

dotsElement.forEach((dot, index) =>{  Index is  the  number of the clicked dot
    dot.addEventListener('click', ()=>{
        moveSlideAnimation(SlideIndex, index)
        updateSlide(index)
    })
})
 */






window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x/80}px, ${-y/80}px)`;
})