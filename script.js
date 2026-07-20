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
