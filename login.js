const root = document.documentElement;
const dropdown_list = document.querySelector(".dropdown-list");
const main_button = document.querySelector(".main-button");
const gameIdInput = document.getElementById("game-id");
const continueButton = document.getElementById("continue-button");

// dropdown list items 
const list_items = ["Asia", "EU-NA"];

// dropdown list item template
const listItemTemplate = (text) => `
    <li class="dropdown-list-item">
        <button class="dropdown-button list-button">${text}</button>
    </li>
`;

// generate dropdown list items
const renderListItems = () => {
    dropdown_list.innerHTML = list_items.map((item) => listItemTemplate(item)).join("");
};

// initialize dropdown
window.addEventListener("load", () => {
    renderListItems();
});

// toggle dropdown
main_button.addEventListener("click", () => {
    const dropdownHeight = 50 * list_items.length; // Height based on items
    const isOpen = root.style.getPropertyValue("--dropdown-height") !== "0px";
    root.style.setProperty("--dropdown-height", isOpen ? "0px" : `${dropdownHeight}px`);
    root.style.setProperty("--rotate-arrow", isOpen ? "0deg" : "180deg");
});

// select item and close dropdown
dropdown_list.addEventListener("click", (e) => {
    const selectedText = e.target.textContent.trim();
    document.querySelector(".dropdown-title").textContent = selectedText;
    root.style.setProperty("--dropdown-height", "0px");
    root.style.setProperty("--rotate-arrow", "0deg");
});

// handle continue button click
continueButton.addEventListener("click", () => {
    const selectedServer = document.querySelector(".dropdown-title").textContent.trim();
    const gameId = gameIdInput.value.trim();

    if (selectedServer !== "Select your game server" && gameId) {
        window.location.href = "index.html"; 
    } else {
        alert("Please select a game server and enter your game ID.");
    }
});
