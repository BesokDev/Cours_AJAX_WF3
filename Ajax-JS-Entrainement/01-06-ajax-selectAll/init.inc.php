<?php
$mysqli = @new mysqli("localhost", "root", "", "entreprise");
if ($mysqli->connect_error)    die('Un probl�me est survenu lors de la tentative de connexion � la BDD : ' . $mysqli->connect_error);