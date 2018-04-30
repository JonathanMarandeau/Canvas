// Création de la variable pour l'appeler dans le html
var car = document.getElementById('myCar');
// Contexte en 2 dimensions
var ctx = car.getContext("2d");

// Rectangle de base de la voiture
ctx.beginPath(); //Initialisation
ctx.fillStyle = "#139622"; //Couleur de la zone
ctx.fillRect(150,50,150,50); //Point de départ 150px en X, 100 en Y, Largeur 150 et hauteur 50
ctx.closePath();
ctx.fill();

// Rectangle du bas de la voiture
ctx.beginPath();
ctx.fillStyle = "#138f96";
ctx.fillRect(100,100,250,50);
ctx.closePath();
ctx.fill();

// Roue gauche
ctx.beginPath();
ctx.fillStyle = "#fc0202"; //Couleur de l'interieur de la roue
ctx.strokeStyle = "#000000"; //Couleur de la bordure des roues
//  arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(120,180,30,0,Math.PI*2,false);
ctx.closePath();
ctx.fill();
ctx.stroke();

// Roue droite
ctx.beginPath();
ctx.fillStyle = "#fc0202"; //Couleur de l'interieur de la roue
ctx.strokeStyle = "#000000"; //Couleur de la bordure des roues
//  arc( x, y, radius, startAngle, endAngle, sensAntiHoraire )
ctx.arc(320,180,30,0,Math.PI*2,false);
ctx.closePath();
ctx.fill();
ctx.stroke();
