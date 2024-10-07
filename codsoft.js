var typed= new Typed(".text", {
    strings: ["Frontend Developer" , "YouTuber" , "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}



const sections = document.querySelectorAll('section'); 

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetSection = document.querySelector(link.getAttribute('href'));

        sections.forEach(section => {
            section.classList.remove('active');
        });

        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const percentCircles = document.querySelectorAll('.percent svg circle:nth-child(2)');
    
    percentCircles.forEach(circle => {
        circle.classList.add('active');
    });
});   