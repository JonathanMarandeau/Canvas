//Création de la variable pour l'appliquer dans le html
var gingerbread = document.getElementById('petitBiscuit');
//Contexte en 2 dimensions
var ctx = gingerbread.getContext("2d");

//Tête de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#976f0f";
ctx.arc(202,60,50,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//Corps de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#976f0f";
ctx.moveTo(20,100);
ctx.lineTo(20,130);
ctx.lineTo(155,130);
ctx.lineTo(155,360);
ctx.lineTo(250,360);
ctx.lineTo(250,130);
ctx.lineTo(380,130);
ctx.lineTo(380,100);
ctx.closePath();
ctx.fill();

//Oeil gauche de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(182,50,10,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//Sourcil gauche de petit biscuit
ctx.beginPath();
ctx.moveTo(172,35);
ctx.quadraticCurveTo(180,20,192,35);
ctx.strokeStyle = "#ffffff";
ctx.stroke();

//Oeil droit de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(222,50,10,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//Sourcil droit de petit biscuit
ctx.beginPath();
ctx.moveTo(210,35);
ctx.quadraticCurveTo(220,20,232.5,35);
ctx.strokeStyle = "#ffffff";
ctx.stroke();

//Boutton du Haut du smoking de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#7a2976";
ctx.arc(203,150,10,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//Boutton du Bas du jolie costume de petit bisuit
ctx.beginPath();
ctx.fillStyle = "#7a2976";
ctx.arc(203,200,10,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//Superbe entre-jambe de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.moveTo(190,300);
ctx.lineTo(190,370);
ctx.lineTo(215,370);
ctx.lineTo(215,300);
ctx.closePath();
ctx.fill();

//Entre-jambes arrondi de petit biscuit
ctx.beginPath();
ctx.fillStyle = "#ffffff";
ctx.arc(202.5,300,12.5,0,Math.PI,true);
ctx.closePath();
ctx.fill();
//Bouche de petit biscuit               // quadraticCurveTo nécessite:
                                        // moveTo: Point de départ du premier Point
                                        //quadraticCurveTo :(forme de la courbe,forme de la courbe, coordonée arrivé X, coordonnée arrivé Y)
//Lèvre du bas pulpeuse de petit biscuit
ctx.beginPath();
ctx.moveTo(182,80);
ctx.quadraticCurveTo(200,100,225,80);
ctx.strokeStyle = "#fa0500";
ctx.stroke();
//lèvre du haut botoxer de petit biscuit
ctx.beginPath();
ctx.moveTo(182,80);
ctx.quadraticCurveTo(200,120,225,80);
ctx.strokeStyle = "#fa0500";
ctx.stroke();

//Main gauche de petit biscuit
ctx.beginPath();
ctx.fillStyle ="#976f0f";
ctx.rotate(270 * Math.PI / 180);
ctx.arc(-115,20,15,0,Math.PI,true);
ctx.closePath();
ctx.fill();

//Main droite de petit biscuit
ctx.beginPath();
ctx.fillStyle ="#976f0f";
ctx.arc(-115,380,15,0,Math.PI,false);
ctx.closePath();
ctx.fill();

//Pied gauche de petit biscuit
ctx.beginPath();
ctx.fillstyle = "#fa0500";
ctx.rotate(-270 * Math.PI / 180);
ctx.arc(172.5,360,17.5,0,Math.PI,false);
ctx.closePath();
ctx.fill();

//Pied droit de petit biscuit
ctx.beginPath();
ctx.fillstyle = "#fa0500";
ctx.arc(232.5,360,17.5,0,Math.PI,false);
ctx.closePath();
ctx.fill();
