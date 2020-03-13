let bar = document.getElementById("progressBar");
let width = 20;

function increment() {

console.log(bar.style.width = width++ + "%");
$("#progressBar").attr("width", bar);

}
console.log(bar.style.width)

$("#btn1").click(increment);