var brushColor = 0;
var brushSize = 10;
var circleButtonx = 100;
var circleButtony = 450;
var circleButtonSize = 100;
function preload(){


}
function setup() {
  // put setup code here
createCanvas (500,500);
}

function draw() {
  // put drawing code here
fill(brushColor);
ellipse(mouseX, mouseY, brushSize, brushSize);


//interface
ellipse(circleButtonx,circleButtony,circleButtonSize,circleButtonSize);
fill(255);
text("clear", circleButtonx, circleButtony);
var circleDist = dist(circleButtonx, circleButtony, mouseX, mouseY);
console.log("circleDist: " + circleDist);

if(circleDist < circleButtonSize/2 && mouseIsPressed == true){
background(255);

}

}
