
// Fonction permettant d'ajouter un évenement sur la page HTML entière, et le code à l'interieur sera éxecuté uniquement lorsque le chargement ce cette dernière est complet.
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById('submit').addEventListener('click', (event) => {
        event.preventDefault(); // Cette instruction permet d'annuler le comportement par défaut du <button>, qui est de recharger la page HTML dans le navigateur.
        ajax(); // éxecute notre fonction nommée pour le traitement du submit
    })
    // =======================================================================================
    // Déclaration de notre fonction nommée
    // Elle nous permettra d'afficher les informations d'un employé de notre table en BDD
    function ajax() {

        if(window.XMLHttpRequest) {
            var request = new XMLHttpRequest(); // Pour la plupart des navigateurs
        }
        // else {
        //     var request = new ActiveXObject("Microsoft.XMLHTTP") // Pour Internet Explorer
        // }

        // On variabilise l'input de notre formulaire HTML
        let p = document.getElementById("personne");
        let personne = p.value;
        // console.log(personne);

        // On variabilise le parametre qu'on enverra dans l'url en methode get.
        let parameters = "personne="+personne;
        // console.log(parameters);

        // Ouverture d'une connexion avec le fichier "ajax2.php"
        request.open("POST", "ajax2.php", true);

        // On redéfini l'en-tête de notre requête pour pouvoir faire de l'ajax (de l'asynchrone)
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        // On envoi notre paramètre qui contient le prénom de la personne à insérer dans la BDD.
        request.send(parameters);

        // On affiche une notification de succès lors d'un ajout.
        document.getElementById("result").innerHTML = "<div style='background: yellow;'> La personne "+ personne +" a bien été ajouté dans la base.</div>"

        // Remise à zéro de la valeur de l'input HTML. (pour pouvoir réécrire un autre prénom à l'intérieur)
        p.value = "";
    }
})