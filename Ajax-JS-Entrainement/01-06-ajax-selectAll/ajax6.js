// ===============================================================================================================================================================
// Fonction permettant d'exécuter la méthode ajax() toutes les 10 secondes pour afficher les employés de manière actualisé.
	setInterval("ajax()", 10000);  // exécution de la méthode ajax() toutes les 10 secondes.
	ajax(); // exécution de la méthode ajax() immédiatement pour ne pas attendre 10 secondes lors du 1er affichage de la page.
// ===============================================================================================================================================================
// Fonction permettant d'afficher les employes de la table "employes" en BDD.
	function ajax()
	{	// console.log('on passe dans ajax()');
		if (window.XMLHttpRequest) var r = new XMLHttpRequest();   //For Most Browser
		else var r = new ActiveXObject("Microsoft.XMLHTTP");  //for Explorer
		
		r.open("POST", "ajax6.php", true); 		 //Opening the connection and sending the request.
		r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //r.setRequestHeader("Content-length", parameters.length); //r.setRequestHeader("Connection", "close");
		r.onreadystatechange=()	=>	//When the state change
		{ 
		   // ReadyState 4 = Loaded     see: http://www.w3.org/TR/2006/WD-XMLHttpRequest-20060405/
		   // status 200 = ok           see: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		   if(r.readyState==4 && r.status==200)
		   {
			  let obj = JSON.parse(r.responseText);
			  document.getElementById("resultat").innerHTML = obj.resultat;
			}
		}
		r.send();
	}