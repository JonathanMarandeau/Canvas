//Création de la variable pour l'appliquer dans le html
var ice = document.getElementById('iceCream');
//Contexte en 2 dimensions
var ctx = ice.getContext("2d");

//Cône de la glace
ctx.beginPath();
ctx.fillStyle = "#aa6522"; // Couleur du cone
ctx.moveTo(150,200); //Initialisation du point de départ
ctx.lineTo(225,350); //Deuxieme point (la pointe du cone)
ctx.lineTo(300,200); //Troisième point
ctx.closePath();
ctx.fill();//Application du remplissage de la zone créé

//Boule de glace
ctx.beginPath();
ctx.fillStyle = "#8a0908"; //Couleur de la boule de glace
ctx.moveTo(150,200); //Point de départ de la boule de glace (en bas a gauche)
ctx.quadraticCurveTo(225,30,300,200); //225: courbe de la glace
ctx.closePath();                      //30: Hauteur de la boule
ctx.fill();                           //300: Point d'arrivé de la fin de la courbe
                                      //200: Hauteur du point d'arrivé de la courbe
