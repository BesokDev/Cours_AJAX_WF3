// ===============================================================================================================================================================
// Fonction permettant d'ajouter un �v�nement click sur le bouton submit lorsque la page html est charg�e (DOMContentLoaded).
$(document).ready(() =>{ 
	$("#submit").click((event) =>{
		event.preventDefault(); // annule le comportement par d�faut du submit (qui recharge habituellement la page).
		ajaxEnvoiForm(); // ex�cute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
// Fonction permettant d'ex�cuter la m�thode ajax() toutes les 5 secondes pour afficher les employ�s de mani�re actualis�.
	setInterval(ajax, 5000);
	// Code setInterval ex�cute toutes les 1000ms exactement , alors que ...  setTimeout attend 1000ms , ex�cute la fonction (ce qui prend quelques ms ) , puis d�finit un autre d�lai . Donc, la p�riode d'attente est en fait un peu plus de 1000 ms.
// ===============================================================================================================================================================
// Fonction permettant d'afficher les employes de la table "employes" en BDD.
	function ajax()
	{
		$.post("ajax7.php", "", (donnees) =>{
					if(donnees.validation == 'ok')
					{
						$('#resultat').html(donnees.resultat); // append veut dire accroche, on accroche donc le resultat dans la div qui � l'id #resultat.
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
	}
// ===============================================================================================================================================================
// Fonction permettant d'ins�rer un employ� dans la table "employes" en BDD.
	function ajaxEnvoiForm()
	{	
		let personne = $('#personne').val(); 	// alert(personne);
		$.post("ajax7.php", "personne="+personne+"&mode=envoi", (donnees) =>{
					if(donnees.validation == 'ok')
					{
						ajax(); // apr�s avoir ins�r�, on appelle la fonction permettant d'afficher les employ�s.
						$('#personne').val('');  // on vide la case input.
					}
					else
					{
						alert('pb affichage message');
					}
				}, 'json');
	}				
// ===============================================================================================================================================================

});