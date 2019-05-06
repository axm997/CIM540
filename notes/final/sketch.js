//midterm

var bearhead;
var bearbody;
var shortsleeve;
var tank;
var sweatshirt;


var bearheadButton;
var bearbodyButton;
var shortsleeveButton;
var tankButton;
var sweatshirtButton;


var currentImage = 0;

var entireicecreamPosX = 360;
var icecreamPosX = 333;


var icecreamY = 240;
var cone1Y = 420;
var cone2Y = 390;
var fruitY = 193;


var bearheadArray = [];
var bearbodyArray = [];
var shortsleeveArray = [];
var tankArray = [];
var sweatshirtArray = [];


var reset;

var fruitOffX = 0;
var fruitOffY = 0;

function preload(){
//fruit1 = loadImage("assets/fruit1.jpg");
bearheadArray[0] = loadImage("assets/bearhead.png");
bearbodyArray[0] = loadImage("assets/bearbody.png");
shortsleeveArray[0] = loadImage("assets/shortsleeve1.png");
shortsleeveArray[1] = loadImage("assets/shortsleeve2.png");
shortsleeveArray[2] = loadImage("assets/shortsleeve3.png");
tankArray[0] = loadImage("assets/tank1.png");
tankArray[1] = loadImage("assets/tank2.png");
tankArray[2] = loadImage("assets/tank3.png");
sweatshirtArray[0] = loadImage("assets/sweatshirt1.png");
sweatshirtArray[1] = loadImage("assets/sweatshirt2.png");
sweatshirtArray[2] = loadImage("assets/sweatshirt3.png");
nightclub = loadImage("assets/nightclub.jpg");
empty = loadImage("assets/empty.png");

}

function setup() {
  // put setup code here
createCanvas(754,1440);

shortsleeve = empty;
tank = empty;
sweatshirt = empty;



reset = createButton("Start Over");
reset.position(70,620);
reset.mousePressed(function(){
  shortsleeve = empty;
  tank = empty;
  sweatshirt = empty;
});



}




function draw() {
  background(255);
image(nightclub, 0,0, nightclub.width/6, nightclub.height/6);

//icons

//image(cherry1, 20,20, cherry1.width/16, cherry1.height/16);
//
// if(mouseX > 64 && mouseX < 85 && mouseY > 185 && mouseY < 215){
//   if(mouseIsPressed == true){
//     fruit = cherryArray[0];
//     fruitOffX = 70;
//     fruitOffY = 25;
//   }
//
// }

//image(strawberry1, 20,60, strawberry1.width/16, strawberry1.height/16);

//if(mouseX > 20 && mouseX < (20 + strawberry1.width/16) && mouseY > 60 && mouseY < 60 + strawberry1.height/16){
  //if(mouseIsPressed == true){
    //fruit = strawberry1;}}

if(mouseX > 126 && mouseX < (148) && mouseY > 190 && mouseY < 217){
  if(mouseIsPressed == true){
    shortsleeve = shortsleeveArray[0];
  }

}



if(mouseX > 58 && mouseX < (99) && mouseY > 260 && mouseY < 280){
  if(mouseIsPressed == true){
    shortsleeve = shortsleeveArray[0];
  }

}

if(mouseX > 119 && mouseX < (168) && mouseY > 260 && mouseY < 280){
  if(mouseIsPressed == true){
    shortsleeve = shortsleeveArray[1];
  }

}

if(mouseX > 58 && mouseX < (99) && mouseY > 287 && mouseY < 310){
  if(mouseIsPressed == true){
    shortsleeve = shortsleeveArray[2];
  }

}

if(mouseX > 58 && mouseX < (96) && mouseY > 231 && mouseY < 248){
  if(mouseIsPressed == true){
    tank = tankArray[0];
  }

}

if(mouseX > 119 && mouseX < (159) && mouseY > 231 && mouseY < 248){
  if(mouseIsPressed == true){
    tank = tankArray[1];
  }

}
//vanilla
if(mouseX > 46 && mouseX < (108) && mouseY > 314 && mouseY < 356){
  if(mouseIsPressed == true){
    tank = tankArray[2];
  }

}
//chocolate
if(mouseX > 114 && mouseX < (171) && mouseY > 314 && mouseY < 356){
  if(mouseIsPressed == true){
    sweatshirt = sweatshirtArray[0];
  }}
//pink
if(mouseX > 46 && mouseX < (108) && mouseY > 365 && mouseY < 408){
  if(mouseIsPressed == true){
    sweatshirt = sweatshirtArray[1];
  }}
//green
if(mouseX > 114 && mouseX < (171) && mouseY > 365 && mouseY < 408){
  if(mouseIsPressed == true){
    sweatshirt = sweatshirtArray[2];
  }}

//end of icons

// build icecream
// image(cone, entireicecreamPosX, cone1Y, coneArray[0].width/4, coneArray[0].height/4 );
//image(cone1, entireicecreamPosX, cone1Y, cone1.width/4, cone1.height/4 );
//image(cone2, entireicecreamPosX, cone2Y, cone2.width/6.5, cone2.height/6.5 );

// image(icecream, icecreamPosX, icecreamY, icecream.width/4, icecream.height/4 );
// image(syrup, entireicecreamPosX + 2, icecreamY -3, syrup.width/4, syrup.height/4 );
// image(toppings, entireicecreamPosX + 17, icecreamY, toppings.width/3.5, toppings.height/3.5 );
// image(fruit, entireicecreamPosX + fruitOffX, fruitY - fruitOffY, fruit.width/5, fruit.height/5 );
//70
//code for strawberry
//image(fruit, entireicecreamPosX + 42, fruitY, fruit.width/4, fruit.height/4 );


//end of build icecream

image(bearheadArray[0], 0,0);


}
