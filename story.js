// initialize vars
let sceneCount;
let startBtn;
let neuBtn;

// load assets
function preload() {
    fancy = loadFont("font3.otf")

    schoolPhoto = loadImage("./assets/georgiatechphoto.jpg");
    culcStairs = loadImage("./assets/culcStairs.png");
}

// setup
function setup() {
	getAudioContext().suspend();
	rectMode(CENTER);
	createCanvas(screen.width, screen.height);
    sceneCount = 1;

    startBtn = createButton("Start Button");
    startBtn.position(canvas.width / 2, canvas.height / 2);
    startBtn.mousePressed(() => {
        startBtn.remove();
        sceneCount = 2;
    })

    buttonSetup();
}

function buttonSetup() {
    neuBtn = createButton("Non-binary");
    neuBtn.hide();
    neuBtn.mousePressed(() => {
        // remove buttons
        neuBtn.remove();
        boyBtn.remove();
        girlBtn.remove();
        sceneCount = 3;
    });

    boyBtn = createButton("Boy");
    boyBtn.hide();

    girlBtn = createButton("Girl");
    girlBtn.hide();
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
	textFont('Courier New', 50);
	background(schoolPhoto);
	textAlign(CENTER);
	text("Ramblin' Romance", width / 2, 200);
	noStroke();


    /*
    // for start "button" design
    fill(252, 174, 200);
	stroke(255);
	square(width / 2, height / 2, 100, 5);
	textFont('Courier New', 20);
	textAlign(CENTER, CENTER);
	fill(0);
	text("START", width / 2, height / 2);
	noStroke();
    */
}

function information() {
    background(0); // black background
    fill(255); // text color
    textAlign(CENTER);
    textFont('Courier New', 20);
    text("Select character", width/2, 50);

    // boyBtn = createButton("Boy");
    boyBtn.position(650, 550);
    boyBtn.show();
    // girlBtn = createButton("Girl");
    girlBtn.position(700, 550);
    girlBtn.show();
    // neuBtn = createButton("Non-binary");
    neuBtn.position(750, 550);
    neuBtn.show();
}

function startScene() {
    background(culcStairs);
}
// ^ insert all scenes above this comment ^ //


function storyTime(sceneCount) {
    switch(sceneCount) {
        case 1:
            titleScreen();
            break;
        case 2:
            information();
            break;
        case 3:
            startScene();
            break;
        default:
            break;
    }
}

function textBox(chara) {

}

function optButtons() {
    // need to implement buttons onClick
}

// need buttons for user input //