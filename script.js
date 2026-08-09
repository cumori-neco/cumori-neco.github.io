const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slide-dot");
const hero = document.querySelector("#home-hero");

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        slides[index].classList.add("active");
        dot.classList.add("active");

        hero.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

function wonderhoyBaby() {
    wonderhoy.play();
}

const wonderhoy = new Audio("https://www.myinstants.com/media/sounds/wandahoi.mp3");
