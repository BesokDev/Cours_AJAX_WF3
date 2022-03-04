<?php
// ---------------------------------------------------------------------------------------------------------------------
// Ouverture de d'une connexion à la BDD "tchat"
$mysqli = new mysqli("localhost", "root", "", "tchat");

// ---------------------------------------------------------------------------------------------------------------------
// Ouverture de session
session_start();

// ---------------------------------------------------------------------------------------------------------------------
// Preparation d'une variable, déclaration et initialisation.
$msg = '';

// ---------------------------------------------------------------------------------------------------------------------
// Fonction de débug
function dd($param) {

    echo '<pre>';
        var_dump($param);
    echo '</pre>';

    die();
}

// ---------------------------------------------------------------------------------------------------------------------
// Fonction de déduction d'age à partir de la date de naissance

function age($birthday) {

    list($y, $m, $d) = explode('-', $birthday);

    if (($m = (date ('m') - $m )) < 0) {
        $y++;
    }
    elseif ($m == 0 && date ('d') - $d < 0 ) {
        $y++;
    }

    return date ('Y') - $y;
}