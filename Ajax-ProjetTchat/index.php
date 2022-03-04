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

        <div id="message_tchat" style='overflow:scroll;overflow-x:hidden;max-height:500px;'>
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
                    echo '
                        <p class="lila" title="'. $message['pseudo'] .' à '. $message['date'] .' - '. $message['heure'] .'"> 
                            <strong> '. $message["pseudo"] .'</strong>
                            '. $message["message"] .'
                        </p>'
                    ;
                }
                else {
                    echo '
                        <p class="vert" title="'. $message['pseudo'] .' à '. $message['date'] .' - '. $message['heure'] .'"> 
                            <strong> '. $message["pseudo"] .'</strong>
                            '. $message["message"] .'
                        </p>';
                }
            }
?>
        </div> <!-- fin div#message_tchat -->
<!-- ============================================================================================================ -->
        <div id="liste_membre_connecte">

<?php
            echo "<h2>Membres connectés: </h2>";

            $queryResult2 = $mysqli->query("SELECT * FROM membre WHERE date_connexion > " . (time()-3600)) or die ($mysqli->error);

            while($membre = $queryResult2->fetch_assoc()) {
                if ($membre['civilite'] === 'm') {
                    echo '<p class="lila" title="Homme, '. $membre['ville'] .', '. age($membre['date_de_naissance']) .' ans"> 
                             '. $membre['pseudo'] .' 
                         </p>';
                }
                else {
                    echo '<p class="vert" title="Femme, '. $membre['ville'] .', '. age($membre['date_de_naissance']) .' ans"> 
                             '. $membre['pseudo'] .' 
                         </p>';
                } // end if/else
            }// end while
?>
        </div> <!-- fin div#liste_membre_connecte -->
        <div class="clear"></div>
<!-- ============================================================================================================================================== -->
    <div id="smiley">
        <img class="smiley" src="icone-smiley/smiley1.gif" alt=":)">
        <img class="smiley" src="icone-smiley/smiley2.gif" alt=":|">
        <img class="smiley" src="icone-smiley/smiley3.gif" alt=":d">
        <img class="smiley" src="icone-smiley/smiley4.gif" alt=":p">
        <img class="smiley" src="icone-smiley/smiley5.gif" alt="{3">
        <img class="smiley" src="icone-smiley/smiley6.gif" alt=":o">
    </div>
<!-- ============================================================================================================================================== -->
    <div id="formulaire_tchat">
        <form method="post" action="#">
            <textarea name="message" id="message" rows="5" maxlength="300" placeholder="Tapez votre message ici"></textarea><br>

            <button type="submit" id="submit" class="submit">Envoyer</button>
        </form>
    </div>
</div> <!-- fin div#conteneur -->
<!-- ////////////////////////////// CDN jQUERY //////////////////////////// -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous"></script>

<script src="include/ajax.js"></script>
</body>
</html>