
function capsText() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}


function styleChange() {
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function moo() {
    var textArea = document.getElementById("textInput");
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trim().toUpperCase() + (sentences[i].trim().length > 0 ? " MOO" : "");
    }
    textArea.value = sentences.join(". ").trim();
}