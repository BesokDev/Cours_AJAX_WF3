// Ajout d'un eventListener sur le button avec l'id "action" de notre fichier index.html
document.getElementById("action").addEventListener("click", loadDoc);

// Création de fonction qui nous servira à charger le fichier créé "ajax_info.txt"
function loadDoc() {
    const xhttp = new XMLHttpRequest();

    // Fonction fléchée anonyme ES6 : notation différente de l'édition JavaScript ES5
    //      function () {}
    //      () => {}
    xhttp.onreadystatechange = () => {

        if(xhttp.readyState == 4 && xhttp.status == 200) {

            // La <div> avec  l'id "demo" contiendra après chargement le texte de notre fichier .txt
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    }
    xhttp.open("GET", "ajax_info.txt", true);
    // console.log(xhttp.readyState);
    xhttp.send();
    // console.log(xhttp.readyState);


    /* Tableau des valeurs de la propriété xhttp.readyState

        VALEUR      ETAT        DESCRIPTION
        -------------------------------------------------------------------------------------------------------
        0           UNSENT      Le client a été créé. la méthode open() n'a pas encore été appelé.
        1           OPENED      La méthode open() a été appelé.
        2     HEADERS_RECEIVED  La méthode send() a été appelé, et les en-tête et status code sont disponibles.
        3           LOADING     Chargement, La propriété .responseText contient des données partielles
        4           DONE        L'opération est terminée.
    */

    /* Description des différents status code de réponse d'un serveur.

        CODE    DESCRIPTION
        -------------------------------------------------------------
        200     Succès de la requête
        301
        302     Redirection, respectivement permanente (301) et temporaire (302)
        401     Utilisateur non authentifié
        403     Accès refusé
        404     Ressource non trouvée
        500
        503     Erreur serveur
        504     Le serveur n'a pas répondu
    */

}