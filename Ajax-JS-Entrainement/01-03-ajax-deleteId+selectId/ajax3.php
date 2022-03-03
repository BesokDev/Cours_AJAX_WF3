<?php

require_once ('_init.php');

//<!-- ##################### 4 si le formulaire est soumis on rentre dans la condition ######################## -->
if($_POST) {
    extract($_POST);
    $resultat = $mysqli->query("DELETE FROM employes WHERE id_employes = '$id'");

}

//<!-- ##################### 5 => création d'un tableau de données à renvoyer au fichier ajax3.js en JSON ######################## -->
$tab['resultat'] = '';
    $result = $mysqli->query("SELECT * FROM employes");
    $tab['resultat'] .= "<select name='personne' id='personne'>";

    while($employe = $result->fetch_assoc()) {
        $tab['resultat'] .= "<option value=\"$employe[id_employes]\">$employe[prenom]</option>";
    }

    $tab['resultat'] .= "</select>";

//<!-- ##################### 6 => encodage et envoi du tableau au format JSON ######################## -->
    echo json_encode($tab);