const modal = document.getElementById("modal");
const addButton = document.getElementById("add-icon");
const nameInput = document.getElementById("name-input");
const closeModal = document.getElementById("close-modal");
const cancel = document.getElementById("cancel");

const circle = document.getElementById("circle");


const iconContainer = document.getElementById("icon-container");

circle.addEventListener("click", () => {
    modal.style.display = "flex";  
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none"; 
});
cancel.addEventListener("click", () => {
    modal.style.display = "none"; 
});

addButton.addEventListener("click", () => {
    const name = nameInput.value.trim();

    if (name) {
        const firstLetter = name.charAt(0); 

        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.textContent = firstLetter; 

       
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";       
        icon.appendChild(removeButton);

       
        iconContainer.appendChild(icon);

       
        nameInput.value = "";
        modal.style.display = "none";

       
        removeButton.addEventListener("click", () => {
            iconContainer.removeChild(icon);
        });
    }
});
