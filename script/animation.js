window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    slideImage[SlideIndex].style.transform = `translate(${-x/80}px, ${-y/80}px)`;
    astronautImage[SlideIndex].style.transform = `translate(${-x/250}px, ${-y/250}px)`;
})





