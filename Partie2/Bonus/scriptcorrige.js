//Création de la variable pour l'appliquer dans le html
var e2n = document.getElementById('logoE2n');
//Contexte en 2 dimensions
var ctx = e2n.getContext("2d");

// La lettre E
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(80,110);
    ctx.lineTo(200,110);
    ctx.lineTo(190,125);
    ctx.lineTo(92,125);
    ctx.lineTo(80,200);
    ctx.lineTo(175,200);
    ctx.lineTo(175,215);
    ctx.lineTo(77,215);
    ctx.lineTo(62,305);
    ctx.lineTo(170,305);
    ctx.lineTo(170,320);
    ctx.lineTo(45,320);
    ctx.lineTo(80,110);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#313131";
    ctx.fill();

    // La lettre N
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(395,100);
    ctx.lineTo(360,315);
    ctx.lineTo(375,315);
    ctx.lineTo(405,130);
    ctx.lineTo(500,315);
    ctx.lineTo(510,315);
    ctx.lineTo(550,100);
    ctx.lineTo(535,100);
    ctx.lineTo(500,285);
    ctx.lineTo(405,100);
    ctx.lineTo(395,100);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#313131";
    ctx.fill();

    // Le chiffre 2
    ctx.beginPath();
    ctx.strokeStyle="#FFFFFF";
    ctx.fillStyle="#EA4C19";
    ctx.lineWidth="2";
    ctx.moveTo(165,185);//courbe de bezier qui a pour départ x=165 y=185
    ctx.bezierCurveTo(245,-100,700,50,115,420); //points de controle x1=245 y1=-100 x2=700 y2=50 et destx=115 desty=420
    ctx.bezierCurveTo(220,390,275,405,275,445);
    ctx.bezierCurveTo(180,450,165,455,85,475);
    ctx.bezierCurveTo(70,480,70,480,60,470);
    ctx.bezierCurveTo(50,460,45,450,40,440);
    ctx.bezierCurveTo(35,430,35,420,45,415);
    ctx.bezierCurveTo(500,150,385,45,335,55);
    ctx.bezierCurveTo(310,60,285,70,240,140);
    ctx.bezierCurveTo(230,150,220,190,165,185);
    ctx.fill();
    ctx.stroke();

    //Hexagone 1
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(665,84);
    ctx.lineTo(693,103);
    ctx.lineTo(691,137);
    ctx.lineTo(661,153);
    ctx.lineTo(634,133);
    ctx.lineTo(636,100);
    ctx.lineTo(665,84);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#DBD7D6";
    ctx.fill();

    //Hexagone 2 gris clair bas
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(683,252);
    ctx.lineTo(711,270);
    ctx.lineTo(709,304);
    ctx.lineTo(680,318);
    ctx.lineTo(652,302);
    ctx.lineTo(654,266);
    ctx.lineTo(683,252);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#DBD7D6";
    ctx.fill();

    //Hexagone 3 gris moyen
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(629,136);
    ctx.lineTo(658,157);
    ctx.lineTo(654,188);
    ctx.lineTo(625,204);
    ctx.lineTo(597,185);
    ctx.lineTo(600,153);
    ctx.lineTo(629,136);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#B8B0B4";
    ctx.fill();

    //Hexagone 4 gris foncé haut
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(693,145);
    ctx.lineTo(718,163);
    ctx.lineTo(715,194);
    ctx.lineTo(688,208);
    ctx.lineTo(662,189);
    ctx.lineTo(666,159);
    ctx.lineTo(693,145);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#575757";
    ctx.fill();

    //Hexagone 5 gris foncé bas
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(620,247);
    ctx.lineTo(648,265);
    ctx.lineTo(645,299);
    ctx.lineTo(616,314);
    ctx.lineTo(589,296);
    ctx.lineTo(591,261);
    ctx.lineTo(620,247);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#575757";
    ctx.fill();

    //Hexagone 6 orange
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(657,193);
    ctx.lineTo(683,212);
    ctx.lineTo(681,247);
    ctx.lineTo(652,261);
    ctx.lineTo(625,243);
    ctx.lineTo(627,209);
    ctx.lineTo(657,193);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#EA4C19";
    ctx.fill();

    //Hexagone 7 petit gris clair
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(736,175);
    ctx.lineTo(747,184);
    ctx.lineTo(746,198);
    ctx.lineTo(735,204);
    ctx.lineTo(723,196);
    ctx.lineTo(724,182);
    ctx.lineTo(736,175);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#EFEEEE";
    ctx.fill();

    //Hexagone 8 petit gris foncé
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(764,197);
    ctx.lineTo(774,204);
    ctx.lineTo(773,218);
    ctx.lineTo(762,223);
    ctx.lineTo(752,215);
    ctx.lineTo(753,204);
    ctx.lineTo(764,197);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#B0B0B0";
    ctx.fill();
    
    //Hexagone 9 petit orange
    ctx.beginPath();      // Début du chemin
    ctx.moveTo(799,188);
    ctx.lineTo(806,192);
    ctx.lineTo(806,200);
    ctx.lineTo(799,204);
    ctx.lineTo(792,200);
    ctx.lineTo(792,192);
    ctx.lineTo(799,188);
    ctx.closePath();      // Fermeture du chemin (facultative)
    ctx.fillStyle = "#EA4C19";
    ctx.fill();
    var text = 'École du Numérique';
    var text2 = 'du Noyonnais'
    ctx.font = "italic 35pt Gudea";
    ctx.fontStyle = "italic"
    ctx.textAlign = "left";
    ctx.fillStyle = "#B0B0B0";
    ctx.fillText(text,335,400);
    ctx.fillText(text2,335,445);
    ctx.fillText("width: "+Math.round(textPxLength.width)+"px",25,100);
