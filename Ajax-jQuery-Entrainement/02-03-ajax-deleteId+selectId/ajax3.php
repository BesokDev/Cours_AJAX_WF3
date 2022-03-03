<?php
require_once('init.inc.php');
extract($_POST);
$result = $mysqli->query("DELETE FROM employes WHERE id_employes = '$id'");
// echo $mysqli->error;


$tab['resultat'] = '';
	$result = $mysqli->query("SELECT * FROM employes");
	$tab['resultat'] .= '<select name="personne" id="personne">';
	while($employe = $result->fetch_assoc())
	{
		$tab['resultat'] .=  "<option value=\"$employe[id_employes]\">$employe[prenom]</option>";
	}
	$tab['resultat'] .= '</select>';
	
	
	$tab['validation'] = 'ok';

// print_r($tab);

echo json_encode($tab);