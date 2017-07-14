<?php
	$driver = $_GET["driver"];
	$details = $_GET["details"];
	$value = $_GET["value"];
	$type = $_GET["type"];

	$connect = mysqli_connect("localhost", "root", "","moduloentregas");

	if($type == "entrance"){
		$data = date('d/m/Y');
		$check = mysqli_query($connect, "INSERT INTO `moduloentregas`.`movement` (`id`, `driver`, `details`, `entrance`, `exit`, `hour`, `date`) VALUES (NULL, '$driver', '$details', '$value', 0, CURTIME(), '$data')");
	}
	else if($type == "exit"){
		$data = date('d/m/Y');
		$check = mysqli_query($connect, "INSERT INTO `moduloentregas`.`movement` (`id`, `driver`, `details`, `entrance`, `exit`, `hour`, `date`) VALUES (NULL, '$driver', '$details', 0, '$value', CURTIME(), '$data')");
	}
?>

