var h3 = document.querySelector("h3");
var input1 = document.querySelector("input[name=color1]");
var input2 = document.querySelector("input[name=color2]");
var body = document.querySelector("body");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ input1.value 
	+ ", " 
	+ input2.value 
	+ ")";
	h3.textContent = body.style.background + ";";
}

input1.addEventListener("change", setGradient);

input2.addEventListener("change", setGradient);

