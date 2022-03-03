// ===============================================================================================================================================================
// Fonction permettant d'ajouter un événement click sur le bouton submit lorsque la page html est chargée (DOMContentLoaded).
$(document).ready(() =>{ 
	$("#submit").click((event) =>{
		event.preventDefault(); // annule le comportement par défaut du submit (qui recharge habituellement la page).
		ajaxEnvoiForm(); // exécute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
// Fonction permettant d'exécuter la méthode ajax() toutes les 5 secondes pour afficher les employés de manière actualisé.
	setInterval(ajax, 5000);
	// Code setInterval exécute toutes les 1000ms exactement , alors que ...  setTimeout attend 1000ms , exécute la fonction (ce qui prend quelques ms ) , puis définit un autre délai . Donc, la période d'attente est en fait un peu plus de 1000 ms.
// ===============================================================================================================================================================
// Fonction permettant d'afficher les employes de la table "employes" en BDD.
	function ajax()
	{
		$.post("ajax7.php", "", (donnees) =>{
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
// ===============================================================================================================================================================
// Fonction permettant d'insérer un employé dans la table "employes" en BDD.
	function ajaxEnvoiForm()
	{	
		let personne = $('#personne').val(); 	// alert(personne);
		$.post("ajax7.php", "personne="+personne+"&mode=envoi", (donnees) =>{
					if(donnees.validation == 'ok')
					{
						ajax(); // après avoir inséré, on appelle la fonction permettant d'afficher les employés.
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