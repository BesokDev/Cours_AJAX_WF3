$(document).ready( () => {
    $("#submit").click( (event) => {
        event.preventDefault();
        ajaxEnvoiForm();
    });

// ==================================================================
    function ajaxEnvoiForm() {

        let prenom = $("#prenom").val();

        $.post("ajax5.php", "prenom=" + prenom + "&mode=envoi", (donnees) => {
// console.log(donnees);

            ajax();
            $("#prenom").val(''); // On vide l'input prenom

        }, 'json');
    } // end function ajaxEnvoiForm()
// ==================================================================
    function ajax() {

        $.post("ajax5.php", "", (donnees) => {

            $("#resultat").html(donnees.resultat);

        }, 'json');
    }



});