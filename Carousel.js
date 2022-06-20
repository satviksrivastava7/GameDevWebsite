document.querySelectorAll(".carousel").forEach(carousel => {
    const displayBanner = carousel.querySelectorAll(".banner");
    const button = Array.from(displayBanner, () => {
        return `<span class="carousel_btn"></span>`
    })

    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel_nav">
            ${button.join("")}
        </div>
    `)

    const displayButton = carousel.querySelectorAll(".carousel_btn");
    displayButton.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            displayBanner.forEach(displayBanner => displayBanner.classList.remove("banner--selected"));
            displayButton.forEach(displayButton => displayButton.classList.remove("carousel_btn--selected"));

            displayBanner[i].classList.add("banner--selected");
            displayButton[i].classList.add("carousel_btn--selected");
        });
    });

    displayBanner[0].classList.add("banner--selected");
    displayButton[0].classList.add("carousel_btn--selected");
});