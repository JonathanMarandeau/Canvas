var house = document.getElementById('myHouse');
var ctx = house.getContext("2d");

// Toît de la maison
ctx.beginPath();
ctx.fillStyle = "#D7823E";
// Rotation du carré de 45 degrés
ctx.rotate(45 * Math.PI / 180);
// fillRect(StartX, StartY, Largeur, Hauteur)
ctx.fillRect(200,-200,155,155);
ctx.closePath();
ctx.fill();

// Carré de la maison
ctx.beginPath();
ctx.fillStyle = "#A1D8E6";
ctx.rotate(-45 * Math.PI / 180);//Pourquoi remettre rotate ????!!!!!!!!
ctx.fillRect(173,110,220,220);
ctx.closePath();
ctx.fill();

//Porte de la maison
ctx.beginPath();
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(255,250,60,80);
ctx.closePath();
ctx.fill();

//Fenètre gauche
ctx.beginPath();
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(190,150,50,50);
ctx.closePath();
ctx.fill();

//Fenètre droite
ctx.beginPath();
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(330,150,50,50);
ctx.closePath();
ctx.fill();
