//var currentWidth = width;
//var currentHeight = height;

//Global variables are available everywhere
var backgroundColor="white";
var eyePosX = 0;
var eyePosY = 0;
var instruction = "hello";

function setup() {
  // put setup code here
  createCanvas(500,500);
  eyePosX = width/2;
  eyePosY = 100;
}
function draw() {
  // put drawing code here
  background(backgroundColor);
  text(instruction, 20,20);
  line(0,height/2,width,height/2);
  eyePosX = mouseX;
  eyePosX = mouseY;
ellipse(width/2,height/2, 10, 10);
ellipse(mouseX,mouseY,10,10);
point(eyePosX,eyePosY);
ellipse(eyePosX -
eyeOffset, eyePosY, eyeSize, eyeSize);
ellipse(eyePosX + eyeOffset, eyePosY, eyeSize,eyeSize);

if (mouseY > height/2) {
  //run this code
  console.log("Below line");
angleMode(DEGREES);
arc(eyePosX, eyePosY + eyeOffset, 100,100,100,0);
}

if (mouseY > height/2) {
  //run this code
  console.log("About line");
angleMode(DEGREES);
arc(eyePosX, eyePosY + eyeOffset, 100,100,0,100);
}

//end of draw loop
function mousePressed(){
backgroundColor = blue;

}
function mouseReleased(){
  backgroundColor = "white";
}
function keyPressed(){
  console.log("letter: " + key + " keycode: " + keyCode);
}

if(key == 'a'){
  console.log("the letter is a");
} else if (key == 'b'){
  backgroundColor = "blue";
} else if (key == "r") {
backgroundColor = "red";
} else {backgroundColor = "green";

}

}

if (keyCode == 65) {
console.log("the keycode is a");
}










}
