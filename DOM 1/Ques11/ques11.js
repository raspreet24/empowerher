// 1. Select h1 by id and change text
document.getElementById("mainHeading").innerText = "Welcome to the DOM World";

// 2. Select all p using getElementsByTagName and change color to blue
let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

// 3. Select first div with class container using querySelector
document.querySelector(".container").style.backgroundColor = "yellow";