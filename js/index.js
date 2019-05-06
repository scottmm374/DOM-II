// Your code goes here

// Page load alert

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");

});

//Resize 

window.addEventListener("resize", (event) => {
    console.log("reportWindowSize");
});

//NAV Link effects

let navColor = document.querySelectorAll(".nav-link");
navColor.forEach((i) =>{
    i.addEventListener("click", (event) => {
        event.target.style.color = "darkOrange";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 500);
    }, false);
});

//Header Logo

let logoHead = document.querySelector(".logo-heading");
logoHead.addEventListener("drag", (event) => {  
});

//H2 elements color Orange

let mainHead = document.querySelectorAll("h2");
mainHead.forEach((i) =>{
    i.addEventListener("mouseover", (event) => {
        event.target.style.color = "darkOrange";
        setTimeout(()=> {
            event.target.style.color = "";
        }, 500);
    }, false);
});


//Button events 

let btnMessage = document.querySelectorAll(".btn");
btnMessage.forEach((i) => {
    i.addEventListener("dblclick", (event) => {
        alert("Thank you for visiting Fun Bus");
    });
});

