let square = document.getElementById("square")
let black = document.getElementById("black")
let random = document.getElementById("random")
black.onclick = function(){
    square.style.backgroundColor = "black"
}


random.onclick = function (){
    let red = Math.random() * 255 
red = Math.round(red)
let green = Math.random() * 255 
green = Math.round(green)
let blue = Math.random() * 255 
blue = Math.round(blue)
square.style.backgroundColor = "rgb(" + red + "," +  green + "," +  blue + ")" 

}
 