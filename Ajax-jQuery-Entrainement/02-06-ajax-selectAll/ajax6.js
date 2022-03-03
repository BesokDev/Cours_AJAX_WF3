// ===============================================================================================================================================================
// Fonction permettant d'ex�cuter la m�thode ajax() toutes les 10 secondes pour afficher les employ�s de mani�re actualis�.
	setInterval("ajax()", 10000);  // ex�cution de la m�thode ajax() toutes les 10 secondes.
	ajax(); // ex�cution de la m�thode ajax() imm�diatement pour ne pas attendre 10 secondes lors du 1er affichage de la page.	
// ===============================================================================================================================================================
	function ajax()
	{
		// Fonction permettant d'afficher les informations d'1 employe de la table "employes" en BDD.
		let id = $('#personne').find(":selected").val();
		// console.info(id); 
		$.post("ajax6.php", "", (donnees) =>{
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