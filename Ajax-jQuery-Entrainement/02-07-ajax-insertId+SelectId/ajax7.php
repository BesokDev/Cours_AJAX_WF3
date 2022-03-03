<?php
require_once('init.inc.php');
$tab = array();
extract($_POST);
$tab['resultat'] = '';
if(!isset($mode)) $mode = '';
if($mode == 'envoi')
{
	$result = $mysqli->query("INSERT INTO employes (prenom) VALUES ('$personne')");
	$tab['resultat'] = 'Employe ajoute!';
}
else //elseif($mode == 'affichage')
{
	$result = $mysqli->query("SELECT * FROM employes");

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
		
}
 // print_r($tab);

	$tab['validation'] = 'ok';
	
echo json_encode($tab);