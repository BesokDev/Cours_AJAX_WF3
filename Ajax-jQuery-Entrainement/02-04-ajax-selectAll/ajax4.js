$(document).ready(() =>{ 
		// Fonction permettant d'afficher les informations d'1 employe de la table "employes" en BDD.
		let personne = $('#personne').text();
		// console.info(personne); 
		$.post("ajax4.php", "personne="+personne, (donnees) =>{ // $.post : permet d'accéder au contenu du post, on passe l'action affichage_message au fichier tchatAjax.php (contenu dans la variable url) ainsi que le dernier id.
					if(donnees.validation == 'ok')
					{	// console.info(resultat);
						$('#resultat').html(donnees.resultat); // append veut dire accroche, on accroche donc le resultat dans la div qui à l'id #resultat.
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
});