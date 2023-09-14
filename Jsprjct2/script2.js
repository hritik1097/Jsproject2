window.addEventListener("mousemove", function (details) {
    var rect = document.querySelector(".rectan")
    var ritik = gsap.utils.mapRange(0, window.innerWidth, 100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX)
    gsap.to(".rectan", {
        left: ritik,
        ease: Power3
    });
});