// ===============================================================================================================================================================
// Fonction permettant d'exécuter la méthode ajax() toutes les 10 secondes pour afficher les employés de manière actualisé.
	setInterval("ajax()", 10000);  // exécution de la méthode ajax() toutes les 10 secondes.
	ajax(); // exécution de la méthode ajax() immédiatement pour ne pas attendre 10 secondes lors du 1er affichage de la page.	
// ===============================================================================================================================================================
	function ajax()
	{
		// Fonction permettant d'afficher les informations d'1 employe de la table "employes" en BDD.
		let id = $('#personne').find(":selected").val();
		// console.info(id); 
		$.post("ajax6.php", "", (donnees) =>{
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