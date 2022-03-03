<?php

require_once('_init.php'); // Require stoppe le script si le fichier est introuvable = fatal error != include qui lance un warning (qui ne bloque pas le script)

if($_POST) {
//    var_dump($_POST); die;

    // La méthode native extract() permet de variabiliser les valeurs des inputs
    // sous forme de $variable. Cette variable sera nommée à partir de la valeur de l'attribut "name" HTML
    extract($_POST);

    $result = $mysqli->query("INSERT INTO employes (prenom) VALUES ('". htmlspecialchars($personne) ."')");

    // Gestion en cas d'erreur.
    // On affiche l'erreur si la requête ci-dessus d'insertion a echoué.
    if($mysqli->error) {
        echo $mysqli->error;
    }
}