function switchTab(tabId, content) {
    document.querySelector(".selected").classList.remove("selected");
    let tab = document.getElementById(tabId);
    tab.classList.add("selected");
    document.getElementById("text").textContent = content;
}

document.querySelectorAll(".tabs-section span").forEach(tab => {
    tab.addEventListener("click", () => {
        switchTab(tab.id, tab.textContent + " content to be displayed here");
    });
});
