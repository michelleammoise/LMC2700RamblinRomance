// initialize vars
// initialize variables
let sceneCount;
let startBtn;
let nextBtn;
let neuBtn;
let boyBtn;
let girlBtn;

let oliviaScene;
let oliiaText;
// olivia buttons
let olivia11;
let olivia12;
let olivia13;


let chadScene;
let okChad;
let chad11;
let chad12;
let chad13;

let chad111;
let chad112;

let olivia21;
let olivia22;
let olivia23;

// non-binary
let neuScene;
let neu11;
let neu12;
let neu13;
let neu21;
let neu22;
let neu23;
let neu31;
let neu32;
let neu33;
let nextBtn2;

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
    chadScene = 1;
    neuScene = 0;

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

    nextBtn2 = createButton("Next");
    nextBtn2.hide();

    neuBtn = createButton("Non-binary");
    neuBtn.hide();
    neuBtn.mousePressed(() => {
        // remove buttons
        neuBtn.remove();
        boyBtn.remove();
        girlBtn.remove();
        sceneCount = 7;
    });

    boyBtn = createButton("Boy");
    boyBtn.hide();
    boyBtn.mousePressed(() => {
        // remove buttons
        neuBtn.remove();
        boyBtn.remove();
        girlBtn.remove();
        sceneCount = 6; // chad route
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

    chadButtons();

    olivia11 = createButton("Approach Her After Class and Ask for Instagram");
    olivia11.hide()
    olivia12 = createButton("Join the Aero-Philosophy Symposium Meeting and Get to Know Her");
    olivia12.hide()
    olivia13 = createButton("Invite Her to a Nerdy Worms Club Event and Request Her Instagram");
    olivia13.hide()

    olivia21 = createButton("Collaborate on a Calculus Assignment");
    olivia21.hide()
    olivia22 = createButton("Attend the Hangar Session Together");
    olivia22.hide()
    olivia23 = createButton("Ask Her Out for Coffee");
    olivia23.hide()

    neu11 = createButton("Approach Them After Class and Ask for Instagram");
    neu11.hide()
    neu12 = createButton("Attend a Brainwaves Society Event and Get to Know Them");
    neu12.hide()
    neu13 = createButton("Join them at a Brainwaves Event and Request Them Instagram");
    neu13.hide()

    neu21 = createButton("Collaborate on a Neuroscience Assignment");
    neu21.hide()
    neu22 = createButton("Invite Them to a Science Seminar");
    neu22.hide()
    neu23 = createButton("Attend a Consciousness Discussion With Them");
    neu23.hide()

    neu31 = createButton("Participate in a Nueroscience workshop");
    neu31.hide()
    neu32 = createButton("Join a Healthcare Related Volunteer Oppurtunity");
    neu32.hide()
    neu33 = createButton("Ask for Help Understanding a Nueroscience Related Concept");
    neu33.hide()
}

function chadButtons() {
    okChad = createButton("Ok");
    okChad.hide();
    okChad.position(width - 100, height - 50);
    chad11 = createButton("Approach him now");
    chad11.hide();
    chad12 = createButton("Meet him at a club meeting later today");
    chad12.hide();
    chad13 = createButton("Look at him cutely");
    chad13.hide();

    chad111 = createButton("How did you feel about chapter 14 of the reading today?");
    chad112 = createButton("Hi! I heard you're interested in startups. "
    + "I have some cool ideas I'd wanna share.");
    chad111.hide();
    chad112.hide();

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
    textBox(0, "stairs");
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
        case 6:
            chadRoute();
            break;
        case 7:
            neuRoute();
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
            textBox(1, "After a friendly conversation about the calculus class or another shared interest, express your interest in continuing the conversation. You could say something like, \"I've really enjoyed talking with you. Do you mind if I add you on Instagram? It would be great to stay in touch.\"");


            olivia11.position(200, 200);
            olivia11.show();
            olivia11.size(100, 100);

            olivia12.position(400, 200);
            olivia12.show();
            olivia12.size(100, 100);

            olivia13.position(600, 200);
            olivia13.show();
            olivia13.size(100, 100);


            olivia11.mousePressed(() => {
                // remove buttons
                olivia11.remove();
                olivia12.remove();
                olivia13.remove();
                oliviaScene = 1;
            });
            olivia12.mousePressed(() => {
                // remove buttons
                olivia11.remove();
                olivia12.remove();
                olivia13.remove();
                oliviaScene = 1;
            });
            olivia13.mousePressed(() => {
                // remove buttons
                olivia11.remove();
                olivia12.remove();
                olivia13.remove();
                oliviaScene = 1;
            });
            break;
        case 1:
            textBox(1, "ahaha");
            break;
    }
    // textBox(1, "whhat is this bro");
}

