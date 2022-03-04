$(document).ready( () => {
    $("#submit").click( (event) => {
        event.preventDefault();
        ajaxEnvoiForm();
    });

// ==================================================================
    function ajaxEnvoiForm() {

        let prenom = $("#prenom").val();
        let nom = $("#nom").val();

        $.post("ajax5.php", "prenom=" + prenom + "&nom=" + nom + "&mode=envoi", (donnees) => {
        // console.log(donnees);
            if (donnees.validation === 'ok') {
                ajax();
                $("#prenom").val(''); // On vide l'input prenom
                $("#nom").val(''); // On vide l'input nom
            }
            else {
                alert("Validation echouée");
            }

        }, 'json');
    } // end function ajaxEnvoiForm()


// ==================================================================
    function ajax() {

        $.post("ajax5.php", "", (donnees) => {

            if (donnees.validation === 'ok') {

                // On injecte le résultat dans la div id=resultat.
                $("#resultat").html(donnees.resultat);

            }
            else {
                alert("Validation echouée");
            }

        }, 'json');
    }// end function ajax()



});// end document.ready()