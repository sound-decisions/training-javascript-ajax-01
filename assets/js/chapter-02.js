

// Get a reference to the button and then add an onclick event to it.
var myButton = document.getElementById("loadButton");
myButton.onclick = chapter0205Example;

// Call based on an event.
function chapter0205Example() {

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/api/data.json');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {

			var items = JSON.parse(request.responseText);
			var output = '<ul>';

			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';


			var modify = document.getElementById('update_0205');
			modify.innerHTML = output;			

		} // end of - if.		
	} // end of - function.
	
	request.send();

} // end of - function chapter0205Example

//chapter0205Example();



// Loading JSON Data.
function chapter0204Example() {

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/api/data.json');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {

			var items = JSON.parse(request.responseText);
			var output = '<ul>';

			for (var key in items) {
				output += '<li>' + items[key].name + '</li>';
			}
			output += '</ul>';


			var modify = document.getElementById('update_0204');
			modify.innerHTML = output;			

		} // end of - if.		
	} // end of - function.

	request.send();

} // end of - function chapter0204Example

chapter0204Example();




// Loading XML Data.
function chapter0203Example() {

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/api/data.xml');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {

			// console.log(request.responseXML);
			// console.log(request.responseXML.getElementsByTagName('name')[1]);
			// console.log(request.responseXML.getElementsByTagName('name')[1].childNodes[0]);
			// console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);

			var items = request.responseXML.getElementsByTagName('name');
			var output = '<ul>';

			for (var i = 0; i < items.length; i++) {
				output += '<li>' + items[i].firstChild.nodeValue + '</li>';
			} // end of - for.
			output += '</ul>';



			var modify = document.getElementById('update_0203');
			modify.innerHTML = output;			

		} // end of - if.		
	} // end of - function.
	request.send();

} // end of - function chapter0203Example

chapter0203Example();




function chapter0202Example() {

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/api/data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {

			var responseText = request.responseText;

			// Get by li elements only.
			//var modify = document.getElementsByTagName('li');
			// modify[2].innerHTML = request.responseText;
			// modify[4].innerHTML = request.responseText;
			var modify = document.getElementsByTagName('ul');

			console.log(modify.length);

			// Get by ul element and then li element.
			var modify_2 = document.getElementsByTagName('ul')[2].getElementsByTagName('li');
			modify_2[3].innerHTML = responseText + ' ***';

			console.log(modify_2.length);		

			// Get by ul element and then li element.
			var modify_3 = document.getElementsByTagName('ul')[4].getElementsByTagName('li');

			console.log(modify_3.length);

			// Loop through all elements.
			for (var i = 0; i < modify_3.length; i++) {
				modify_3[i].innerHTML = responseText + ' - ' + i;
			} // end of - for.

		} // end of - if.		
	} // end of - function.
	request.send();

} // end of - function chapter0202Example

chapter0202Example();


function chapter0201Example() {

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/api/data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			var modify = document.getElementById('update');
			modify.innerHTML = request.responseText;
		} // end of - if.		
	} // end of - function.
	request.send();

} // end of - function chapter0201Example

chapter0201Example();