//Club Bear - Ashley Maass
//Click start, dress your bear by clicking on his pawphone and trying on his shirts, then transport him to different locations! Move your cursor over the top right red light and  the bottom middle to light up. CLick on the music buttons to play and pause the music! Lastly, have fun and click the club bear logo to play again!

var bearhead;
var bearbody;

var shortsleeve;
var shortsleeveX = 391;
var shortsleeveY = 301;

var shortsleevegrey;
var shortsleevegreyX = 391;
var shortsleevegreyY = 301;

var tank;
var tankX = 391;
var tankY = 301;

var sweatshirt;
var sweatshirtX = 391;
var sweatshirtY = 301;

var shirt;
var shirtX = 391;
var shirtY = 301;


var bearheadButton;
var bearbodyButton;

var shortsleeveButton;
var shortsleevegreyButton;
var tankButton;
var sweatshirtButton;

var currentImage = 0;




var bearheadArray = [];
var bearbodyArray = [];
var shortsleeveArray = [];
var shortsleevegreyArray = [];
var tankArray = [];
var sweatshirtArray = [];


var reset;


var shirtButton;

var page = 0;

var dressoptions;
var backgrounds = [];
var backgroundCounter = 0;



var bearbodyX = 357;
var bearbodyY = 275;

var bearheadX = 412;
var bearheadY = 205;

var clubsound;
var name = "";
var keycounter = 0;



function preload(){
mainpage = loadImage("assets/mainpage.jpg");
mainpagewith = loadImage("assets/mainpagewith.jpg");
bearheadArray[0] = loadImage("assets/bearhead.png");
bearbodyArray[0] = loadImage("assets/bearbody.png");
shortsleeveArray[0] = loadImage("assets/shortsleeve1.png");
shortsleevegreyArray[0] = loadImage("assets/shortsleeve2.png");
shortsleeveArray[2] = loadImage("assets/shortsleeve3.png");
tankArray[0] = loadImage("assets/tank1.png");
tankArray[1] = loadImage("assets/tank2.png");
tankArray[2] = loadImage("assets/tank3.png");
sweatshirtArray[0] = loadImage("assets/sweatshirt1.png");
sweatshirtArray[1] = loadImage("assets/sweatshirt2.png");
sweatshirtArray[2] = loadImage("assets/sweatshirt3.png");
backgrounds[0] = loadImage("assets/nightclub.jpg");
backgrounds[1] = loadImage("assets/university.jpg");
backgrounds[2] = loadImage("assets/coffeeshop.jpg");
dressoptions = loadImage ("assets/dressoptions.png")
startpage = loadImage ("assets/startpage.jpg")
empty = loadImage("assets/empty.png");
pawphonelight = loadImage("assets/pawphonelight.png");
pawphonelight2 = loadImage("assets/pawphonelight2.png");
coffeeshop = loadImage("assets/coffeeshop.jpg");
happyface = loadImage("assets/happyface.png");
clubsound = loadSound("assets/clubbearnightclubmusic.mp3");
}

