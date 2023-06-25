const thankYouEl = document.querySelector(".thank-you");
const btnSubmitEl = document.querySelector(".btn-submit");
const ratingEl = document.querySelector(".rating");
const btnEl = document.querySelectorAll(".btn");
const rateValueEl = document.querySelector(".rate-value");

btnSubmitEl.addEventListener("click", () => {

    if (rateValueEl.innerHTML) {
        thankYouEl.classList.add("active");
        ratingEl.style.display = "none";
    }

})

btnEl.forEach((btn) => {
    btn.addEventListener("click", () => {
        rateValueEl.innerHTML = btn.innerHTML;
    })
})
