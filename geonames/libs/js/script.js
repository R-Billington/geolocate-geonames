$('#runBtn').click(function() {
        

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selectCountry').val(),
				lang: $('#selectLanguage').val()
			},
			success: function(result) {

				if (result.status.name == "ok") {

					$('#continentResult').html(result['data'][0]['continent']);
					$('#capitalResult').html(result['data'][0]['capital']);
					$('#languagesResult').html(result['data'][0]['languages']);
					$('#populationResult').html(result['data'][0]['population']);
                    $('#currencyResult').html(result['data'][0]['currencyCode'])
					$('#areaResult').html(result['data'][0]['areaInSqKm']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
		}); 
	
});