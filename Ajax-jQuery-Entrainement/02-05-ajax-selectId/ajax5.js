// ===============================================================================================================================================================
// Fonction permettant d'ajouter un événement click sur le bouton submit lorsque la page html est chargée (DOMContentLoaded).
$(document).ready(() =>{ 
	$("#submit").click((event) =>{
		event.preventDefault(); // annule le comportement par défaut du submit (qui recharge habituellement la page).
		ajax(); // exécute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
// Fonction permettant d'afficher les informations d'un employe (selectionné via select/option) de la table "employes" en BDD.
	function ajax()
	{
		let personne = $('#personne').find(":selected").val();
		// console.info(personne); 
		$.post("ajax5.php", "personne="+personne, (donnees) =>{ // $.post : permet d'accéder au contenu du post, on passe l'action affichage_message au fichier tchatAjax.php (contenu dans la variable url) ainsi que le dernier id.
					if(donnees.validation == 'ok')
					{
						$('#resultat').html(donnees.resultat); // append veut dire accroche, on accroche donc le resultat dans la div qui à l'id #resultat.
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
	}
});