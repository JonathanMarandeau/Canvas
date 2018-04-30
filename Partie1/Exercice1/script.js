/*Je crée une variable qui définit la globalité de ma zone et qui sera appelé dans le html*/
var house = document.getElementById('myHouse');
// Je définie une variable qui encadre la zone et mets le contexte en 2 dimensions
var ctx = house.getContext("2d");

//Toît de la maison
ctx.beginPath();   //Initialisation du chemin pour le toît de la maison
ctx.moveTo(200,50); //Le premier point commence au pixel 200 en X et 30 pixel en Y
ctx.lineTo(100,100); //On part du point précédent pour tracer une ligne avec les ordonnées et abscise indiqués
ctx.lineTo(300,100); //On continue de placer les points qui bordent le toît
ctx.lineTo(200,50);
ctx.closePath();     //Fermeture du chemin
ctx.fillStyle = "#D7823E"; //Couleur de la zone tracé
ctx.fill();         //Fonction qui permet de remplir la zone tracé

//Carré de la maison
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,300);
ctx.lineTo(300,300);
ctx.lineTo(300,100);
ctx.lineTo(100,100);
ctx.closePath();
ctx.fillStyle = "#A1D8E6";
ctx.fill();

// Porte de la maison
ctx.beginPath();
ctx.moveTo(180,300);
ctx.lineTo(220,300);
ctx.lineTo(220,240);
ctx.lineTo(180,240);
ctx.lineTo(180,300);
ctx.closePath();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

//Fenètre gauche
ctx.beginPath();
ctx.moveTo(130,120);
ctx.lineTo(130,150);
ctx.lineTo(160,150);
ctx.lineTo(160,120);
ctx.lineTo(130,120);
ctx.closePath();
ctx.fillStyle = "#C9C9C9";
ctx.fill();

//Fenètre droite
ctx.beginPath();
ctx.moveTo(240,120);
ctx.lineTo(240,150);
ctx.lineTo(270,150);
ctx.lineTo(270,120);
ctx.lineTo(240,120);
ctx.closePath();
ctx.fillStyle = "#C9C9C9";
ctx.fill();
