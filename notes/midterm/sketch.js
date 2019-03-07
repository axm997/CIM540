//midterm

var fruit;
var syrup;
var toppings;
var icecream;
var cone;
var cherry;
var strawberry;

var fruitButton;
var syrupButton;
var toppingsButton;
var icecreamButton;
var coneButton;
var cherryButton;
var strawberryButton;

var currentImage = 0;

var entireicecreamPosX = 360;
var icecreamPosX = 333;


var icecreamY = 240;
var cone1Y = 420;
var cone2Y = 390;
var fruitY = 193;


function preload(){
//fruit1 = loadImage("assets/fruit1.jpg");
syrup1 = loadImage("assets/syrup1.png");
syrup2 = loadImage("assets/syrup2.png");
syrup3 = loadImage("assets/syrup3.png");
syrup4 = loadImage("assets/syrup4.png");
toppings1 = loadImage("assets/toppings1.png");
toppings2 = loadImage("assets/toppings2.png");
icecream1 = loadImage("assets/icecream1.png");
icecream2 = loadImage("assets/icecream2.png");
icecream3 = loadImage("assets/icecream3.png");
icecream4 = loadImage("assets/icecream4.png");
icecream5 = loadImage("assets/icecream5.png");
icecream6 = loadImage("assets/icecream6.png");
cone1 = loadImage("assets/cone1.png");
cone2 = loadImage("assets/cone2.png");
cherry1 = loadImage("assets/cherry1.png");
strawberry1 = loadImage("assets/strawberry1.png");
midtermicons2 = loadImage("assets/midtermicons2.jpg");
empty = loadImage("assets/empty.png");

}

function setup() {
  // put setup code here
createCanvas(1024,1366);

fruit = empty;
syrup = empty;
toppings = empty;
icecream = empty;
cone = empty;




}




function draw() {
  background(255);
image(midtermicons2, 0,0, midtermicons2.width/6, midtermicons2.height/6);

//icons

//image(cherry1, 20,20, cherry1.width/16, cherry1.height/16);

if(mouseX > 64 && mouseX < 85 && mouseY > 185 && mouseY < 215){
  if(mouseIsPressed == true){
    fruit = cherry1;
  }
//if(mouseX > 20 && mouseX < (20 + cherry1.width/16) && mouseY > 20 && mouseY < 20 + cherry1.height/16){
  if(mouseIsPressed == true){
    fruit = cherry1;
  }
}

//image(strawberry1, 20,60, strawberry1.width/16, strawberry1.height/16);

//if(mouseX > 20 && mouseX < (20 + strawberry1.width/16) && mouseY > 60 && mouseY < 60 + strawberry1.height/16){
  //if(mouseIsPressed == true){
    //fruit = strawberry1;}}

if(mouseX > 126 && mouseX < (148) && mouseY > 190 && mouseY < 217){
  if(mouseIsPressed == true){
    fruit = strawberry1;
  }

}



if(mouseX > 58 && mouseX < (99) && mouseY > 260 && mouseY < 280){
  if(mouseIsPressed == true){
    syrup = syrup1;
  }

}

if(mouseX > 119 && mouseX < (168) && mouseY > 260 && mouseY < 280){
  if(mouseIsPressed == true){
    syrup = syrup2;
  }

}

if(mouseX > 58 && mouseX < (99) && mouseY > 287 && mouseY < 310){
  if(mouseIsPressed == true){
    syrup = syrup3;
  }

}
if(mouseX > 119 && mouseX < (168) && mouseY > 287 && mouseY < 310){
  if(mouseIsPressed == true){
    syrup = syrup4;
  }

}

if(mouseX > 58 && mouseX < (96) && mouseY > 231 && mouseY < 248){
  if(mouseIsPressed == true){
    toppings = toppings1;
  }

}

if(mouseX > 119 && mouseX < (159) && mouseY > 231 && mouseY < 248){
  if(mouseIsPressed == true){
    toppings = toppings2;
  }

}
//vanilla
if(mouseX > 46 && mouseX < (108) && mouseY > 314 && mouseY < 356){
  if(mouseIsPressed == true){
    icecream = icecream2;
  }

}
//chocolate
if(mouseX > 114 && mouseX < (171) && mouseY > 314 && mouseY < 356){
  if(mouseIsPressed == true){
    icecream = icecream1;
  }}
//pink
if(mouseX > 46 && mouseX < (108) && mouseY > 365 && mouseY < 408){
  if(mouseIsPressed == true){
    icecream = icecream6;
  }}
//green
if(mouseX > 114 && mouseX < (171) && mouseY > 365 && mouseY < 408){
  if(mouseIsPressed == true){
    icecream = icecream4;}}
//blue
if(mouseX > 46 && mouseX < (108) && mouseY > 415 && mouseY < 459){
  if(mouseIsPressed == true){
    icecream = icecream5;}}
//purple
if(mouseX > 114 && mouseX < (171) && mouseY > 415 && mouseY < 459){
  if(mouseIsPressed == true){
    icecream = icecream3;}}
//image(cone1, 20, 100, cone1.width/20, cone1.height/20);
if(mouseX > 51 && mouseX < 98 && mouseY > 470 && mouseY <  534){
  if(mouseIsPressed == true){
    cone = cone1;}}
//image(cone2, 20, 140, cone2.width/20, cone2.height/20);
if(mouseX > 117 && mouseX < 170 && mouseY > 470 && mouseY < 546){
  if(mouseIsPressed == true){
    cone = cone2;}
  }
//end of icons

// build icecream
image(cone, entireicecreamPosX, cone1Y, cone1.width/4, cone1.height/4 );
//image(cone1, entireicecreamPosX, cone1Y, cone1.width/4, cone1.height/4 );
//image(cone2, entireicecreamPosX, cone2Y, cone2.width/6.5, cone2.height/6.5 );

image(icecream, icecreamPosX, icecreamY, icecream.width/4, icecream.height/4 );
image(syrup, entireicecreamPosX + 2, icecreamY -3, syrup.width/4, syrup.height/4 );
image(toppings, entireicecreamPosX + 17, icecreamY, toppings.width/3.5, toppings.height/3.5 );
image(fruit, entireicecreamPosX + 70, fruitY -25, fruit.width/5, fruit.height/5 );

//code for strawberry
//image(fruit, entireicecreamPosX + 42, fruitY, fruit.width/4, fruit.height/4 );


//end of build icecream


}
