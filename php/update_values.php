<?php
	$entrance = $_GET["entrance"];
	$result = $_GET["result"];

	$connect = mysqli_connect("localhost", "root", "","moduloentregas");

	$check = mysqli_query($connect, "UPDATE `values` SET entrance='$entrance', result='$result'");
?>