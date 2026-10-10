let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}  &#10070; Darwin J. Tovar &#10070; Venezuela`;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

document.querySelector("#hamburger").addEventListener("click", function() {
    const nav = document.querySelector(".guiria-menu");
    const title = document.querySelector(".guiria-title");
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

const categories = [
  {
    id: "gt-1050",
    name: "Restaurants",
    averagerating: 4.0
  },
  {
    id: "gt-2050",
    name: "Cultural sities",
    averagerating: 4.2
  },
  {
    id: "gt-2307",
    name: "Beachs",
    averagerating: 4.5
  },
  {
    id: "gt-2000",
    name: "Hotels",
    averagerating: 4.9
  }

];

const optionSelect = document.getElementById("optionName");
categories.forEach(categorie => {
  const option = document.createElement("option");
  option.value = categorie.id;
  option.textContent = categorie.name;
  optionSelect.appendChild(option);
});