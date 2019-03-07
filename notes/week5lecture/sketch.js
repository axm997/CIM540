var showButton, hideButton;


var showingOrHiding = 0;

function setup() {
  // put setup code here
  createCanvas(500,500);


  showButton = createButton("show");
  showButton.position(10,40);
  showButton.mousePressed(function(){
  //set the action, what do you want the mouse pressed to do?
  //ellipse()
  //fill(0);


  showingOrHiding = 1;
  });

  hideButton = createButton("hide");
  hideButton.position(100,40);
  hideButton.mousePressed(function(){
  //set the action, what do you want the mouse pressed to do?
  showingOrHiding = 0;
  });



}

function draw() {
  // put drawing code here
background(255);
if(showingOrHiding == 1){
fill(0);
ellipse(mouseX, mouseY, 10, 10);

}

if(showingOrHiding == 0){

}


}
