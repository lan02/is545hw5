let balloon = document.getElementById("balloon");
let size;
function setSize(newSize) {
  size = newSize;
  balloon.style.fontSize = size + "px";
  console.log(size + 'px');
}
setSize(30);
function sizeChange(event) {
  if (event.key === "+") {
	if (size >= 60) {
	  console.log('Boom!');
	  balloon.innerHTML = "💥";
	  document.body.removeEventListener("keyup", sizeChange);
	} else {
	  setSize(size + 15);
	  event.preventDefault();
	}
  } else if (event.key === "-") {
	if (size <= 0) {
	  console.log('Done!');
	  let span = document.createElement('span');
	  span.style.fontSize = "20px";
	  let bDone = document.createTextNode("Done");
	  span.appendChild(bDone);
	  balloon.appendChild(span);
	  document.body.removeEventListener("keyup", sizeChange);
	} else {
	  setSize(size - 15);
	  event.preventDefault();
	}
  }
}
document.body.addEventListener("keyup", sizeChange);
