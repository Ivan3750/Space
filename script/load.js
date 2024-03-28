let mask = document.querySelector('.mask');
let loader = document.querySelector('.loader');
colorLoad = ["#FA6401","#32C5FF","#6236FF","#F7B501"]
let element;
let isLoad = false

window.addEventListener('load', () => {
  isLoad = true
  mask.classList.add('hide');
  setTimeout(() => {
    mask.remove();
  }, 100);
})


let IndexPlanet = 0
if(!isLoad){
  CreateElem()
}




  function CreateElem(){
    console.log(1)
    mask.style.backgroundColor = colorLoad[IndexPlanet];
    element = document.createElement("img")
   element.src = `./images/${planetsURL[IndexPlanet]}`
   if(IndexPlanet == 3){
     IndexPlanet = 0
   }else{
     IndexPlanet++
   }
   element.style.width = `50px`
   loader.append(element)
   hideElem()
  }
/* }) */


function hideElem() {
  if (element) {
    element.animate(
                  [{
                          transform: "translateY(0px)",
                          opacity: "1"
                  }, {
                          transform: "translateY(30px)",
                          opacity: "0.5"
                  }], {
                          duration: 400,
                          easing: "ease-out"
                  }
          ).onfinish = () => {
                  loader.innerHTML = '';
                  CreateElem()
          };
  }
}