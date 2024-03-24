const shadowBox = document.querySelectorAll('.shadow__box');

window.addEventListener("mousemove",(e)=>{

    x = e.offsetX;
    y = e.offsetY;
    shadowBox.forEach(element => {
        element.style.transform = `translate(${-x/80}px, ${-y/80}px)`
    });
})





