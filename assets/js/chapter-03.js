$('.update').load('assets/api/data.txt');

$('.update:first').load('assets/api/data.txt');

$('.update:even').load('assets/api/data.txt');

$.getJSON('assets/api/data.json', function(data) {

	//console.log(data);

	var output = '<ul>';

	$.each(data, function(key, val) {
		output += '<li>' + val.name + '</li>';
	});

	output += '</ul>';

	$('#speakers').html(output);
	$('#speakers2').append(output);
	// $('#update2').prepend(output);

});