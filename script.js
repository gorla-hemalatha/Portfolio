// =========================
// Typing Effect
// =========================

const words = [
    "AWS CloudOps Engineer",
    "Cloud Enthusiast",
    "Linux Learner",
    "Web Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function type() {

    if (!typing) return;

    let current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === current.length) {

            deleting = true;

            setTimeout(type, 1800);

            return;

        }

    }

    else {

        typing.textContent = current.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)

                wordIndex = 0;

        }

    }

    setTimeout(type, deleting ? 60 : 120);

}

type();


// =========================
// Active Navbar
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop)

            current = section.getAttribute("id");

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current)

            link.classList.add("active");

    });

});


// =========================
// Scroll Reveal
// =========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.2});

document.querySelectorAll(".card,.skill-box,.project-card,.certificate-card,.contact-card").forEach(el=>{

observer.observe(el);

});


// =========================
// Floating Image
// =========================

const circle = document.querySelector(".circle");

let angle = 0;

setInterval(()=>{

if(circle){

angle+=0.02;

circle.style.transform=`translateY(${Math.sin(angle)*8}px)`;

}

},30);


// =========================
// Smooth Scroll
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// =========================
// Progress Animation
// =========================

window.addEventListener("load",()=>{

document.querySelectorAll(".bar div").forEach(bar=>{

let width = getComputedStyle(bar).width;

bar.style.width="0";

setTimeout(()=>{

bar.style.width=width;

},400);

});

});


// =========================
// Hover Scale
// =========================

document.querySelectorAll(".project-card,.skill-box,.card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

console.log("Portfolio Loaded 🚀");