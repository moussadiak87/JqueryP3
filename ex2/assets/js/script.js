$(function(){
  var count = 0;
  $('#buttonUp').click(function(){ //clique sur le bouton +
    count++; //ajoute 1 au compteur
    $('#number').val(count);
  });
  $('#buttonDown').click(function(){ //clique sur le bouton -
    count--; // retire 1 au compteur
    $('#number').val(count);
  });
});
