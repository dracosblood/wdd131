let d = new Date();
document.getElementById("year").innerHTML = `&copy; ${d.getFullYear()}  &#10070; Darwin J. Tovar &#10070; Venezuela`;
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;


const reviews = document.getElementById("reviewCount");
let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 0;

reviewCount++;
window.localStorage.setItem("reviewCount", reviewCount);
reviews.textContent = `Total Reviews Submitted: ${reviewCount}`;