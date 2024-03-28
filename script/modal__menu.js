const menuBtn = document.querySelector('.header__menu-img');
const closeBtn = document.querySelector('.header__close-img');
const modalBackground = document.querySelector('.modal__background');
const modalMenu = document.querySelector('.modal__menu');
const modalCard = document.querySelector('.modal__card');
const closeCircle = document.querySelector('.header__cicrle-close');
let indexDuration = 750
const planetsURL = [
        "Mars.png", "Planet.png", "Mercury.png", "Venus.png"
]
const astronautURL = [
        "/astronaut/1.png", "/astronaut/2.png", "/astronaut/3.png", "/astronaut/4.png"
]



menuBtn.addEventListener("click", () => {
        menuBtn.style.display = "none"
        modalBackground.classList.remove('hide')
        modalBackground.classList.add("show")
        setTimeout(() => {
                modalMenu.classList.add("show")
        }, 400)
        closeCircle.classList.add("show")
        closeBtn.style.display = "block"
})
closeBtn.addEventListener("click", () => {
        modalBackground.classList.remove('show')
        modalBackground.classList.add('hide')
        modalMenu.classList.remove("show")
        closeCircle.classList.remove("show")
        menuBtn.style.display = "block"
        closeBtn.style.display = "none"

})


/* window.addEventListener("keydown", ()=>{
        if(event.key = "Enter"){
                if)
                outletCard()
                setTimeout(()=>{
                        CreateCard(1)
                        inletCard()
                },1200)
        }
})
 */


/* const planetBtns = document.querySelectorAll('.planet__box');

let CardIndex = -1
planetBtns.forEach((planetBtn, index)=>{
        planetBtn.onmouseover=() => {
                if(CardIndex == -1){
                        isCardFinish = false
                        CardIndex = index
                        CreateCard(index)
                        inletCard()
                        isCardFinish = true
                }
                else if(CardIndex != index && isCardFinish == true ){
                        isCardFinish = false
                        CardIndex = index
                        outletCard()
                        setTimeout(()=>{
                                CreateCard(index)
                                inletCard()
                        },indexDuration+150)
                        isCardFinish = true
                }

        }
})
let planetBox; 

function RemoveCard(){
        modalCard.innerHTML = '';

}
function CreateCard(index){
        if(modalCard.innerHTML == ""){
                modalCard.style.backgroundColor = slideColor[index]
        
                planetBox = document.createElement("div")
                planetBox.classList.add("modal-planet-box")
        
                let Planet = document.createElement("img")
                Planet.classList.add("modal-planet")
                Planet.src = `images/${planetsURL[index]}`
                
                let planetShadow = document.createElement("div")
                planetShadow.classList.add("modal-planet-shadow")
                
                modalCard.append(planetBox)
                planetBox.appendChild(Planet)
                planetBox.appendChild(planetShadow)
        }
        
}

const KeyframeOutlet = [
        {transform: "translateY(0px)", opacity: "0"},
        {transform: "translateY(-60px)", opacity: "1"},
] 
const OptionOutlet = {
        duration: indexDuration,
        iterations: 1,
        easing: "ease-out",
}
const KeyframeIntlet = [
        {transform: "translateY(50px)", opacity: "0"},
        {transform: "translateY(0px)", opacity: "1"},
] 
const OptionIntlet = {
        duration: indexDuration,
        iterations: 1,
        easing: "ease-in",
}

function outletCard(){
        if(planetBox){
                
                planetBox.animate(KeyframeOutlet, OptionOutlet)
                setTimeout(()=>{
                        RemoveCard()
                },indexDuration)
        }
}
function inletCard(){
        if(planetBox){
                planetBox.animate(KeyframeIntlet, OptionIntlet)
                planetBox.style.opacity = 1
        }
        
} */


const planetButtons = document.querySelectorAll('.planet__box');
const astronautButtons = document.querySelectorAll('.info__element');
let currentIndex = -1;

planetButtons.forEach((button, index) => {
        button.addEventListener('mouseover', () => {
                if (currentIndex !== index) {
                        showCard(index, planetsURL);
                }
        });
});
astronautButtons.forEach((button, index) => {
        button.addEventListener('mouseover', () => {
                if (currentIndex !== index) {
                        showCard(index, astronautURL);
                }
        });
});

function showCard(index, urlCard) {
        if (currentIndex !== -1) {
                hideCard(() => {
                        createCard(index, urlCard);
                        currentIndex = index;
                });
        } else {
                createCard(index, urlCard);
                currentIndex = index;
        }
}

function hideCard(callback) {
        const planetBox = document.querySelector('.modal-planet-box');
        if (planetBox) {
                planetBox.animate(
                        [{
                                transform: "translateY(0px)",
                                opacity: "1"
                        }, {
                                transform: "translateY(-60px)",
                                opacity: "0"
                        }], {
                                duration: indexDuration,
                                easing: "ease-out"
                        }
                ).onfinish = () => {
                        modalCard.innerHTML = '';
                        if (callback) callback();
                };
        }
}

function createCard(index, urlCard) {
        const planetBox = document.createElement('div');
        planetBox.classList.add('modal-planet-box');

        const planetImage = document.createElement('img');
        planetImage.classList.add('modal-planet');
        planetImage.src = `images/${urlCard[index]}`;

        const planetShadow = document.createElement('div');
        planetShadow.classList.add('modal-planet-shadow');

        modalCard.style.backgroundColor = slideColor[index];
        modalCard.appendChild(planetBox);
        planetBox.appendChild(planetImage);
        planetBox.appendChild(planetShadow);

        planetBox.animate(
                [{
                        transform: "translateY(50px)",
                        opacity: "0"
                }, {
                        transform: "translateY(0px)",
                        opacity: "1"
                }], {
                        duration: indexDuration,
                        easing: "ease-in"
                }
        );
}