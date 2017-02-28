/*
 * fossajs 
 * Copyright Talon Bragg 2017
 * fossajs.com (Coming Soon)
 * Licensed under the MIT License
*/

'use strict';

let body = document.getElementsByTagName("body")[0];
if (!body) console.log(err);

//Object Oriented

/*
 * Object Constructor
 * @param {option.item}
 * Carried as a string
*/

function fossa(option) {
	//Main Variables
	
	/*
	 * Object Variables
	 * @param {option.item}
	 * Carried as a string
	 * Depends on the variable for the type 
	*/

	let title = option.title;
	let structure = option.struc;
	let divText = option.divText;
	let divBackground = option.divBackground;
	let headerText = option.headerText;
	let optForHeader = option.optForHeader;
	let padding = option.pad;
	let margin = option.mar;

	//Functional section
	/*
	 * Creates functionality for object items
	 * @param {option.object}
	 * Uses string functionality
	*/
	// Make the title

	/*
	 * Gets The title tag and adds the title
	 * object item "title" which is taken as 
	 * a string
	 * @param {string} innerHTML = title
	*/
	(function() {
		document.getElementsByTagName('title')[0].innerHTML = title;
	})();
	
	//Append divs
	/*
	 * Creates The divide structure of a
	 * webpage
	 * @param {string} structure === "strict"
	 * Object constructor item struc has 3 options:
	 * "strict"
	 * "loose"
	 * "sagging"
	 * Anything other that these will be taken by the console
	 * as undefined
	*/

	(function() {
		// Append strict structure
		
		/*
		 * @param {string} "strict"
		*/

		if (structure === "strict") {
			let div1 = createElement("div id='div1'");
			let div2 = createElement("div id='div2'");
			let text = document.createTextNode(divText);
			div2.appendChild(text);
			div1.appendChild(div2);
			body.appendChild(div1);
		}
		// Append loose structure
		
		/*
		 * @param {string} "loose" 
		*/

		else if(structure === "loose") {
			let div3 = createElement("div id='div3'");
			let text2 = document.createTextNode(divText);
			div3.appendChild(text2);
			body.appendChild(div3);
		}
		// Append sagging structure
		/*
		 * @param {string} "sagging"
		*/
		else if(structure === "sagging") {
			let span1 = document.createElement("span1");
			let text3 = document.createTextNode(divText);
			span1.appendChild(text3);
			body.appendChild(span1);
		}
	})();
	//Background For body
	
	/*
	* Taken as a string
	* @param {string} divBackground
	*/
	(function() {
		body.style.background = divBackground;
	})();
	//Padding for body

	/*
	 * Sets the padding of the body
	 * returned as a string
	 * css interprets the string
	 * @param {string} padding;
	*/

	(function() {
		body.style.padding = padding; 
	})();
	//Margin of body

	/*
	 * returned as a string
	 * usable as a number
	 * @param {integer} margin
	*/
	(function() {
		body.style.margin = margin;
	})();
	//If statements for error handling

	/*
	 * Logs any errors or warnings into the console
	*/
	(function() {
		if(!title) {
			console.log('Warning: No *title* specified');
		}
		else if(!structure) {
			console.log('Warning: No *structure type* specified');
		}
		else if(!divText) {
			console.log('Warning: No *div text* specified')
		}
		else if(!divBackground) {
			console.log('Warning: No *div background* specified')
		}
	})();
	//Header functions

	/*
	 * Object constructor item optForHead is taken as a string
	 * headerText is also taken as a string
	 * @param {string} optForHeader & headerText
	*/

	(function() {
		if (!optForHeader) {
			console.log('No Header specified, this is fine');
		}
		else if (optForHeader === "n") {
			console.log('No header wanted');
		}
		else if(optForHeader === "y") {
			let header = document.createElement("header");
			let hText = document.createTextNode(headerText);
			header.appendChild(hText);
			body.appendChild(header);
		}
		else if(!headerText) {
			console.log('Warning: No Header text \n there will be no text in the header \n it is recommended that you go and add text for the header.')
		}
	})();
}