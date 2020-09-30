<?php

    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    include('openCage/AbstractGeocoder.php');
    include('openCage/Geocoder.php');

    $geocoder = new \OpenCage\Geocoder\Geocoder('7ef3c76c6f434c5698560fe7de44753a');

    $result = $geocoder->geocode($_REQUEST['q']);

    if ($result['status']['code'] === 200) {
        
        $searchResult = [];
        $searchResult['results'] = [];

        foreach ($result['results'] as $entry) {
            $item = [];
            
            $item['source'] = 'opencage';
			$item['formatted'] = $entry['formatted'];
			$item['geometry']['lat'] = $entry['geometry']['lat'];
			$item['geometry']['lng'] = $entry['geometry']['lng'];
			$item['countryCode'] = strtoupper($entry['components']['country_code']);
			$item['timezone'] = $entry['annotations']['timezone']['name'];
            $item['currency'] = $entry['annotations']['currency']['name'];
            $item['drives_on'] = $entry['annotations']['roadinfo']['drive_on'];
            
            array_push($searchResult['results'], $item);
            
            header('Content-Type: application/json; charset=UTF-8');
	
	        echo json_encode($searchResult, JSON_UNESCAPED_UNICODE);

        } 

    } else {    
        echo $resposne['status']['message'];
    }
    
?>
