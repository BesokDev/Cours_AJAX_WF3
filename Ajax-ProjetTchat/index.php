<?php

    require_once ('include/_init.php');

    // Si on a pas de pseudo enregistré dans une session, c'est qu'on est pas passé par la page connexion
    if( !isset($_SESSION['pseudo'])) {
        header('location:connexion.php');
    }

?>



<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax: Projet Tchat</title>
<!-- ////////////////////////////// CSS STYLESHEET //////////////////////////// -->
    <link rel="stylesheet" href="include/style.css">
</head>
<body>

    <div id="conteneur">

        <div id="message_tchat">
<?php
            echo '<h2>Bonjour, vous êtes connecté sous le pseudo : ' . $_SESSION['pseudo'] . '</h2>';
            $queryResult = $mysqli->query("
                 SELECT d.id_dialogue,
                        m.pseudo,
                        m.civilite,
                        d.message,
                        date_format(d.date, '%d/%m/%Y') as date,
                        date_format(d.date, '%H:%i:%s') as heure
                 FROM dialogue d, membre m
                 WHERE m.id_membre = d.id_membre
                 ORDER BY d.date
            ");

            while($message = $queryResult->fetch_assoc()) {

                if($message['civilite'] === 'm') {

                }
                else {

                }

            }

?>
        </div>

    </div>

<!-- ////////////////////////////// CDN jQUERY //////////////////////////// -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>
</body>
</html>