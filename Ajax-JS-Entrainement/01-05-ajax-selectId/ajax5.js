// ===============================================================================================================================================================
// Fonction permettant d'ajouter un événement click sur le bouton submit lorsque la page html est chargée (DOMContentLoaded).
document.addEventListener("DOMContentLoaded", (event) => { 
	document.getElementById("submit").addEventListener('click', (event) =>{
		event.preventDefault(); // annule le comportement par défaut du submit (qui recharge habituellement la page).
		ajax(); // exécute notre fonction pour le traitement du submit.
	});
// ===============================================================================================================================================================
// Fonction permettant d'afficher les informations d'un employe (selectionné via select/option) de la table "employes" en BDD.
	function ajax()
	{
		if (window.XMLHttpRequest) var r = new XMLHttpRequest();   //For Most Browser
		else var r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
		
		let p = document.getElementById("personne");
		let personne = p.options[p.selectedIndex].value;
		// console.log(personne);
		let parameters = "personne="+personne;
		r.open("POST", "ajax5.php", true); 		 //Opening the connection and sending the request.
		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
		r.onreadystatechange=()	=>	//When the state change
		{ 
		   //ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
		   //status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		   if(r.readyState==4 && r.status==200)
		   {
			  let obj = JSON.parse(r.responseText);
			  document.getElementById("resultat").innerHTML = obj.resultat;
			}
		}
		r.send(parameters);
	}

});