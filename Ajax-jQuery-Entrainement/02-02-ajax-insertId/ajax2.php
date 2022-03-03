<?php
require_once('init.inc.php');
extract($_POST);
$result = $mysqli->query("INSERT INTO employes (prenom) VALUES ('$personne')");
// echo $mysqli->error;
$tab['validation'] = 'ok';

echo json_encode($tab);