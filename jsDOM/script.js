// var main = document.querySelector("*");
// var a = document.querySelector("h1");
// a.innerHTML = "Changed Text";
// a.style.color = "grey";
// main.style.backgroundColor = "black";
// a.addEventListener("click", function() {
//     a.innerHTML = "Clicked heading";
//     a.style.color = "white";
//     main.style.backgroundColor = "grey";
//     // alert("You clicked on the heading!");
//     // console.log("Clicked");
// });
var clicked = false;
var bulbSelector = document.querySelector("#bulb");
var btnSelector = document.querySelector("button");
btnSelector.addEventListener("click", function(){
    if(!clicked) {
        bulbSelector.style.backgroundColor = "yellow";
        clicked = true;
        btnSelector.innerHTML = "OFF";
    }
    else {
        bulbSelector.style.backgroundColor = "transparent";
        clicked = false;
        btnSelector.innerHTML = "ON";
    }
});
