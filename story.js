// initialize vars
let sceneCount;

// load assets
function preload() {
    fancy = loadFont("font3.otf")

    schoolPhoto = loadImage("./assets/georgiatechphoto.jpg");
}

// setup
function setup() {
	getAudioContext().suspend();
	rectMode(CENTER);
	createCanvas(screen.width, screen.height);

    sceneCount = 1;
}

// draw scenes
function draw() {
    angleMode(DEGREES);
    // 	userStartAudio();
    storyTime(sceneCount);
    textAlign(LEFT);
	textSize(15);
}

// functions for scenes below //

function titleScreen() {
    // for title text
    fill(252, 174, 200);
	stroke(120, 34, 62);
	strokeWeight(4);
	textFont('Courier New', 70);
	background(schoolPhoto);
	textAlign(CENTER);
	text("Ramblin' Romance", width / 2, 200);
	noStroke();

    fill(252, 174, 200);
	stroke(255);
	square(width / 2, height / 2, 100, 5);
	textFont('Courier New', 20);
	textAlign(CENTER, CENTER);
	fill(0);
	text("START", width / 2, height / 2);
	noStroke();
}


function storyTime(sceneCount) {
    if (sceneCount == 1) {
        titleScreen();
    }
}

function textBox(chara) {

}

function optButtons() {

}

// need buttons for user input //