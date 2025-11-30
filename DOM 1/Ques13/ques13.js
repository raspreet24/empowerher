let colorInput = document.getElementById("colorInput");
let textInput = document.getElementById("textInput");
let div = document.getElementById("myDiv");

// Change Background Button
document.getElementById("bgBtn").addEventListener("click", function () {
    let colorValue = colorInput.value;

    // Check if color is valid
    div.style.backgroundColor = colorValue;
});

// Update Text Button
document.getElementById("textBtn").addEventListener("click", function () {
    let newText = textInput.value;

    if (newText.trim() === "") {
        alert("Please enter some text!");
    } else {
        div.textContent = newText;
    }
});