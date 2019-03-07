var circleButton;
var squareButton;

var currentImage = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);

  circleButton = createButton("hi circle");
  circleButton.position(65,45);
  circleButton.mousePressed(function(){
  currentImage = 0;
  });

  squareButton = createButton("hello square");
  squareButton.position(160,45);
  squareButton.mousePressed(function(){
  currentImage = 1;
  });
}

function draw() {
  // put drawing code here
ellipse(60,60,60,60);



}
