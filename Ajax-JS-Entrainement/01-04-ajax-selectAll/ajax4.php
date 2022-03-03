<?php

require_once('_init.php');

$tab = [];
extract($_POST);

$tab['resultat'] = "";

$employe = $mysqli->query("SELECT * FROM employes");

$tab['resultat'] .= "<table border=\"5\"> <thead> <tr>";
    while ($colonne = $employe->fetch_field())
    {
        $tab['resultat'] .= '<th>' . $colonne->name . '</th>';
    }
    $tab['resultat'] .= "</tr> </thead>";

    $tab['resultat'] .= "</tbody>";

        while ($ligne = $employe->fetch_assoc())
        {
            $tab['resultat'] .= '<tr>';
            foreach ($ligne as $key => $value)
            {
                $tab['resultat'] .= '<td>' . $value . '</td>';
            }
            $tab['resultat'] .= '</tr>';
        }

    $tab['resultat'] .= '</tbody>';
$tab['resultat'] .= '</table>';

echo json_encode($tab);