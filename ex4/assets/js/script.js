$(function(){
//on va stoké dans la variable firstColor la couleur de base du rectangle.
//$('.rectangle').css('background-color') récupére la valeur de la propriété background-color parce qu'on n'a pas précisé de valeur.
  var firstColor = $('.rectangle').css('background-color');
 $('#changeHeight').click(function(){
//on stock la hauteur de réctangle dans la variable "rectangleHeight".
//$('.rectangle').height(); récupére la hauteur du réctangle parce qu'on n'a pas précisé de valeur.
 	var rectangleHeight = $('.rectangle').height();
//selon la hauteur qu'on récupere a chaque click, on y ajoute 10 ou on la remet a 10. 
 	if (rectangleHeight < 100 ){
 		rectangleHeight += 10;
 	}else{
 		rectangleHeight = 10; 
 	}
//on attribue cette nouvelle hauteur au rectangle. 	
 $('.rectangle').height(rectangleHeight);
 });
 $('#changeColor').click(function(){
//On attribue a notre réctangle la couleur verte.
 	$('.rectangle').css('background-color','green');
 });
 $('#resetColor').click(function(){
//On attribue a notre réctangle la couleur que l'on a stocké au chargement de la page.
 	$('.rectangle').css('background-color', firstColor);
 });
 $('#hideRectangle').click(function(){
//on cache notre réctangle avec la fonction hide 
 	$('.rectangle').hide();
 });
 $('#showRectangle').click(function(){
//on affiche notre réctangle avec la fonction show
 	$('.rectangle').show();
 });
});