const sliderBox = document.querySelector('.slider');
const slideElement = document.querySelectorAll('.slide');
const slideImage = document.querySelectorAll('.slide__image');
const btnRight = document.querySelector('.right');
const btnLeft = document.querySelector('.left');


/* PARAMETERS */
let SlideIndex = 0
slideColor = ["#986042","#41539B","#FDE0BF","#DF8316"]


btnRight.addEventListener("click", goNextSlide)

function goNextSlide(){
    let oldSlide;
    oldSlide = SlideIndex
    SlideIndex =  (SlideIndex + 1) % slideElement.length
    slideElement.forEach(function(element) {
        element.classList.remove('active');
    });    
    sliderBox.style.backgroundColor = slideColor[SlideIndex]
    moveSlideAnimation(oldSlide, SlideIndex)
    slideElement[SlideIndex].classList.add('active')
}

btnLeft.addEventListener("click", goPrevSlide)

function goPrevSlide(){
    let oldSlide;
    oldSlide = SlideIndex
    SlideIndex = (SlideIndex - 1 + slideElement.length) % slideElement.length
    slideElement.forEach(function(element) {
        element.classList.remove('active');
    });    
    sliderBox.style.backgroundColor = slideColor[SlideIndex]
    moveSlideAnimation(oldSlide, SlideIndex)
    slideElement[SlideIndex].classList.add('active')
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
   
    sliderBox.style.backgroundColor = slideColor[SlideIndex]
    slideElement[SlideIndex].classList.add('active')

}



/* DOTS */

const dotsElement = document.querySelectorAll('.dots__element');

dotsElement.forEach((dot, index) =>{ /* Index is  the  number of the clicked dot*/
    dot.addEventListener('click', ()=>{
        moveSlideAnimation(SlideIndex, index)
        updateSlide(index)
    })
})







function moveSlideAnimation(oldSlide, newSlide = SlideIndex){ /* PrevSlide */
    
    let IndexAnimation = ""
    if(oldSlide < newSlide){ 
        IndexAnimation = "-"
    }else{
        IndexAnimation = ""
    }
    slideElement[oldSlide].animate([
        { transform: 'translateX(0px)', display: "block", },
        { transform: `translateX(${IndexAnimation}5000px)`, display: "none",}
      ], {
        duration: 500,
        iterations: 1
      })



    if(IndexAnimation === ""){
        IndexAnimation = "-"
    }else{
        IndexAnimation = ""
    }
    console.log(newSlide)
    slideElement[newSlide].animate([
        { transform: `translateX(${IndexAnimation}5000px)` },
        { transform: 'translateX(0px)' }
      ], {
        duration: 500,
        iterations: 1
      })

}

window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x/80}px, ${-y/80}px)`;
})