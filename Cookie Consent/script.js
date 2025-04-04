if (localStorage.getItem("cookieConfirm") !== "true") {
    document.getElementById("cookie-container").style.display = "flex";
    document.getElementById("accept-cookies").addEventListener("click", function() {
        document.getElementById("cookie-container").style.display = "none";
        localStorage.setItem("cookieConfirm", "true");
    });
    document.getElementById("close-button").addEventListener("click", function() {
        document.getElementById("cookie-container").style.display = "none";
    });
}else{
    document.getElementById("cookie-container").style.display = "none";
}
document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
});
