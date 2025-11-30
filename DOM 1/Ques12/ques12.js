let ul = document.querySelector("#myList");
let button = document.querySelector("#addBtn");

button.addEventListener("click", function () {
    let newLi = document.createElement("li");
    newLi.textContent = "New Item";

    ul.appendChild(newLi);

    let index = ul.children.length; // position of new <li>

    if (index % 2 === 1) {
        // ODD item
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        // EVEN item
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }
});