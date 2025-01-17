let img1;
let img2;
let img3;
let running = false;

function preload () {
  img1 = loadImage ('images/elgritoface.png');
  img2 = loadImage ('images/elgritotriangulos.png');
  img3 = loadImage ('images/elgritocirculos.png');
}

function setup() {
  createCanvas(300, 450);
  pixelDensity (1);
  img1.resize (300,0);
  img2.resize (300,0);
  img3.resize (300,0);
  frameRate (180);
  background (0);
  noLoop();
}

function draw() {

  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  
  for (let y = 0; y < img1.height; y++){
    for (let x = 0; x < img1.width; x++){
      let index = (x + y * img1.width)*4;
        img1.pixels [index] = random (255) // red value
        img1.pixels [index+1] = random (100) // green value
        img1.pixels [index+2] = random (230) // blue value  
        let mX = x + random (-2, 2);
        let mY = y + random (-4,4);
        mX= constrain (mX, 0, img1.width);
        mY= constrain (mY, 0, img1.height);
        let newIndex = (mX + mY * img1.width) * 4;
        img1.pixels [newIndex] = img1.pixels [index];
        img1.pixels [newIndex + 1] = img1.pixels [index+1];
        img1.pixels [newIndex + 2] = img1.pixels [index +2];
    }
  }

  for (let y = 0; y < img2.height; y++){
    for (let x = 0; x < img2.width; x++){
      let index = (x + y * img2.width)*4;
        img2.pixels [index+0] = random (25) // red value
        img2.pixels [index+1] = random (40) // green value
        img2.pixels [index+2] = random (230) // blue value
        let mX = x + random (-1, 1);
        let mY = y + random (-2,2);
        mX= constrain (mX, 0, img2.width);
        mY= constrain (mY, 0, img2.height);
        let newIndex = (mX + mY * img2.width) * 4;
        img2.pixels [newIndex] = img2.pixels [index];
        img2.pixels [newIndex + 1] = img2.pixels [index+1];
        img2.pixels [newIndex + 2] = img2.pixels [index +2];
        
    }
  }
  
  for (let y = 0; y < img3.height; y++){
    for (let x = 0; x < img3.width; x++){
      let index = (x + y * img3.width)*4;
        img3.pixels [index+0] = random (205) // red value
        img3.pixels [index+1] = random (100) // green value
        img3.pixels [index+2] = random (3) // blue value
        let mX = x + random (-4, 4);
        let mY = y + random (-8,8);
        mX= constrain (mX, 0, img3.width);
        mY= constrain (mY, 0, img3.height);
        let newIndex = (mX + mY * img3.width) * 4;
        img3.pixels [newIndex] = img3.pixels [index];
        img3.pixels [newIndex + 1] = img3.pixels [index+1];
        img3.pixels [newIndex + 2] = img3.pixels [index +2];
    }
  }

  let fx = constrain (random (img1.width), 0, img1.width);
  let fy = constrain (random (img1.height), 0, img1.height);
  let fz = img1.get (int(fx),int(fy));
  fill (fz);
  noStroke ();
  triangle(fx, fy, fx+12, fy + 48, fx+14, fy);

  let tx = constrain (random (img2.width), 0, img2.width);
  let ty = constrain (random (img2.height), 0, img2.height);
  let tz = img2.get (int(tx),int(ty));
  fill (tz);
  noStroke ();
  triangle(tx, ty, tx+100, ty + 16, tx+32, ty);

  let cx = constrain (random (img3.width), 0, img3.width);
  let cy = constrain (random (img3.height), 0, img3.height);
  let cz = img3.get (int(cx),int(cy));
  fill (cz);
  noStroke ();
  triangle(cx, cy, cx+32, cy + 64, cx+30, cy);

  img1.updatePixels ();
  img2.updatePixels ();
  img3.updatePixels ();

  image (img1, 0, 0);
  image (img2, 0, 0);
  image (img3, 0, 0);

  fill(255, 255, 255);
  rect(0, height - 30, width, 30); 
  fill(0); 
  text('Click to run. Double click to pause. Enter to re start', 20, height - 20);
  text('The Face Scream, It also cries by AFLS', 80, height - 8);
}

function mouseClicked (){
  running = true;
  loop ();}

  function doubleClicked (){
    running = false;
    noLoop ();}

    function keyPressed () {
      if (keyCode === 13) {
        background (0);
        img1.loadPixels ();
        img2.loadPixels ();
        img3.loadPixels ();
        running = true;
        loop();
 }
}