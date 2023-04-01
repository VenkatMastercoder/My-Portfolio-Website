let skills = document.getElementById("skills");
let Experience = document.getElementById("Experience");
let Eduction = document.getElementById("Eduction");

let ExperienceContent = document.getElementById("ExperienceContent");
let SkillContent = document.getElementById("SkillContent");
let EductionContent = document.getElementById("EductionContent");

// Tab Switching 

ExperienceContent.classList.add("d-none");
EductionContent.classList.add("d-none");

skills.onclick = function() {
  SkillContent.classList.remove("d-none");
  ExperienceContent.classList.add("d-none");
  EductionContent.classList.add("d-none");
}

Experience.onclick = function() {
  ExperienceContent.classList.remove("d-none");
  SkillContent.classList.add("d-none");
  EductionContent.classList.add("d-none");
}

Eduction.onclick = function() {
  EductionContent.classList.remove("d-none");
  ExperienceContent.classList.add("d-none");
  SkillContent.classList.add("d-none");
}

let typed = new Typed(".auto-input", {
  strings: ["Venkatesan", "Web Developer","Coder"],
  typeSpeed: 150,
  backspeed: 150,
  loop: true
});


let a = document.querySelector(".a-div");
let Navul = document.querySelector(".Nav-ul");

let a2 = document.getElementById("l");
a2.addEventListener("click", function(){
  Navul.classList.toggle("active");
  a.classList.toggle("rotate");
});



let tag1 = document.getElementById("1");
let tag2 = document.getElementById("2");
let tag3 = document.getElementById("3");
let tag4 = document.getElementById("4");


tag1.addEventListener("click", function(e){
  Navul.classList.remove("active");
  a.classList.toggle("rotate");
});

tag2.addEventListener("click", function(e){
  Navul.classList.remove("active");
  a.classList.toggle("rotate");
});

tag3.addEventListener("click", function(e){
  Navul.classList.remove("active");
  a.classList.toggle("rotate");
});

tag4.addEventListener("click", function(e){
  Navul.classList.remove("active");
  a.classList.toggle("rotate");
});

let ToTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    ToTop.classList.add("active");
  }

  else {
    ToTop.classList.remove("active");
  }
});

let topb = document.getElementById("toptob");

topb.onclick = function() {
  window.scrollTo(0,0);
}

ScrollReveal({ 
  reset: true,
  distance: '10px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.About-me-section',{origin:'top'});
ScrollReveal().reveal('.About-heading',{origin:'left'});
ScrollReveal().reveal('.About-content',{delay: 500});
ScrollReveal().reveal('.xx',{delay: 500});
ScrollReveal().reveal('.top-container',{delay: 500});
ScrollReveal().reveal('.Skill-heading',{origin:'top',});
ScrollReveal().reveal('.Skills-Div',{origin:'top',});
ScrollReveal().reveal('.content-div',{origin:'top',});
ScrollReveal().reveal('.My-card',{origin:'bottom',});
ScrollReveal().reveal('.Servies-heading-div',{origin:'top',});
ScrollReveal().reveal('.My-service-card',{origin:'left'});
ScrollReveal().reveal('.ss1',{origin:'left'});
ScrollReveal().reveal('.ss2',{origin:'right'});

let e = document.getElementById("1");

e.addEventListener("click", function(e){
  e.classList.add("active");
})



