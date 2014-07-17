
$('#search').keyup(function () {

	var searchValue = $('#search').val();

	var myExp = new RegExp(searchValue, "i");

	$.getJSON('assets/api/data.json', function (data) {

		var output = '<ul class="searchresults">';

		$.each(data, function(key, val) {

			if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {

				output += '<li>';
					output += '<h4>' + val.name + '</h4>';
					output += '<img src="assets/images/' + val.shortname + '_tn.jpg" alt="' + val.name + '" />';
					output += '<p>' + val.bio + '</p>';
				output += '</li>';

			}

		});

		output += '</ul>';

		$('#update').html(output);
	});

});