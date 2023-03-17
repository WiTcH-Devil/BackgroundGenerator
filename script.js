let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h5");
let body= document.getElementById("gradient");

function gradientBackground(){
    body.style.background = 
    "linear-gradient(to right ," 
    + color1.value
    + " , " 
    + color2.value 
    + ")" ;

    css.textContent = body.style.background ;
}

color1.addEventListener("input" , gradientBackground);
color2.addEventListener("input" , gradientBackground);