function chadRoute() {
    startBtn.hide();
    let x = width / 2 - 150;
    let opt1y = 100;
    let opt2y = 150;
    let opt3y = 200;
    switch(chadScene) {
        case 0:
            // exposition for chad
            x = width / 1.75;
            background(0);
            fill(255);
            textAlign(CENTER);
            textFont('Courier New', 20);
            text("You chose to romance Chad Smith!", width / 1.75, 50);
            text("Chad Smith is a third year business major at Georgia Tech.", x, 100);
            text("When he’s not hanging out with his brothers at Delta Sigma, you can", x, 125);
            text("find him participating in the Entrepreneurial Ventures Alliance,", x, 150);
            text("working out at the CRC, or sitting in your LMC class,", x, 175);
            text("just waiting for you to talk to him!", x, 200);
            boyChar.resize(74.05, 200);
            image(boyChar, x - 80, 300);
            break;
        case 1:
            background(culcStairs);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0,"Day 1, Monday: As you leave your LMC class, " 
            + "you see Chad Smith walking in your direction. "
            + "You guys have talked a bit in the past, but "
            + "are still unfamiliar with each other. What "
            + "do you do?");

            chad11.show();
            chad11.position(x, opt1y);
            chad11.mousePressed(() => {
                chad11.hide();
                chad12.hide();
                chad13.hide();
                chadScene = 1100;
            });

            chad12.show();
            chad12.position(x, opt2y);
            chad12.mousePressed(() => {
                chad11.hide();
                chad12.hide();
                chad13.hide();
                chadScene = 1200;
            });

            chad13.show();
            chad13.position(x, opt3y);
            chad13.mousePressed(() => {
                chad11.hide();
                chad12.hide();
                chad13.hide();
                chadScene = 1300;
            });
            break;
        case 2:
            background(culcStairs); // change background to ...
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0,"Day 2, Tuesday:  ");
            break;
        case 1100:
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You walk up to him. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1110;
            });
            break;
        case 1110:
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(2, "Chad: Hey! You're [name], right? I'm Chad. "
            + "You sounded really smart in lecture today. What's up?");
            chad111.show();
            chad111.position(x, opt1y);
            chad111.mousePressed(() => {
                chad111.hide();
                chad112.hide();
                chadScene = 1111;
            });
            chad112.show();
            chad112.position(x, opt2y);
            chad112.mousePressed(() => {
                chad111.hide();
                chad112.hide();
                chadScene = 1121;
            });
            break;
        case 1111: {
            // ask lecture material, not impressed
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(2, "Chad: Oh, it was cool, I guess. I didn't actually pay attention. "
            + "Anyways, I have to go. I'll see you later, I guess.");
            okChad.show();
            okChad.mousePressed(() => {
                chadScene = 1112;
                okChad.hide();
            });
            break;
        }
        case 1112:
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "He walks away. It seems Chad isn't a fan of academics. "
            + "You spend the rest of the day finishing your classes as usual. "
            + "That night, you found Chad's Instagram account on your feed "
            + "and followed him.");
            // increase smartness, decrease charisma
            
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2;
            });
            break;
        case 1121:
            // textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(2, "Chad: I'd be down to talk! I gotta go to class, but "
            + "you should totally text me later. Can I send you my IG handle?");
            // increase charisma/attractiveness

            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1122;
            })
            break;
        case 1122:
            textBox(2);
            fill(0);
            textAlign(LEFT);
            textFont("Courier New", 20);
            textBox(0, "You received Chad's Instagram account! "
            + "Later that day, you guys texted for hours about everything from "
            + "business, hobbies, and funny stories.");

            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2;
            })
            break;
        case 1200:
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Chad has always been outspoken about being part of the Entrepreneurial Alliance Club. "
            + "You decide to wait until a club meeting today to talk to Chad, knowing he will be there.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1210;
            });
            break;
        case 1210:
            background(culcStairs); // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0,"You arrive just in time for the club meeting. Unsurprisingly, Chad is already "
            + "sitting down. You sit next to him.");

            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1211;
            });
            break;
        case 1211:
            break;
        default:
    }
}

