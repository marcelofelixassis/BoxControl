<?php
	$connect = mysqli_connect("localhost", "root", "","moduloentregas");
 	$check = mysqli_query($connect, "SELECT * FROM movement");
	
	if(mysqli_num_rows($check) > 0){
		$i = 0;
		$movements = array('movement' => array());
		while($row = mysqli_fetch_array($check)){
			$movements["movement"][$i]["id"] = $row["id"];
			$movements["movement"][$i]["driver"] = $row["driver"];
			$movements["movement"][$i]["details"] = $row["details"];
			$movements["movement"][$i]["entrance"] = $row["entrance"];
			$movements["movement"][$i]["exit"] = $row["exit"];
			$movements["movement"][$i]["hour"] = $row["hour"];
			$i++;
		}
		echo json_encode($movements,JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
	}
	
 	else{
	 	$response = array();
		$response["success"] = 0;
		$response["message"] = "Nehum usuario encontrado";
		echo json_encode($response);
	}
?>