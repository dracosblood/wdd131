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

const rest = [
    {
        src: "images/rest-hotel/aguazaul.webp",
        alt: "Hotel Agua Azul",
        title: "Hotel rest. Agua Azul",
        location: "Valdez street Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/antojitos.webp",
        alt: "Antojitos coffe",
        title: "Ice cream and pastry shop Antojitos Cafe.",
        location: "Viguirima street Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/cedros.webp",
        alt: "Cedros Rest.",
        title: "Restaurants Cedros.",
        location: "Juncal street Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/damario.webp",
        alt: "Hotel Da mario",
        title: "Hotel rest. Da Marios",
        location: "Viguirima street Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/lasgil.webp",
        alt: "Pizzeria las Gil",
        title: "Pizzeria las Gil",
        location: "Concepcion street Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/maderos.webp",
        alt: "Madero Rest",
        title: "Madero Restaurants",
        location: "AV San Antonio Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/numero1.webp",
        alt: "Numero 1 fast food",
        title: "Fast Food Numero 1",
        location: "Alberto Ravel street Guiria, Valdez"
    },
    {
        src: "images/rest-hotel/orly.webp",
        alt: "Hotel Orly",
        title: "Hotel Rest Orly",
        location: "AV Paria street Guiria, Valdez"
    },
    
   
]
createRestCards(rest);
function createRestCards(RestCard){
    document.querySelector(".grid-rest").innerHTML = "";
    RestCard.forEach(rest=> {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let img = document.createElement("img");


        name.textContent = rest.title;
        location.innerHTML = `<span class="label">Location:</span> ${rest.location}`;
        img.setAttribute("src", rest.src);
        img.setAttribute("alt", `${rest.title} rest`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(img);
        img.addEventListener("click", ()=>{
            const overlay = document.createElement("section");
            overlay.classList.add("modal-rest");
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

        document.querySelector(".grid-rest").appendChild(card);


    })
}
