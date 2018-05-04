//Création de la variable pour l'appliquer dans le html
var e2n = document.getElementById('logoE2n');
//Contexte en 2 dimensions
var ctx = e2n.getContext("2d");

//La lettre E
//Trait vertical
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.moveTo(100,100);
ctx.lineTo(100,400);
ctx.closePath();
ctx.stroke();
//Trait horizontal Haut
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.moveTo(100,100);
ctx.lineTo(300,100);
ctx.closePath();
ctx.stroke();
//Trait horizontal milieu
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.moveTo(100,250);
ctx.lineTo(300,250);
ctx.closePath();
ctx.stroke();
//Trait horizontal Bas
ctx.beginPath();
ctx.strokeStyle = "#000000";
ctx.moveTo(100,400);
ctx.lineTo(300,400);
ctx.closePath();
ctx.stroke();

//La lettre N
//Barre vertical gauche
ctx.beginPath();
ctx.strokeStyle ="#000000";
ctx.moveTo(800,100);
ctx.lineTo(800,400);
ctx.closePath();
ctx.stroke();
//Barre vertical droite
ctx.beginPath();
ctx.strokeStyle ="#000000";
ctx.moveTo(1100,100);
ctx.lineTo(1100,400);
ctx.closePath();
ctx.stroke();
//Barre au milieu du N
ctx.beginPath();
ctx.strokeStyle ="#000000";
ctx.moveTo(800,100);
ctx.lineTo(1100,400);
ctx.closePath();
ctx.stroke();

//Les Hexagones
//Hexagone 1
ctx.beginPath();
ctx.fillStyle = "#ebebeb";
ctx.moveTo(1200,100);
ctx.lineTo(1180,120);
ctx.lineTo(1180,140);
ctx.lineTo(1200,160);
ctx.lineTo(1220,140);
ctx.lineTo(1220,120);
ctx.lineTo(1200,100);
ctx.closePath();
ctx.fill();
//Hexagone 2
ctx.beginPath();
ctx.fillStyle = "#dbdadb";
ctx.moveTo(1180,150);
ctx.lineTo(1160,170);
ctx.lineTo(1160,190);
ctx.lineTo(1180,210);
ctx.lineTo(1200,190);
ctx.lineTo(1200,170);
ctx.lineTo(1180,150);
ctx.closePath();
ctx.fill();
//Hexagone 3
ctx.beginPath();
ctx.fillStyle = "#595656";
ctx.moveTo(1225,150);
ctx.lineTo(1205,170);
ctx.lineTo(1205,190);
ctx.lineTo(1225,210);
ctx.lineTo(1245,190);
ctx.lineTo(1245,170);
ctx.lineTo(1225,150);
ctx.closePath();
ctx.fill();
//Hexagone 4
ctx.beginPath();
ctx.fillStyle = "#ea4e1a";
ctx.moveTo(1200,200);
ctx.lineTo(1180,220);
ctx.lineTo(1180,240);
ctx.lineTo(1200,260);
ctx.lineTo(1220,240);
ctx.lineTo(1220,220);
ctx.lineTo(1200,200);
ctx.closePath();
ctx.fill();
//Hexagone 5
ctx.beginPath();
ctx.fillStyle = "#878787";
ctx.moveTo(1180,250);
ctx.lineTo(1160,270);
ctx.lineTo(1160,290);
ctx.lineTo(1180,310);
ctx.lineTo(1200,290);
ctx.lineTo(1200,270);
ctx.lineTo(1180,250);
ctx.closePath();
ctx.fill();
//Hexagone 6
ctx.beginPath();
ctx.fillStyle = "#ececec";
ctx.moveTo(1225,250);
ctx.lineTo(1205,270);
ctx.lineTo(1205,290);
ctx.lineTo(1225,310);
ctx.lineTo(1245,290);
ctx.lineTo(1245,270);
ctx.lineTo(1225,250);
ctx.closePath();
ctx.fill();
//Hexagone 7
ctx.beginPath();
ctx.fillStyle = "#efefef";
ctx.moveTo(1260,170);
ctx.lineTo(1250,180);
ctx.lineTo(1250,190);
ctx.lineTo(1260,200);
ctx.lineTo(1270,190);
ctx.lineTo(1270,180);
ctx.lineTo(1260,170);
ctx.closePath();
ctx.fill();
//Hexagone 8
ctx.beginPath();
ctx.fillStyle = "#a4a4a4";
ctx.moveTo(1270,195);
ctx.lineTo(1263,200);
ctx.lineTo(1263,205);
ctx.lineTo(1270,210);
ctx.lineTo(1277,205);
ctx.lineTo(1277,200);
ctx.lineTo(1270,195);
ctx.closePath();
ctx.fill();
//Hexagone 9
ctx.beginPath();
ctx.fillStyle = "#ea4e1a";
ctx.moveTo(1285,190);
ctx.lineTo(1280,195);
ctx.lineTo(1285,200);
ctx.lineTo(1290,195);
ctx.lineTo(1285,190);
ctx.closePath();
ctx.fill();

//Texte
ctx.beginPath();
ctx.font = "italic 35pt Gudea";
ctx.fillStyle = "#878787";
ctx.moveTo(800,400);
ctx.fillText("École du Numérique", 800, 440);
ctx.fillText("du Noyonnais", 790, 490);
ctx.closePath();
ctx.fill();

//Le 2
ctx.beginPath();
ctx.strokeStyle ="#ea4e1a";
ctx.moveTo(412,98);
ctx.bezierCurveTo(718,67,1178,58,336,404);
ctx.moveTo(414,118);
ctx.bezierCurveTo(655,89,1046,64,235,428);
ctx.moveTo(338,405);
ctx.bezierCurveTo(626,386,482,392,644,385);
ctx.moveTo(237,429);
ctx.bezierCurveTo(494,422,484,429,639,416);
ctx.moveTo(638,415);
ctx.bezierCurveTo(650,406,645,397,644,384);
ctx.moveTo(414,120);
ctx.bezierCurveTo(407,111,411,106,413,96);
ctx.stroke();
