document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("submit").addEventListener('click', (event) => {
        // <!-- ##################### 2 ######################## -->
        event.preventDefault();
        // <!-- ##################### 3 => la fonction ajax() est appelée ######################## -->
        ajax();
    });

    function ajax() {
        // <!-- ##################### 3 Execution de la fonction ######################## -->
        if (window.XMLHttpRequest) request = new XMLHttpRequest(); // Pour la plupart des navigateurs
        else request = new ActiveXObject("Microsoft.XMLHTTP"); // Pour IE

        let input = document.getElementById("personne");
        let id = input.options[input.selectedIndex].value;

        let parameters = "id="+id;

        // <!-- ##################### 4 => ouverture du fichier ajax3.php ######################## -->
        request.open("POST", "ajax3.php", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                <!-- ##################### 6 => reception et traduction en json du tableau php $tab ######################## -->
                let objet = JSON.parse(request.responseText);
                <!-- ##################### 7 => remplacement de tout le code html de la div employes par le resultat de la traduction ######################## -->
                document.getElementById("employes").innerHTML = objet.resultat;
            }
        }

        request.send(parameters);
    }




});