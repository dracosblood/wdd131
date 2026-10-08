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

const cultural =[
    {
        src: "images/cultural/colon.webp",
        alt: "Colón Square",
        title: "Colón Square MOnument in Macuro",
        location: "Macuro-Guiria, Valdez"
    },
    {
        src: "images/cultural/epoca.webp",
        alt: "Period House",
        title: "Period House",
        location: "Carabobo street-Guiria, Valdez"
    },
    {
        src: "images/cultural/faro.webp",
        alt: "La Tutus Lookout Lighthouse",
        title: "La Tutus Lookout Lighthouse",
        location: "5 of July street-Guiria, Valdez"
    },
    {
        src: "images/cultural/matadoo.webp",
        alt: "Dance of the Matadoo",
        title: "Dance of the Matadoo",
        location: "Guiria, Valdez"
    },
    {
        src: "images/cultural/miranda.webp",
        alt: "Miranda Square cannons",
        title: "Miranda Square cannons",
        location: "miranda street-Guiria, Valdez"
    },
    {
        src: "images/cultural/monumento3-33.webp",
        alt: "monument of 3-33 ",
        title: "Circular stone tower Monument 3-33",
        location: "Mapire-Guiria, Valdez"
    },
]

function createCulturalCards(CulturalCard){
    document.querySelector(".grid-cultural").innerHTML = "";
    CulturalCard.forEach(cultural=> {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let img = document.createElement("img");


        name.textContent = cultural.title;
        location.innerHTML = `<span class="label">Location:</span> ${cultural.location}`;
        img.setAttribute("src", cultural.src);
        img.setAttribute("alt", `${cultural.title} cultural`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(img);
        img.addEventListener("click", ()=>{
            const overlay = document.createElement("section");
            overlay.classList.add("modal-cultural");
            const largeImg = document.createElement("img");
            largeImg.src=img.src;
            largeImg.alt=img.alt;
            largeImg.classList.add("modal-img");

            overlay.appendChild(largeImg);
            document.body.appendChild(overlay);
            overlay.addEventListener("click", ()=>{
                overlay.remove();
            })
        })

        document.querySelector(".grid-cultural").appendChild(card);


    })
}
createCulturalCards(cultural);