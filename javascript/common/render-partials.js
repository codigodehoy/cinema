const header = document.getElementById("header-container")
const footer = document.getElementById("footer-container")

fetch("/assets/header.html")
.then((response) => response.text())
.then((html) => {
    header.innerHTML = html;
});

fetch("/assets/footer.html")
.then((response) => response.text())
.then((html) => {
    footer.innerHTML = html;
});
