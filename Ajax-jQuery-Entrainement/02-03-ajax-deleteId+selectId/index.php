<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form method="post" action="#">
		<div id="employes" style="display: inline;">
	<?php
		require_once('init.inc.php');
		$result = $mysqli->query("SELECT * FROM employes");
		echo '<select name="personne" id="personne">';
		while($employe = $result->fetch_assoc())
		{
			echo "<option value=\"$employe[id_employes]\">$employe[prenom]</option>";
		}
		echo '</select>';
	?>
		</div>
		<input type="submit" value="supprimer" id="submit">
	</form>
	
	<div id="resultat"></div>
	
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="ajax3.js"></script>
</body>
</html>