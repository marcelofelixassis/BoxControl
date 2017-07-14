<?php
	$connect = mysqli_connect("localhost", "root", "","moduloentregas");
 	$check = mysqli_query($connect, "SELECT * FROM `values`");
	
	if(mysqli_num_rows($check) > 0){
		$i = 0;
		$values = array();
		while($row = mysqli_fetch_array($check)){
			$values["entrance"] = $row["entrance"];
			$values["result"] = $row["result"];
		}
		echo json_encode($values,JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	}
	
 	else{
	 	$response = array();
		$response["success"] = 0;
		$response["message"] = "Nehum usuario encontrado";
		echo json_encode($response);
	}
?>