function setup() {
  // put setup code here
createCanvas(1440,754);

// shortsleeve = empty;
// tank = empty;
// sweatshirt = empty;
shirt = empty;
shortsleeve = empty;
shortsleevegrey = empty;
tank = empty;
sweatshirt = empty;
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
//club bear startpage
if(page == 0){
  image(startpage, 0,0, startpage.width, startpage.height);
  bearhead = empty;
  bearbody = empty;
  }


//mainpage with (dress)
if(page == 4){
  image(mainpagewith, 0,0, mainpagewith.width, mainpagewith.height);
  text(name, 100,100);


  //shortsleeve
  if(mouseX > 702 && mouseX < (702 + 113)&& mouseY > 137 && mouseY < (137 + 113)){
    if(mouseIsPressed == true){
      shortsleeve = shortsleeveArray[0];
      sweatshirt = empty;
      tank = empty;
      shortsleevegrey = empty;
    }

  }

  if(mouseX > 824 && mouseX < (824 + 113)&& mouseY > 137 && mouseY < (137 + 113)){
    if(mouseIsPressed == true){
      shortsleevegrey = shortsleevegreyArray[0];
      sweatshirt = empty;
      shortsleeve = empty;
      tank = empty;
    }

  }

  if(mouseX > 946 && mouseX < (946 + 113)&& mouseY > 137 && mouseY < (137 + 113)){
    if(mouseIsPressed == true){
      shortsleeve = shortsleeveArray[2];
      sweatshirt = empty;
      tank = empty;
      shortsleevegrey = empty;
    }

  }
  //tank
    if(mouseX > 702 && mouseX < (702 + 113)&& mouseY > 258 && mouseY < (258 + 113)){
      if(mouseIsPressed == true){
        tank = tankArray[0];
        sweatshirt = empty;
        shortsleeve = empty;
        shortsleevegrey = empty;
      }

    }

    if(mouseX > 824 && mouseX < (824 + 113)&& mouseY > 258 && mouseY < (258 + 113)){
      if(mouseIsPressed == true){
        tank = tankArray[1];
        sweatshirt = empty;
        shortsleeve = empty;
        shortsleevegrey = empty;
      }

    }

    if(mouseX > 946 && mouseX < (946 + 113)&& mouseY > 258 && mouseY < (258 + 113)){
      if(mouseIsPressed == true){
        tank = tankArray[2];
        sweatshirt = empty;
        shortsleeve = empty;
        shortsleevegrey = empty;

      }

    }
    //sweatshirts
    if(mouseX > 702 && mouseX < (702 + 113)&& mouseY > 380 && mouseY < (380 + 113)){
      if(mouseIsPressed == true){
        sweatshirt = sweatshirtArray[0];
        tank = empty;
        shortsleeve = empty;
        shortsleevegrey = empty;

      }}

      if(mouseX > 824 && mouseX < (824 + 113)&& mouseY > 380 && mouseY < (380 + 113)){
        if(mouseIsPressed == true){
          sweatshirt = sweatshirtArray[1];
          tank = empty;
          shortsleeve = empty;
          shortsleevegrey = empty;
        }}

        if(mouseX > 945 && mouseX < (945 + 113)&& mouseY > 380 && mouseY < (380 + 113)){
          if(mouseIsPressed == true){
            sweatshirt = sweatshirtArray[2];
            tank = empty;
            shortsleeve = empty;
            shortsleevegrey = empty;
          }}



}

//coffeeshop
if(page == 3){
  image(coffeeshop, 0,0, coffeeshop.width, coffeeshop.height);}

//dresspage
if(page == 1){
  image(mainpage, 0,0, mainpage.width, mainpage.height);
  if(mouseX > 695 && mouseX < (802) && mouseY > 190 && mouseY < 217){
    if(mouseIsPressed == true){
      shirt = shortsleeveArray[0];
    }

  }




  //end of icons

}else if(page == 2){
  image(backgrounds[backgroundCounter], 0,0);
}

//outside of page 1 and 2 will work on all pages


//pawphonelights

if(mouseX > 102 && mouseX < (102 + 23)&& mouseY > 560 && mouseY < (560 + 26)){

image(pawphonelight, 102,560, pawphonelight.width, pawphonelight.height);
  }

  if(mouseX > 79 && mouseX < (79 + 35)&& mouseY > 676 && mouseY < (676 + 35)){

  image(pawphonelight2, 79,676, pawphonelight2.width, pawphonelight2.height);
    }


//bear smile
//if(mouseX > 79 && mouseX < (79 + 35)&& mouseY > 676 && mouseY < (676 + 35)){

//image(happyface, 200,676, happyface.width, happyface.height);}

// build bear

if(page != 0){
  image(bearbodyArray[0],bearbodyX,bearbodyY, bearbodyArray[0].width/1.2, bearbodyArray[0].height/1.2);
//  image(shirt, shirtX,shirtY, shirt.width/4.8, shirt.height/4.8);
  image(shortsleeve, shortsleeveX,shortsleeveY, shortsleeve.width/4.8, shortsleeve.height/4.8);
  image(shortsleevegrey, shortsleevegreyX,shortsleevegreyY, shortsleevegrey.width/4.8, shortsleevegrey.height/4.8);
  image(tank, tankX,tankY, tank.width/4.8, tank.height/4.8);
  image(sweatshirt, sweatshirtX,sweatshirtY, sweatshirt.width/4.8, sweatshirt.height/4.8);
  image(bearheadArray[0], bearheadX,bearheadY, bearheadArray[0].width/2.5, bearheadArray[0].height/2.5);
}
//adjust shirts on blank blue page
if(page == 1){
//   bearbodyX = 457;
//   bearbodyY = 275;

  // bearheadX = 512;
  // bearheadY = 205;

  // shirtX = 500;
  // shirtY = 301;

  // shortsleeveX = 391;
  // shortsleeveY = 301;


//   shortsleevegreyX = 391;
//   shortsleevegreyY = 301;

//   tankX = 391;
//   tankY = 301;

//   sweatshirtX = 391;
//   sweatshirtY = 301;


   //adjust shirtX and shirtY BACKGROUNDS
}else if(page == 2){
  bearbodyX = 527;
  bearbodyY = 430;

  bearheadX = 582;
  bearheadY = 360;

//  shirtX = 500;
//  shirtY = 301;

  shortsleeveX = 561.5;
  shortsleeveY = 454;

  shortsleevegreyX = 531;
  shortsleevegreyY = 425;

  tankX = 563;
  tankY = 456;

  sweatshirtX = 547;
  sweatshirtY = 459;

//adjust shirts on mainpage DRESS PAGE
}else if(page == 4){
  bearbodyX = 357;
  bearbodyY = 275;

  bearheadX = 412;
  bearheadY = 205;

//  shirtX = 391;
//  shirtY = 301;

  shortsleeveX = 391.5;
  shortsleeveY = 299;

  shortsleevegreyX = 361;
  shortsleevegreyY = 270;

  tankX = 393;
  tankY = 300;

  sweatshirtX = 376;
  sweatshirtY = 303;
}



//shirts



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




//end build bear

//ellipse(1330,55,20,20);

}



