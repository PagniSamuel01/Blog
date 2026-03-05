let login2 = document.querySelector(".logins");
let registre2 = document.querySelector(".registres");

let login = document.querySelector(".login");
let registre = document.querySelector(".registre");

let span=document.querySelector(".span");
let section = document.querySelector(".entete-login");
let section2 = document.querySelector(".entete-sin-up");

let left = document.getElementById("left");
let right = document.getElementById("rigt");

window.onload = function () {
  login2.addEventListener("click", function () {
    // Le left disparaît → fond vert sur son espace
    left.style.display = "none";
   if (login2){
    section.style.backgroundColor="transparent";
    section2.style.width='100%';
    section2.style.textAlign='center'
    section2.style.backgroundColor='#1bbe75'
   }
    // Le right apparaît sans aucune couleur ajoutée
    right.style.display = "block";
  });

  registre.addEventListener("click", function () {
    left.style.display = "block";
    right.style.display = "none";
    section.style.width='100%'
    if (registre){
    section.style.backgroundColor='#1bbe75'
    section.style.margi="20px auto"
    section.style.marginTop='200px'
    section.style.position='relatived'
    section.style.textAlign='center'
    section2.style.backgroundColor='transparent'
    
    } 
  });
};
