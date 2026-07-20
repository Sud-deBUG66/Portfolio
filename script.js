// projects----------------//

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        projectCards.forEach((card) => {

            if (filter === "all") {

                showCard(card);

            }

            else if (card.classList.contains(filter)) {

                showCard(card);

            }

            else {

                hideCard(card);

            }

        });

    });

});

function showCard(card) {

    card.style.display = "block";

    setTimeout(() => {

        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";

    }, 50);

}

function hideCard(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px) scale(.95)";

    setTimeout(() => {

        card.style.display = "none";

    }, 300);

}

// Loading animation---------------//

const letters = document.querySelectorAll(".loading-text span");
gsap.to(letters, {
    opacity: 1,
    duration: 1.2,
    stagger: 0.15,
    onUpdate: function () {
        letters.forEach((el, i) => {
            gsap.to(el, {
                color: "#ffffff",
                duration: 0.2,
                delay: i * 0.15,
            });
            gsap.to(el, {
                color: "rgba(255,255,255,0.1)",
                duration: 0.2,
                delay: i * 0.15 + 0.4,
            });
            gsap.to(el.querySelector("::after"), {
                opacity: 1,
                duration: 0.2,
                delay: i * 0.15,
            });
        });
    },
    onComplete: () => {
        gsap.to("#loading", {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
                document.getElementById("loading").style.display = "none";
            },
        });
    },
});


// ScrollReveal animations------------//

const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 400,
    reset: false,
});

sr.reveal(".title, .about", { origin: "right" });
sr.reveal(".home-img,.about-img", { origin: "top" });

sr.reveal(
    ".about,.title,.skill-data, .skills__title, .section-title, .projects__wrapper, .footer_profile,",
    {
        delay: 500,
        interval: 100,
    }
);

sr.reveal("sub-title., .skills-title, .section__title,", {
    origin: "left",
});

sr.reveal(".social-icons,.btn", { origin: "right" });


//--------- nav side menu---------/

const menu = document.querySelector(".navbar ul");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-x");
const navLinks = document.querySelectorAll(".navbar ul li a");

menuBtn.addEventListener("click", () => {
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

