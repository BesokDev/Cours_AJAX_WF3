<?php

// Connexion à la BDD
$mysqli = @new mysqli("localhost", "root", "", "entreprise");

// Si une erreur survient lors de la connexion, on stoppe le script php et on affiche le message.
if($mysqli->connect_error) {
    die("Un problème est survenu lors de la tentative de connexion à la BDD : " . $mysqli->connect_error);
}