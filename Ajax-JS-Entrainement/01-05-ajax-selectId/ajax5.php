<?php
require_once('init.inc.php');
$tab = array();
extract($_POST);
$tab['resultat'] = '';
$result = $mysqli->query("SELECT * FROM employes WHERE prenom='$personne'");

	$tab['resultat'] .= "<table border=\"5\"> <tr>"; 
	while ($colonne = $result->fetch_field()) 
	{		   
		$tab['resultat'] .= '<th>' . $colonne->name . '</th>'; 
	}
	$tab['resultat'] .= "</tr>"; 

	while ($ligne = $result->fetch_assoc())
	{
		$tab['resultat'] .= '<tr>';
		foreach ($ligne as $indice => $information)
		{
			$tab['resultat'] .= '<td>' . $information . '</td>';
		}
		$tab['resultat'] .= '</tr>';
	}
	$tab['resultat'] .= '</table>';

// print_r($tab);

echo json_encode($tab);