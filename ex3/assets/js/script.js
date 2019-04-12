$(function(){
  // Permet de générer un nombre aléatoire entre 0 et 100.
  var getNumber = Math.floor(Math.random()*101);
  var count = 0 ;
  $('#button').click(function(){
    // Déclare la variable dans laquelle on stocke la saisie utilisateur.
    var result = $('#result').val();
    // On incrémente le nombre de coups.
    count++;
    // Si la saisie utilisateur est inférieure au nombre généré, je le précise à l'utilisateur avec une boîte de dialogue.
    if (result < getNumber){
      alert('pas assez !');
      // Si la saisie utilisateur est supérieure au nombre généré, je le précise à l'utilisateur avec une boîte de dialogue.
    } else if (result > getNumber){
      alert('trop !');
      // Si la saisie utilisateur est égale au nombre généré, je le précise à l'utilisateur avec une boîte de dialogue.
    } else if(result == getNumber){
      alert('c\'est bon ! Nombre de coups: ' + count);
      // Dans tout les autres cas on demande un nombre.
    } else{
      alert('Veuillez entrer un nombre !');
    }
  });
});