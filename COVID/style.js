const selectedAll = document.querySelectorAll(".select");
const loaderWrapper = document.getElementById("loadIcon");
function toggleLoaderOff() {
    loaderWrapper.style.visibility = "hidden"
}

function toggleLoaderOn() {
    loaderWrapper.style.visibility = "visible"
}

toggleLoaderOff();

selectedAll.forEach(selected => {
    const optionsContainer = selected.previousElementSibling;
    const searchBox = selected.nextElementSibling;
    
    const optionList = optionsContainer.querySelectorAll(".option");
    
    selected.addEventListener("click", () => {
        if(optionsContainer.classList.contains("active")){
            optionsContainer.classList.remove("active");
        } else {
            let currentActive = document.querySelector(".options-container.active");

            if(currentActive){
                currentActive.classList.remove("active");
            }

            optionsContainer.classList.add("active");
        }
    
        searchBox.value = "";
        filterList("");
    
        if(optionsContainer.classList.contains("active")) {
            searchBox.focus();
        }
    });
    
    optionList.forEach(singleEle => {
        singleEle.addEventListener("click", () => {
            selected.innerHTML = singleEle.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        });
    });
    
    searchBox.addEventListener("keyup", function(event) {
        filterList(event.target.value);
    });
    
    const filterList = searchTerm => {
        searchTerm = searchTerm.toLowerCase();
        optionList.forEach(option => {
            let label = option.firstElementChild.nextElementSibling.innerHTML.toLocaleLowerCase();
            if (label.indexOf(searchTerm) != -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        })
    }
});



