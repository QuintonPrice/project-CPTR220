const selected = document.querySelector(".select");
const optionsContainer = document.querySelector(".options-container");

const opitionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

opitionsList.forEach(singleEle => {
    singleEle.addEventListener("click", () => {
        selected.innerHTML = singleEle.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});