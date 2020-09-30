//let canv;
let h2;
let x = 75;
let y = 75;
let incX = 5;
let para;

function setup() {
  //createCanvas(750, 422);
  // canv = createCanvas(200, 200);
  // canv.position(500, 50);
  h2 =  createElement('h2','Waiting ...');
  h2.position(50, 150);
}

function mousePressed() {
    //createP('My favorite color is purple.');
    h2.html("Now I'll show you my favorite numbers");
    para = createP('My favorite number is   ' + random(1, 10));
  }

// function draw() {
//   //clear();
//   background(0, 255, 128);

//   fill(128, 0, 128);  // purple
//   rect(x, y, 50, 50);
//   //h2.position(x, y);
//   //x += random (-incX, incX);
// }