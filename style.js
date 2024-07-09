function headerChange() {
    document.getElementById("header").style.color = "green";
}

function changeColor() {
    document.getElementById("box").style.backgroundColor = "lightblue";
    document.getElementById("box").style.padding = "15px";
}

function listChange() {
    document.getElementById("odd").style.backgroundColor = "black";
    document.getElementById("odd").style.color = "white";
}

function backTextChange() {
    document.getElementById("inny").style.backgroundColor = "darkblue";
    document.getElementById("inny").style.color = "lightblue";
}

function moveButton() {
    document.getElementById("lilButton").style.position = "relative";
    document.getElementById("lilButton").style.left = (Math.floor(Math.random() * 101)).toString() + "px";
}