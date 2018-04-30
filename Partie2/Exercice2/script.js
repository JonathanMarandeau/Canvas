//Création de la variable pour l'appliquer dans le html
var alien = document.getElementById('ufo');
//Contexte en 2 dimensions
var ctx = alien.getContext("2d");

//Fond bleu
ctx.fillStyle = "#0000FF";
ctx.fillRect(20, 20, 400, 400);

//Cockpit de l'OVNI
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.moveTo(150,190);
ctx.quadraticCurveTo(200,80,250,180);
ctx.closePath();
ctx.fill();

//Base de l'OVNI
/*Partie Haute*/
ctx.beginPath(); //Initialisation de la zone
ctx.fillStyle = "#e0e1f3"; //Couleur de la base de l'OVNI
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,130,300,200);
ctx.closePath();
ctx.fill();
/*Partie Basse*/
ctx.beginPath(); //Initialisation de la zone
ctx.fillStyle = "#e0e1f3"; //Couleur de la base de l'OVNI
ctx.moveTo(100,200);
ctx.quadraticCurveTo(200,280,300,200); //200: courbe du cockpit
ctx.closePath();                       //280: Hauteur du cockpit
ctx.fill();                           //300: Point d'arrivé de la fin de la courbe
                                      //200: Hauteur du point d'arrivé de la courbe
