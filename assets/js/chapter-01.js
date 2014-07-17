function chapter0104Example() {

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'assets/api/data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request);
			document.writeln('<h4>chapter0104Example</h4>');
			document.writeln('<p>' + request.responseText + '</p>');	
		} // end of - if.		
	} // end of - function.
	request.send();

} // end of - function chapter0103Example

chapter0104Example();



function chapter0103Example() {

	var request = new XMLHttpRequest();
	request.open('GET', 'assets/api/data.txt');
	request.onreadystatechange = function() {
		if ((request.readyState === 4) && (request.status === 200)) {
			console.log(request);
			document.writeln('<h4>chapter0103Example</h4>');
			document.writeln('<p>' + request.responseText + '</p>');	
		} // end of - if.		
	} // end of - function.
	request.send();

} // end of - function chapter0103Example

chapter0103Example();



// Syncronous AJAX Call.
function badFirstExample() {

	//for (var i = 0; i < 100; i++) {

		var request = new XMLHttpRequest();
		request.open('GET', 'assets/api/data.txt', false);
		request.send();
		if (request.status === 200) {
			console.log(request);
			//document.writeln(request.responseText);	
			document.writeln('<h4>badFirstExample</h4>');
			document.writeln('<p>' + request.responseText + '</p>');
		}

	//} // end of - for

} // end of - function badFirstExample

badFirstExample();