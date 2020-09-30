$('#neighbourBtn').click(function() {
        
		$.ajax({
			url: "libs/php/getNeighbourInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selectCountry').val()
			},
			success: function(result) {

				if (result.status.name == "ok") {
                    
                    console.log(result);
                    
                    let resultStr = '';

					result['data'].forEach(function(neighbour) {
                        resultStr += neighbour['asciiName'];
                        resultStr += ', ';
                    });
                    
                    $('#result').html(resultStr);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
		}); 
	
});

$('#timeBtn').click(function() {
        
		$.ajax({
			url: "libs/php/getTimezoneInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#timeLat').val(),
                lng: $('#timeLong').val()
			},
			success: function(result) {

				if (result.status.name == "ok") {
                    
                    console.log(result);
                   
                    $('#result').html(result['data'][0]['asciiName']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
		}); 
});

$('#placeBtn').click(function() {
        
		$.ajax({
			url: "libs/php/getPlacenameInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#placeLat').val(),
                lng: $('#placeLong').val()
			},
			success: function(result) {

				if (result.status.name == "ok") {
                    
                    console.log(result);
                   
                    $('#result').html(result['data'][0]['asciiName']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
		}); 
	
});