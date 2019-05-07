//final

var bearhead;
var bearbody;
var shortsleeve;
var tank;
var sweatshirt;


var shirt;


var bearheadButton;
var bearbodyButton;
var shortsleeveButton;
var tankButton;
var sweatshirtButton;


var currentImage = 0;




var bearheadArray = [];
var bearbodyArray = [];
var shortsleeveArray = [];
var tankArray = [];
var sweatshirtArray = [];


var reset;


var shirtButton;

var page = 0;

var dressoptions
var backgrounds = [];
var backgroundCounter = 0;



function preload(){
mainpage = loadImage("assets/mainpage.jpg");
mainpagewith = loadImage("assets/mainpagewith.jpg");
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
backgrounds[0] = loadImage("assets/nightclub.jpg");
backgrounds[1] = loadImage("assets/university.jpg");
dressoptions = loadImage ("assets/dressoptions.png")
startpage = loadImage ("assets/startpage.jpg")
empty = loadImage("assets/empty.png");



}

function setup() {
  // put setup code here
createCanvas(1440,754);

// shortsleeve = empty;
// tank = empty;
// sweatshirt = empty;


shirt = empty;

//reset = createButton("Start Over");
//reset.position(70,620);
//reset.mousePressed(function(){
  //shortsleeve = empty;
  //tank = empty;
  //sweatshirt = empty;
//});






}





function draw() {
background(255);
//startpage
if(page == 0){
  image(startpage, 0,0, startpage.width, startpage.height);
  bearhead = empty;
    bearbody = empty;}

  if(mouseX > 609 && mouseX < (609+203) && mouseY > 478 && mouseY < (478+84))
  { page = 1;
//    if(mouseIsPressed == true)
  //  {image(mainpage, 0,0, mainpage.width, mainpage.height);}



}

//mainpage with (dress)
if(page == 3){
  image(mainpagewith, 0,0, mainpagewith.width, mainpagewith.height);}

//dresspage
if(page == 1){
  image(mainpage, 0,0, mainpage.width, mainpage.height);
  if(mouseX > 695 && mouseX < (802) && mouseY > 190 && mouseY < 217){
    if(mouseIsPressed == true){
      shirt = shortsleeveArray[0];
    }

  }






//shortsleeve
if(mouseX > 702 && mouseX < (702 + 113)&& mouseY > 137 && mouseY < (137 + 113)){
  if(mouseIsPressed == true){
    shirt = shortsleeveArray[0];
  }

}

if(mouseX > 824 && mouseX < (824 + 113)&& mouseY > 137 && mouseY < (137 + 113)){
  if(mouseIsPressed == true){
    shirt = shortsleeveArray[1];
  }

}

if(mouseX > 946 && mouseX < (946 + 113)&& mouseY > 137 && mouseY < (137 + 113)){
  if(mouseIsPressed == true){
    shirt = shortsleeveArray[2];
  }

}
//tanks
  if(mouseX > 702 && mouseX < (702 + 113)&& mouseY > 258 && mouseY < (258 + 113)){
    if(mouseIsPressed == true){
      shirt = tankArray[0];
    }

  }

  if(mouseX > 824 && mouseX < (824 + 113)&& mouseY > 258 && mouseY < (258 + 113)){
    if(mouseIsPressed == true){
      shirt = tankArray[1];
    }

  }

  if(mouseX > 946 && mouseX < (946 + 113)&& mouseY > 258 && mouseY < (258 + 113)){
    if(mouseIsPressed == true){
      shirt = tankArray[2];
    }

  }
  //sweatshirts
  if(mouseX > 702 && mouseX < (702 + 113)&& mouseY > 380 && mouseY < (380 + 113)){
    if(mouseIsPressed == true){
      shirt = sweatshirtArray[0];
    }}

    if(mouseX > 824 && mouseX < (824 + 113)&& mouseY > 380 && mouseY < (380 + 113)){
      if(mouseIsPressed == true){
        shirt = sweatshirtArray[1];
      }}

      if(mouseX > 945 && mouseX < (945 + 113)&& mouseY > 380 && mouseY < (380 + 113)){
        if(mouseIsPressed == true){
          shirt = sweatshirtArray[2];
        }}

  //end of icons

}else if(page == 2){
  image(backgrounds[backgroundCounter], 0,0);
}

//outside of page 1 and 2 will work on all pages


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



// build bear

image(bearbodyArray[0],357,275, bearbodyArray[0].width/1.2, bearbodyArray[0].height/1.2);


//shirts

image(shirt, 391,301, shortsleeveArray[0].width/4.8, shortsleeveArray[0].height/4.8);


// image(shortsleeveArray[0], 391,301, shortsleeveArray[0].width/4.8, shortsleeveArray[0].height/4.8);
// image(shortsleeveArray[1], 360,273, shortsleeveArray[1].width/4.8, shortsleeveArray[1].height/4.8);
// image(shortsleeveArray[2], 391,301, shortsleeveArray[2].width/4.8, shortsleeveArray[2].height/4.8);
//
// image(tankArray[0], 391,301, tankArray[0].width/4.8, tankArray[0].height/4.8);
// image(tankArray[1], 391,301, tankArray[1].width/4.8, tankArray[1].height/4.8);
// image(tankArray[2], 391,301, tankArray[2].width/4.8, tankArray[2].height/4.8);
//
// image(sweatshirtArray[0], 391,301, sweatshirtArray[0].width/4.8, sweatshirtArray[0].height/4.8);
// image(sweatshirtArray[1], 391,301, sweatshirtArray[1].width/4.8, sweatshirtArray[1].height/4.8);
// image(sweatshirtArray[2], 391,301, sweatshirtArray[2].width/4.8, sweatshirtArray[2].height/4.8);



image(bearheadArray[0], 412,205, bearheadArray[0].width/2.5, bearheadArray[0].height/2.5);

//end build bear

//ellipse(700,260,20,20);

}

function mousePressed(){

  //shirts
  if(mouseX > 114 && mouseX < (171) && mouseY > 365 && mouseY < 408){
  page = 3;
  }

  // dress
  if(mouseX > 55 && mouseX < (55 +69) && mouseY > 624 && mouseY < 624+25){
    page = 3;}


//transport
  if(mouseX > 55 && mouseX < (55 +69) && mouseY > 654 && mouseY < 654+25){
    page = 2;
    backgroundCounter = backgroundCounter + 1;
    if(backgroundCounter == 2){
      backgroundCounter = 0;
    }
}

}
