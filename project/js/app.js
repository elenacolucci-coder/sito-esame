/* // Controllore ScrollMagic
var controller = new ScrollMagic.Controller();

// 2. Animazioni 

// Animazioni fade-in per immagini e altri elementi
var fadeElements = document.querySelectorAll(".fade-in, #about img");
fadeElements.forEach(function(el) {
    var tween = gsap.to(el, {opacity: 1, y: 0, duration: 1, ease: "power2.out"});

    new ScrollMagic.Scene({
        triggerElement: el,  // quando l'elemento entra nella viewport
        triggerHook: 0.9      // quasi in fondo allo schermo
    })
    .setTween(tween)
    .addTo(controller);
});

// Animazioni per le card dei progetti
var projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(function(card) {
    var tween = gsap.from(card, {opacity: 0, y: 50, duration: 1, ease: "power2.out"});

    new ScrollMagic.Scene({
        triggerElement: card,
        triggerHook: 0.9
    })
    .setTween(tween)
    .addTo(controller);
});

// tema 
var themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {
    var body = document.body;
    if(body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme"); // torna al tema 
    } else {
        body.setAttribute("data-theme", "dark"); // passa al tema 
    }
}); */