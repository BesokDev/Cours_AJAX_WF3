<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>01-03-Ajax-deleteId+selectId</title>
</head>
<body>
<!-- ##################### 1 ######################## -->
    <form action="#" method="post">

        <div id="employes" style="display: inline;">
            <!-- ##################### 7 => remplacement du code html dynamiquement par le fichier ajax3.js ######################## -->
            <?php
    require_once ('_init.php');

    $employes = $mysqli->query("SELECT * FROM employes");

    echo "<select name='personne' id='personne'>";

    while($employe = $employes->fetch_assoc()) {
        echo "<option value=\"$employe[id_employes]\">$employe[prenom]</option>";
    }

    echo "</select>";
?>
        </div>
        <!-- ##################### 2 => c'est le fichier ajax3.js qui est mis en oeuvre ######################## -->
        <button type="submit" id="submit">Supprimer</button>
    </form>

    <script src="ajax3.js"></script>
</body>
</html>
