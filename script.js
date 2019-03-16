//const output = document.getElementById('output')

//function showkeyInfo (e) {
    //const msg = `Type: ${e.type} Code: ${e.keyCode}`
    //output.innerHTML += `<p>${msg}</p>`
//}

//document.addEventListener("keyup", event => {
    //if(event.key === "+")
//})

//document.addEventListener("keydown", event => {
    //if(event.key === "-")
//})

function getSizeValue(valueWithUnit, unit) {
	return parseInt(valueWithUnit.split(unit)[0]);
}

function balloon(event) {
	// if (event.defaultPrevented) {
	//   return; // Do nothing if the event was already processed
	// }
	switch (event.keyCode) {
		case 189:
			changeSize('.balloon', 1.1,'down');
			break;
		case 187:
			changeSize('.balloon', 1.1);
			break;
		default:
			return; // Quit when this doesn't handle the key event.
	}

	// Cancel the default action to avoid it being handled twice
	// event.preventDefault();
}



// element = 'string'
// amount = int
// direction '' or down
function changeSize(element, amount, direction) {
	element = document.querySelector(element);
	let elementSize = window.getComputedStyle(element).fontSize;
	let elementSizeValue = getSizeValue(elementSize, 'px');

	if (direction === undefined) {
		elementSizeValue *= amount;
	} else elementSizeValue /= amount;

	if (elementSizeValue <= 60) {
		console.log(elementSize);
		elementSize = Math.ceil(elementSizeValue) + 'px';
		element.style.fontSize = elementSize;
    } else boom(element);
    
    //if (elementSizeValue <= 0) {
		//console.log(elementSize);
		//elementSize = "Done";
	//} else boom(element);
}

function boom(element) {
	element.firstChild.nodeValue = '💥';
	document.removeEventListener('keydown', balloon, true);
}

document.addEventListener('keydown', balloon, true);

