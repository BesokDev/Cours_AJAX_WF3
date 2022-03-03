// ===============================================================================================================================================================
// Fonction permettant d'ajouter un �v�nement click sur le bouton submit lorsque la page html est charg�e (DOMContentLoaded).
$(document).ready(() =>{ 
	$("#submit").click((event) =>{
		event.preventDefault(); // annule le comportement par d�faut du submit (qui recharge habituellement la page).
		ajax(); // ex�cute notre fonction pour le traitement du submit.
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
						$('#employes').html(donnees.resultat); // append veut dire accroche, on accroche donc le resultat dans la div qui � l'id #resultat.
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
	}
});