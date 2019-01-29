// global variables
var backgroundColor = "yellow"; //Strings
var mouthx = 150;



function setup() {
  // put setup code here
createCanvas(600,600);
background(178,235,238);
}


function draw() {
  // put drawing code here
background(246, 206, 141);
  strokeWeight(1);
  fill(50,50,50);

  // neck
  fill(178,235,238);
  rect(222,240,80,40);

  //ears
    fill(178,235,238);
  triangle(170+100,140,200+100,100,200+100,140);
  triangle(170+50,140,200+35,100,200+50,140);


  // head
fill(178,235,238);
rect(200,130,125,120,50);


  // nose
  ellipse(260,210,30,20);
  strokeWeight(10);
  point(260,202);
  strokeWeight(1);

  // first eye
  fill(253, 254, 254)
  ellipse(245,175,35,40);

  //first pupil
fill(195, 155, 211);
  ellipse(247,177,10,15);


  //second eye
  fill(253, 254, 254)
  ellipse(275,175,35,40);
  //second pupil
fill(195, 155, 211);
  ellipse(273,177,10,15);



//tail

strokeWeight(15);
fill(178,235,238);
line(330,285,370+50,270-50);


//body
  fill(178,235,238);
strokeWeight(1);
ellipse(263,375,200,230);

//circle legs
  fill(178,235,238);
strokeWeight(1);
ellipse(285,420,40,170);
strokeWeight(1);
ellipse(240,420,40,170);

//feet
rect(268,470,65,40,50);
rect(190,470,65,40,50);

strokeWeight(1);
//mouth
noFill();
strokeWeight(5);
angleMode(DEGREES);
arc(260,255,90,60,270,300);

//left claws
arc(240,507,30,30,135,270);
arc(220,507,30,30,135,270);
arc(200,507,30,30,135,270);
//right claws
arc(300,507,30,30,290,410);
arc(320,507,30,30,290,410);
arc(280,507,30,30,290,410);
}
