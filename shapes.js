function setup() {
  createCanvas(windowWidth, windowHeight);
background(150,19,17);

  strokeWeight(7);
  fill(150,17,54);
  triangle(80, 150, 120, 50, 200, 140);
  strokeWeight(10);
  fill(150,17,54);
  rect(100, 200, 150, 80);
  strokeWeight(10);
  fill(150,17,54);
  quad(120, 230, 180, 70, 190, 210, 70, 190);
  strokeWeight(10);
  fill(150,17,54);
  ellipse(90, 90, 90, 90);

}
  function draw(){
    ellipse(mouseX,mouseY,50,50);  
  
}
