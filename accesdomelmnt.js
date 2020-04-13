function main(){

    //Déclaration des variables 

    let title = document.title;
    let contenu = document.body;
    let bandeAnnonce = document.getElementById('i1');
    let gonegirltype = document.getElementsByTagName('h2')[0];
    let nombreParagraphe = document.querySelectorAll('p').length;
    let nombreImage = document.querySelectorAll('img').length;
    let nombreSynopsis = document.getElementsByClassName('synopsis').length;
    let premiereRubrique = document.querySelector('h1').innerHTML;
    let nombreFilmsSous2K16 = document.getElementsByClassName('filmApres2K16').length;
    let synopsisImitationGame = document.getElementsByClassName('synopsis')[1].innerHTML;

    //Affichage 

    console.log('===============================================');

    console.log('Titre de la page : ' + title);
    console.log('Type de contenue de la page : ' + contenu);
    console.log('La troisième bande annonce est : ' + bandeAnnonce);

    console.log('===============================================');

    console.log('Le titre GONE GIRL est de type : ' + gonegirltype);

    console.log('===============================================');

    console.log('Notre page contient ' + nombreParagraphe + ' paragraphes et ' + nombreImage + ' images.');

    console.log('========================================');

    console.log('Notre page contient ' + nombreSynopsis + ' synopsis');

    console.log('========================================');

    console.log("La première rubrique de film date de l'année : " + premiereRubrique);

    console.log('========================================');

    console.log('Il existe ' + nombreFilmsSous2K16 + ' films sous la rubrique 2016');

    console.log('========================================');

    console.log('Synopsis du film IMITATION GAME :');
    console.log(synopsisImitationGame);
}

main();