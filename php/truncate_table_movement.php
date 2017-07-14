<?php
	$connect = mysqli_connect("localhost", "root", "","moduloentregas");

	$check = mysqli_query($connect, "TRUNCATE TABLE `movement`");
?>