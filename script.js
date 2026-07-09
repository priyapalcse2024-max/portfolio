// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Header Background Change on Scroll

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,0.95)";

    } else {

        header.style.background = "rgba(0,0,0,.25)";

    }

});


// Scroll to Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px #38bdf8";

window.addEventListener("scroll", function(){

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Fade Animation

const cards = document.querySelectorAll(".skill-card,.project-card,.contact-box");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

card.style.transition=".7s";

observer.observe(card);

});