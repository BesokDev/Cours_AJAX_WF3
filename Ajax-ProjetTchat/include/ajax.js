$(document).ready( () => {

    // =========================================================================================================
    // INITIALISATION DU TCHAT
    convertir_smiley();

    // Permet d'afficher l'ascenceur en bas dans la cadre de chat
    $('#message_tchat').scrollTop( $('#message_tchat')[0].scrollHeight);

    // URL du fichier avec lequel on va échanger des data dynamiquement
    let url = 'include/ajax.php';

    // Dernier id de dialogue
    let lastId = 0;

    // Intervalle de vérification pour pouvoir lancer la fonction affichant les messages
    let timer = setInterval(affichage_message, 13000)

    // Intervalle de vérification pour pouvoir lancer la fonction affichant les membres connectés
    let timer_membre_connecte = setInterval(affichage_membre_connecte, 53000);

    // =========================================================================================================
    // FONCTION PERMETTANT D'AFFICHER LES MEMBRES CONNECTES AU TCHAT DANS NOTRE PAGE WEB
    function affichage_membre_connecte() {

        $.post(url, {action:'affichage_membre_connecte'}, (data) => {

            if(data.validation == 'ok') {

                $('#liste_membre_connecte').empty().append(data.resultat);

            }
            else {
                alert("Problème d'affichage des membres connectés");
            }
        } , 'json');

        // Empêche que le formulaire soit soumis
        return false;
    } // end function affichage_membre_connecte()

    // =========================================================================================================
    // FONCTION PERMETTANT D'AFFICHER LES MESSAGES DU TCHAT DANS NOTRE PAGE WEB
    function affichage_message() {

        $.post(url, {action:'affichage_message', lastId:lastId }, (data) => {

            if(data.validation == 'ok') {

                lastId = data.lastId;

                $('#message_tchat').append(data.resultat);
                $('#message_tchat').scrollTop( $('#message_tchat')[0].scrollHeight);
                convertir_smiley();
            }
            else {
                alert("Problème d'affichage des messages");
            }

        } , 'json');

        // Empêche que le formulaire soit soumis
        return false;

    } // end function affichage_message()

    // =========================================================================================================
    // FONCTION PERMETTANT DE CONVERTIR LES SMILEYS EN TEXTE OU IMAGE
    function convertir_smiley() {
        $('#message_tchat p').each( () => {
           $("#message_tchat").html($("#message_tchat").html().replace(':)', '<img src="../icone-smiley/smiley1.gif" >' ));
           $("#message_tchat").html($("#message_tchat").html().replace(':|', '<img src="../icone-smiley/smiley2.gif" >' ));
           $("#message_tchat").html($("#message_tchat").html().replace(':d', '<img src="../icone-smiley/smiley3.gif" >' ));
           $("#message_tchat").html($("#message_tchat").html().replace(':p', '<img src="../icone-smiley/smiley4.gif" >' ));
           $("#message_tchat").html($("#message_tchat").html().replace('{3', '<img src="../icone-smiley/smiley5.gif" >' ));
           $("#message_tchat").html($("#message_tchat").html().replace(':o', '<img src="../icone-smiley/smiley6.gif" >' ));
        });
    }


}); // end document.ready