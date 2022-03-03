document.addEventListener("DOMContentLoaded", (event) => {

    if (window.XMLHttpRequest) request = new XMLHttpRequest();
    else request = new ActiveXObject("Microsoft.XMLHTTP");

    let div = document.getElementById("personne");
    let personne = div.innerHTML;
    ///////////////////////
    console.log(personne);

    let parameters = "personne="+personne;

    request.open("POST", "ajax4.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {
            //////////////////////////
            console.log(request.responseText);

            let objet = JSON.parse(request.responseText);
            //////////////////////////
            console.log(objet.resultat);

            document.getElementById("resultat").innerHTML = objet.resultat;
        }
    }

    request.send(parameters);
});