function mousePressed(){

  //clicking start

  //    if(mouseIsPressed == true)
    //  {image(mainpage, 0,0, mainpage.width, mainpage.height);}

  //click logo back to start page
  if(page == 0){
    if(mouseX > 609 && mouseX < (609+203) && mouseY > 478 && mouseY < (478+84))
    { page = 1;}
  }
    if(mouseX > 35 && mouseX < (35+156) && mouseY > 38 && mouseY < (38+65))
    { page = 0;}

  //shirts
  if(mouseX > 114 && mouseX < (171) && mouseY > 365 && mouseY < 408){
  page = 4;
  }

  // dress
  if(mouseX > 55 && mouseX < (55 +69) && mouseY > 624 && mouseY < 624+30){
    page = 4;}


//transport
  if(mouseX > 55 && mouseX < (55 +69) && mouseY > 654 && mouseY < 654+25){
    page = 2;
    backgroundCounter = backgroundCounter + 1;
    if(backgroundCounter == 3){
      backgroundCounter = 0;
    }
}

// x out dress
if(page == 4){if(mouseX > 616 && mouseX < (616 +43) && mouseY > 119 && mouseY < 119+46){
  page = 1;}}
//hitzone on icons




if(clubsound.isPlaying() != true){

  clubsound.play(mouseX > 1330 && mouseX < (1330 +21) && mouseY > 55 && mouseY < (55+22));

}
if(clubsound.isPlaying() != true){
  clubsound.stop(mouseX > 1362 && mouseX < (1362 +32) && mouseY > 48 && mouseY < (48+32));


}
}



function keyPressed(){


  if(name.length < 20){


      if(keyCode != BACKSPACE){
          name += key;
          font('Arial Size 30',346,132);



        //  text weight 30 pt bold
      }

  }

  if(keyCode == BACKSPACE){
    name = name.slice(0, name.length-1);
  }
}
