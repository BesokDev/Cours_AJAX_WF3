<?php

require_once ('include/_init.php');

if($_POST) {

    // Requete de vérification de disponibilité du pseudo réclamé par l'utilisateur au moment de la connexion
    $resultat = $mysqli->query("SELECT * FROM membre WHERE pseudo LIKE '$_POST[pseudo]'");
    $membre = $resultat->fetch_assoc();

    // Cas où le pseudo est disponible
    if($resultat->num_rows === 0) {

        $date_connexion = time();

        $mysqli->query("
            INSERT INTO membre (pseudo, civilite, ville, date_de_naissance, ip, date_connexion) 
            VALUES ('$_POST[pseudo]', 
                    '$_POST[civilite]', 
                    '$_POST[ville]', 
                    '$_POST[date_de_naissance]', 
                    '$_SERVER[REMOTE_ADDR]', 
                    '$date_connexion')
                "
        ) or die ($mysqli->error);

        // On sauvegarde l'id du membre enregistré ci-dessus
        $id_membre = $mysqli->insert_id;
    }
    // Sinon si le pseudo existe en BDD et que l'utilisateur est le propriétaire du pseudo (même IP)
    elseif ($resultat->num_rows > 0 && $membre['ip'] === $_SERVER['REMOTE_ADDR']) {
        // Si on récupère un pseudo en BDD, alors l'utilisateur est déjà inscrit, et on met à jour sa date de connexion
        $mysqli->query("UPDATE membre SET date_connexion=" . time() . " WHERE id_membre=$membre[id_membre]");
        $id_membre = $membre['id_membre'];
    }
    else {
        $msg .= "<div class='erreur'>Ce pseudo est déjà réservé et vous vous connectez avec une autre adresse IP</div>";
    }

    // Si il n'a pas de message d'erreur, alors on peut connecter l'utilisateur au tchat
    if(empty($msg)) {

        $_SESSION['id_membre'] = $id_membre; // on sauvegarde l'id de l'utilisateur dans le fichier de session
        $_SESSION['civilite'] = $_POST['civilite']; // on sauvegarde le sexe de l'utilisateur (h/f) en session
        $_SESSION['pseudo'] = $_POST['pseudo']; // on sauvegarde le pseudo en session

        // Redirection sur l'index
        header('location:index.php');
    }

}// end if($_POST)

?>

<form action="" method="post">

    <label for="pseudo">Pseudo</label><br>
    <input type="text" id="pseudo" name="pseudo"><br>

    <label for="civilite">Civilité</label><br>
    <input type="radio" id="civilite" name="civilite" value="f" checked>Femme
    <input type="radio" id="civilite" name="civilite" value="m">Homme<br>

    <label for="ville">Ville</label><br>
    <input type="text" id="ville" name="ville"><br>

    <label for="date_de_naissance">Date de naissance</label><br>
    <input type="date" id="date_de_naissance" name="date_de_naissance"><br>

    <button type="submit" name="connexion">Connexion au tchat !</button>

</form>
