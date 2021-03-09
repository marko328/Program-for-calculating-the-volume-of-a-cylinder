var btn = document.getElementById("btn");
var radius = document.getElementById("radius");
var height = document.getElementById("height");

btn.addEventListener("click", () => {
    var summ = document.getElementById("result");
    summ.value = Math.PI * radius.value * radius.value * height.value;
});
