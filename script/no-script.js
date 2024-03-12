function updateSlide(index){
    
    slideElement.forEach(function(element) {
        element.classList.remove('active');
    });  
    /* if(index > CheckIndex){
        IndexAnimation = "-"
    }else{
        IndexAnimation = ""
    }


    slideElement[CheckIndex].animate([
        { transform: 'translateX(0px)', display: "block", },
        { transform: `translateX(${IndexAnimation}5000px)`, display: "none",}
      ], {
        duration: 500,
        iterations: 1
      }) */
    /*   CheckIndex = index */

    sliderBox.style.backgroundColor = slideColor[CheckIndex]


    /* if(IndexAnimation === ""){
        IndexAnimation = "-"
    }else{
        IndexAnimation = ""
    }
    slideElement[CheckIndex].animate([
        { transform: `translateX(${IndexAnimation}5000px)` },
        { transform: 'translateX(0px)' }
      ], {
        duration: 500,
        iterations: 1
      }) */


    slideElement[CheckIndex].classList.add('active')

}