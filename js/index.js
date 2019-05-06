// Your code goes here

// Page load alert

window.addEventListener("load", (event) => {
    alert("Welcome to the Fun Bus!");
    
});

//Resize 

window.addEventListener("resize", (event) => {
    console.log("reportWindowSize");
});

//NAV Link effects and Prevent Default

let navRefresh = document.querySelectorAll(".nav-link");
navRefresh,addEventListener("click", (event) => {
    event.preventDefault();
});

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

//Events on input field. 

let formFocus = document.querySelector(".form");

formFocus.addEventListener("focus", (event) => {
    event.target.style.background = "lightsteelblue";
}, true);

let formBlur = document.querySelector(".form");
formBlur.addEventListener("blur", (event) => {
    event.target.style.background = "";
}, true);

let formKey = document.querySelector(".form");
formKey.addEventListener("keydown", (event) => {
    console.log(event.code);
});


  // stop propogation  when you click anywhere is Nav, Only one console log goes off instead of both. 


  let btnclick = document.querySelector(".main-navigation");
  btnclick.addEventListener("click", (event) => {
      console.log("Main Navigation");
      
  })

  let btnColor = document.querySelector(".nav-container");
  btnColor.addEventListener("click", (event) => {
      console.log("nav-container")
      event.stopPropagation();
  });
    