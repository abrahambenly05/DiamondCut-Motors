document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider .list");
    const items = document.querySelectorAll(".slider .item");
    const dots = document.querySelectorAll(".dots li");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    let currentIndex = 0;

    function updateSliderPosition() {
        const width = items[0].clientWidth;
        slider.style.transform = `translateX(${-currentIndex * width}px)`;
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function moveToNext() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSliderPosition();
        updateDots();
    }

    function moveToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1;
        }
        updateSliderPosition();
        updateDots();
    }

    nextButton.addEventListener("click", moveToNext);
    prevButton.addEventListener("click", moveToPrev);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSliderPosition();
            updateDots();
        });
    });

    setInterval(moveToNext, 5000);

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    navbar.querySelectorAll("a").forEach(item => {
        item.addEventListener("click", () => {
            navbar.classList.remove("active"); // Tutup navbar setelah item menu diklik
        });
    });
});
