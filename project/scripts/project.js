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

const beach = [
    {
        src: "images/beachs/cocal.webp",
        alt: "Cocal's Beach",
        title: "Cocal's Beach",
        location: "Guiria, Valdez"
    },
    {
        src: "images/beachs/balneareo.webp",
        alt: "Balneareo's Beach",
        title: "Balneareo's Beach",
        location: "Guiria, Valdez"
    },
    {
        src: "images/beachs/dorada.webp",
        alt: "Dorada's Beach",
        title: "Dorada's Beach",
        location: "Yoco-Guiria, Valdez"
    },
    {
        src: "images/beachs/pescador.webp",
        alt: "Pescador's Beach",
        title: "Pescador's Beach",
        location: "Guiria, Valdez"
    },
    {
        src: "images/beachs/salina.webp",
        alt: "Salina's Beach",
        title: "Salina's Beach",
        location: "La Salina Guiria, Valdez"
    },
    {
        src:"images/beachs/upa.webp",
        alt:"Upa's Beach",
        title:"Upa's Beach",
        location:"Rio Salado Guiria, Valdez"
    },
   
]
createBeachCards(beach);
function createBeachCards(BeachCard){
    document.querySelector(".grid-beach").innerHTML = "";
    BeachCard.forEach(beach=> {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let img = document.createElement("img");


        name.textContent = beach.title;
        location.innerHTML = `<span class="label">Location:</span> ${beach.location}`;
        img.setAttribute("src", beach.src);
        img.setAttribute("alt", `${beach.title} temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(img);

        document.querySelector(".grid-beach").appendChild(card);


    })
}