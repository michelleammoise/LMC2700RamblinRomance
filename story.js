// initialize vars
// initialize variables
let sceneCount;
let startBtn;
let nextBtn;
let neuBtn;
let boyBtn;
let girlBtn;

let oliviaScene;
// olivia buttons
let olivia11;
let olivia12;
let olivia13;

// load assets
function preload() {
    fancy = loadFont("font3.otf")

    schoolPhoto = loadImage("./assets/techTower.jpeg");
    culcStairs = loadImage("./assets/culcStairs.png");

    boyChar = loadImage("./assets/3dboy.png");
    girlChar = loadImage("./assets/3dgirl.png");
    neuChar = loadImage("./assets/3djordan.png");
}

// setup
function setup() {
    getAudioContext().suspend();
    rectMode(CENTER);
    createCanvas(1000, 600);
    sceneCount = 1;
    oliviaScene = 0;

    buttonSetup();
}

function buttonSetup() {
    startBtn = createButton("START");
    startBtn.position(width / 2, height / 2);
    startBtn.mousePressed(() => {
        startBtn.remove();
        sceneCount = 2;
    })

    nextBtn = createButton("Next");
    nextBtn.hide();
    nextBtn.mousePressed(() => {
        nextBtn.remove();
        sceneCount = 3;
    })

    neuBtn = createButton("Non-binary");
    neuBtn.hide();
    neuBtn.mousePressed(() => {
        // remove buttons
        neuBtn.remove();
        boyBtn.remove();
        girlBtn.remove();
        sceneCount = 4;
    });

    boyBtn = createButton("Boy");
    boyBtn.hide();
    boyBtn.mousePressed(() => {
        // remove buttons
        neuBtn.remove();
        boyBtn.remove();
        girlBtn.remove();
        sceneCount = 4;
    });

    girlBtn = createButton("Girl");
    girlBtn.hide();
    girlBtn.mousePressed(() => {
        // remove buttons
        neuBtn.remove();
        boyBtn.remove();
        girlBtn.remove();
        sceneCount = 5;
    });

    olivia11 = createButton("Approach Her After Class and Ask for Instagram");
    olivia11.hide()
    // olivia11.mousePressed(() => {
    //     // remove buttons
    //     olivia11.remove();

    // });
    olivia12 = createButton("Join the Aero-Philosophy Symposium Meeting and Get to Know Her");
    olivia12.hide()
    olivia13 = createButton("Invite Her to a Nerdy Worms Club Event and Request Her Instagram");
    olivia13.hide()
}

// draw scenes
function draw() {
    angleMode(DEGREES);
    // 	userStartAudio();
    playGame(sceneCount);
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
    background(0); //black background
    fill(255); // text color
    textAlign(LEFT);
    textFont('Courier New', 20);
    text("Buzz:");
    text("Well, well, well, look who wandered into the realm of intellectual misfortune.", 10, 50);
    text("Spoiler alert: it's you. Congratulations on your life choices.", 10, 100);
    text("Buckle up, my friend, for you're about to witness a GT love story so tragic,", 10, 150);
    text("Cupid himself would probably cry.", 10, 200);

    text("Your Mission (if you choose to accept it):", 10, 300);
    text("1. Get a date for the Chi Phi Frat party this Friday.", 10, 350);
    text("2. Pick a student to pursue.", 10, 400);
    text("3. Each day you will be given a choice, your decision affects your stats.", 10, 450);
    text("4. The day of the party, your choices will determine your love fate.", 10, 500);

    nextBtn.position(10, 550);
    nextBtn.show();
}

function chooseChar() {
    background(0); // black background
    fill(255); // text color
    textAlign(CENTER);
    textFont('Courier New', 20);
    text("Select character", width / 2, 50);
    text("hi", 400, 100);

    boyChar.resize(74.05, 200);
    girlChar.resize(74.05, 200);
    neuChar.resize(74.05, 200);

    image(boyChar, 275, 150);
    image(girlChar, 475, 150);
    image(neuChar, 675, 150);

    // boyBtn = createButton("Boy");
    boyBtn.position(300, 450);
    boyBtn.show();
    // girlBtn = createButton("Girl");
    girlBtn.position(500, 450);
    girlBtn.show();
    // neuBtn = createButton("Non-binary");
    neuBtn.position(700, 450);
    neuBtn.show();
}

function startScene() {
    background(culcStairs);
    textBox(0);
}
// ^ insert all scenes above this comment ^ //


function playGame(sceneCount) {
    switch (sceneCount) {
        case 1:
            titleScreen();
            break;
        case 2:
            information();
            break;
        case 3:
            chooseChar();
            break;
        case 4:
            startScene();
            break;
        case 5:
            oliviaRoute();
            break;
        default:
            break;
    }
}

function oliviaRoute() {
    // choice 1
    // oliviaScene = 0;
    switch (oliviaScene) {
        case 0:
            background(schoolPhoto);
            textBox(1);


            olivia11.position(200, 350);
            olivia11.show();
            // girlBtn = createButton("Girl");
            olivia12.position(400, 350);
            olivia12.show();
            // neuBtn = createButton("Non-binary");
            olivia13.position(600, 350);
            olivia13.show();

            olivia11.mousePressed(() => {
                // remove buttons
                olivia11.remove();
                olivia12.remove();
                olivia13.remove();
                oliviaScene = 1;
            });
        case 1:
            textBox(1);
    }
    textBox(1);
}

function textBox(chara) {
    rectMode(CORNER);
    fill('orange'); // everything after this will be filled
    stroke(178, 58, 30); // color to draw lines and borders around shapes
    strokeWeight(3);
    // x, y, width, height, (opt radii)
    rect(20, height / 1.5, width - 40, height / 3.25);
    if (chara == 0) {
        fill('pink');
        stroke(178, 59, 30);
        rect(40, height / 1.45, width - 80, height / 3.75);

        fill(0);
        textSize(20);
        noStroke();
        textAlign(CENTER, CENTER);
        text("You: ", width / 15, height / 1.35);
        stroke(253, 187, 199);
        // nextButton
    }

    if (chara == 1) {
        fill('blue');
        stroke(178, 59, 30);
        rect(40, height / 1.45, width - 80, height / 3.75);

        fill(0);
        textSize(20);
        noStroke();
        textAlign(CENTER, CENTER);
        text("You: ", width / 15, height / 1.35);
        stroke(253, 187, 199);
        // nextButton
    }
}

function optButtons() {
    // need to implement buttons onClick
}

// need buttons for user input //
