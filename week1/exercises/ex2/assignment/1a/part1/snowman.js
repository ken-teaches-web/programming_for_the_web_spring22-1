let grid = undefined;
let stroke1 = prompt("enter a basic color in lowercase", "grey");
let stroke2 = prompt("enter another basic color in lowercase", "purple");
function setup() {
    createCanvas(1000, 800);
    //background("#ccc");
    //grid = loadImage("Images/100px_grid.png");
}
function draw() {
    //background(grid);
    //quad(0, 0, 0, 0, 0, 0, 0, 0);
    //snowman legs
    fill("#f1f1f1");
    stroke(stroke1);
    //left leg
    ellipse(350, 650, 200);
    //right leg
    ellipse(650, 650, 200);
    //body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    //hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    //mouth
    noFill();
    strokeWeight(10);
    arc(500, 200, 80, 80, 0, HALF_PI);
}