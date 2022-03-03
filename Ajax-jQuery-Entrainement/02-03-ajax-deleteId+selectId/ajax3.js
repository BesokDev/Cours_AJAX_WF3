// ===============================================================================================================================================================
// Fonction permettant d'ajouter un événement click sur le bouton submit lorsque la page html est chargée (DOMContentLoaded).
$(document).ready(() =>{ 
	$("#submit").click((event) =>{
		event.preventDefault(); // annule le comportement par défaut du submit (qui recharge habituellement la page).
		ajax(); // exécute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
	function ajax()
	{
		// Fonction permettant d'afficher les informations d'1 employe de la table "employes" en BDD.
		let id = $('#personne').find(":selected").val();
		// console.info(id); 
		$.post("ajax3.php", "id="+id, (donnees) =>{
					if(donnees.validation == 'ok')
					{
						$('#employes').html(donnees.resultat); // append veut dire accroche, on accroche donc le resultat dans la div qui à l'id #resultat.
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
	}
});