<?php
	$id = $_GET["id"];

	$connect = mysqli_connect("localhost", "root", "","moduloentregas");

	$check = mysqli_query($connect, "DELETE FROM movement WHERE id='$id'");
?>

