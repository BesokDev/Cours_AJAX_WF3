<?php

require_once ('_init.php');

$tab = [];

// Ne pas retirer
extract($_POST);

/* Action : envoi_message : permet l'ajout d'un message en BDD */
//==============================================================================================================================================================================================
// ENVOYER UN MESSAGE

if ($_POST['action'] == 'envoi_message') {

    // On s'évite les problèmes de string liés aux apostrophes
    $_POST['message'] = addslashes($_POST['message']);

    // S'il y a bien un message, on l'enregistre en BDD
    if( !empty($_POST['message'])) {

        $mysqli->query("INSERT INTO dialogue (id_membre, message, date) VALUES ('". $_SESSION['id_membre'] ."', '$_POST[message]', now() ) ")
        or die ($mysqli->error);

        // Permet de rafraichir les derniers messages postés sur la dernière 1/2 heure
        $mysqli->query("UPDATE membre SET date_connexion= " . time() ." WHERE id_membre = ". $_SESSION['id_membre']) or die($mysqli->error);
    }

    $tab['validation'] = 'ok';
}

if ($_POST['action'] == 'affichage_message') {

    $lastId = floor($lastId);
    $tab['resultat'] = '';
    $tab['lastId'] = $lastId;

    // on affiche les messages depuis le dernier (lastid correspond au dernier message posté lorsque l'on tombe sur la page).
    $resultat = $mysqli->query("SELECT d.id_dialogue, m.pseudo, m.civilite, d.message, date_format(d.date, '%d/%m/%Y') as datefr, date_format(d.date, '%H:%i:%s') as heurefr FROM dialogue d, membre m WHERE d.id_dialogue>$lastid AND d.id_membre = m.id_membre ORDER by d.date ASC");

    while( $data = $resultat->fetch_assoc() ) {

        if($data['civilite'] === 'm') {

            $tab['resultat'] .= '<p title="' . $data['pseudo'] . ' à ' . $data['date'] . ' - ' . $data['heure'] . '" class="lila"><strong>' . $data['pseudo'] . '</strong>> ' . $data['message']. '</p>';

        }
        else {
            $tab['resultat'] .= '<p title="' . $data['pseudo'] . ' à ' . $data['date'] . ' - ' . $data['heure'] . '" class="vert"><strong>' . $data['pseudo'] . '</strong>> ' . $data['message']. '</p>';
        }

        // Au dernier tour de boucle, le dernier id_dialogue sera conservé, afin de ne pas ré-afficher des messages déjà sorti
        // (puisque ce bout de code est executé toutes les 5 secondes)
        $tab['lastId'] = $data['id_dialogue'];
    }
    $tab['validation'] = 'ok';
}