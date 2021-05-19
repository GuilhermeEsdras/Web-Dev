var block = document.getElementById('block');

block.style.width = "100px";
block.style.height = "100px";
block.style.backgroundColor = "red";

block.style.position = "absolute";

document.addEventListener("click", function (event) {
    block.style.left = event.clientX + "px";
    block.style.top = event.clientY + "px";
})