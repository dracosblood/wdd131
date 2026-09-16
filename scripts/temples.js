document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

document.querySelector("#hamburger").addEventListener("click", function() {
    const nav = document.querySelector(".temple-nav");
    const title = document.querySelector(".temple-title");
    nav.classList.toggle("show");
    if (nav.classList.contains("show")) {
        document.getElementById("hamburger").textContent = "X";
        if (title) {
            title.style.display = "none";
        }
    }
    else {
        document.getElementById("hamburger").textContent = "☰";
        if (title) {
            title.style.display = "block";
        }
    }
});