function neuRoute() {
    //neuScene = 0;
    switch (neuScene) {
        case 0:
            background(culcStairs);
            textBox(1, "you picked Jordan Song! They are a 4th year Neuroscience major and can often be found pondering the intricate mysteries of the brain.");
            nextBtn2.position(20, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.remove();
                neuScene = 1;
            })
        case 1:
            background(culcStairs);
            textBox(1, "After a friendly conversation about the nueroscience lecture, express your interest in continuing the conversation. You could say something like, \"I've really enjoyed talking with you. Do you mind if I add you on Instagram? It would be great to stay in touch.\"")
            
            neu11.position(200, 200);
            neu11.show();
            neu11.size(100, 100);

            neu12.position(400, 200);
            neu12.show();
            neu12.size(100, 100);

            neu13.position(600, 200);
            neu13.show();
            neu13.size(100, 100);


            neu11.mousePressed(() => {
                // remove buttons
                neu11.remove();
                neu12.remove();
                neu13.remove();
                neuScene = 2;
            });
            neu12.mousePressed(() => {
                // remove buttons
                neu11.remove();
                neu12.remove();
                neu13.remove();
                neuScene = 2;
            });
            neu13.mousePressed(() => {
                // remove buttons
                neu11.remove();
                neu12.remove();
                neu13.remove();
                neuScene = 2;
            });
            break;
        case 2:
            background(culcStairs);
            textBox(1, "ahaha");

            neu21.position(200, 200);
            neu21.show();
            neu21.size(100, 100);

            neu22.position(400, 200);
            neu22.show();
            neu22.size(100, 100);

            neu23.position(600, 200);
            neu23.show();
            neu23.size(100, 100);


            neu21.mousePressed(() => {
                // remove buttons
                neu21.remove();
                neu22.remove();
                neu23.remove();
                neuScene = 3;
            });
            neu22.mousePressed(() => {
                // remove buttons
                neu21.remove();
                neu22.remove();
                neu23.remove();
                neuScene = 3;
            });
            neu23.mousePressed(() => {
                // remove buttons
                neu21.remove();
                neu22.remove();
                neu23.remove();
                neuScene = 3;
            });
            break;
        case 3:
            background(culcStairs);
            textBox(1, "idk anymore");

            neu31.position(200, 200);
            neu31.show();
            neu31.size(100, 100);

            neu32.position(400, 200);
            neu32.show();
            neu32.size(100, 100);

            neu33.position(600, 200);
            neu33.show();
            neu33.size(100, 100);


            neu31.mousePressed(() => {
                // remove buttons
                neu31.remove();
                neu32.remove();
                neu33.remove();
                neuScene = 4;
            });
            neu32.mousePressed(() => {
                // remove buttons
                neu31.remove();
                neu32.remove();
                neu33.remove();
                neuScene = 4;
            });
            neu33.mousePressed(() => {
                // remove buttons
                neu31.remove();
                neu32.remove();
                neu33.remove();
                neuScene = 4;
            });
            break;
        case 4:
            background(schoolPhoto);
            textBox(1, "ahaha");
        default:
            break;
    }
}

function textBox(chara, textString) {
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
        // textAlign(CENTER, CENTER);
        text(textString, width / 15, height / 1.35, width - 100, height - 40);
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
        // textAlign(CENTER, CENTER);
        text(textString, width / 15, height / 1.35, width - 100, height - 40);
        stroke(253, 187, 199);
        // nextButton
    }

    if (chara == 2) { // chad textbox
        fill('grey');
        stroke(178, 59, 30);
        rect(40, height / 1.45, width - 80, height / 3.75);

        fill(0);
        textSize(20);
        noStroke();
        // textAlign(CENTER, CENTER);
        text(textString, width / 15, height / 1.35, width - 100, height - 40);
        stroke(253, 187, 199);
        // nextButton
    }
}

function optButtons() {
    // need to implement buttons onClick
}

// need buttons for user input //
