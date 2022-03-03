// ===============================================================================================================================================================
// Fonction permettant d'ajouter un événement click sur le bouton submit lorsque la page html est chargée (DOMContentLoaded).
$(document).ready(() => { 
	$("#submit").click((event) =>{
		event.preventDefault(); // annule le comportement par défaut du submit (qui recharge habituellement la page).
		ajax(); // exécute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
	function ajax()
	{
		// Fonction permettant d'afficher les informations d'1 employe de la table "employes" en BDD.
		personne = $('#personne').val(); // nous récupérons la valeur saisis dans l'input. // console.log(personne);
		$.post("ajax2.php", "personne="+personne, (donnees) => { 
					if(donnees.validation == 'ok')
					{
						$('#resultat').append("<div style=\"background: #22d3a7\">employé "+personne+" ajouté!</div>"); // append veut dire accroche, on accroche donc le resultat dans la div qui à l'id #resultat.
						$('#personne').val("");
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
	}
});