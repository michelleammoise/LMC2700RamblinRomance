// initialize vars
// initialize variables
let playerName;
let getName;
let major;
let aero;
let lmc;
let biomed;
let business;
let cs;
let intellect;
let rizz;
let attraction;

let boychar2;

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

let chad21;
let chad22;
let chad23;

let chad31;
let chad32;
let chad33;

let chad111;
let chad112;
let chad121;
let chad122;

let chad311;
let chad312;
let chad313;


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
let nextBtn3;
let neu41;
let neu42;
let neu43;
let neu51;
let neu52;
let neu53;
let neu61;
let neu62;
let neu63;
let neu71;
let neu72;
let neu73;

// load assets
function preload() {
    fancy = loadFont("font3.otf")

    schoolPhoto = loadImage("./assets/techTower.jpeg");
    culcStairs = loadImage("./assets/culcStairs.png");
    stuCenter = loadImage("./assets/jlstucen.jpeg");
    culcsteps = loadImage("./assets/culcsteps.png");
    scheller = loadImage("./assets/scheller.jpeg");
    dorm = loadImage("./assets/dorm.jpg");
    klaus = loadImage("./assets/klaus.jpg");
    diningHall = loadImage("./assets/dininghall.jpg");
    crossland = loadImage("./assets/crossland.jpeg");

    boyChar = loadImage("./assets/3dboy.png");
    girlChar = loadImage("./assets/3dgirl.png");
    neuChar = loadImage("./assets/3djordan.png");

    neuchar2 = loadImage("./assets/2djordan2.png");
    boychar2 = loadImage("./assets/2dboy2.png");
    girlchar2 = loadImage("./assets/2dgirl2.png");
}

// setup
function setup() {
    getAudioContext().suspend();
    rectMode(CENTER);
    createCanvas(1000, 600);
    sceneCount = 1;
    oliviaScene = 0;
    chadScene = 0; // change to 0 when added exposition scene
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
    startBtn.style('background-color: pink');

    nextBtn = createButton("Next");
    nextBtn.hide();
    nextBtn.mousePressed(() => {
        nextBtn.remove();
        sceneCount = 3;
    })

    nextBtn2 = createButton("Next");
    nextBtn2.hide();

    nextBtn3 = createButton("Next");
    nextBtn3.hide();

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
    jordanButtons();
    statsButtons();
    oliviaButtons();



}



function statsButtons() {
    let x = width / 2;
    getName = createInput();
    getName.hide();
    aero = createButton("Aerospace Engineering");
    aero.hide();
    aero.position(x, 200);
    aero.mousePressed(() => {
        hideStats();
        major = "Aerospace Engineering";
        sceneCount = 4;
    })
    lmc = createButton("Literature/Media/Communications");
    lmc.hide();
    lmc.position(x, 250);
    lmc.mousePressed(() => {
        hideStats();
        major = "Literature/Media/Communications";
        sceneCount = 4;
    })
    biomed = createButton("Biomedical Engineering");
    biomed.hide();
    biomed.position(x, 300);
    biomed.mousePressed(() => {
        hideStats();
        major = "Biomedical Engineering";
        sceneCount = 4;
    })
    business = createButton("Business");
    business.hide();
    business.position(x, 350);
    business.mousePressed(() => {
        hideStats();
        major = "Business";
        sceneCount = 4;
    })
    cs = createButton("Computer Science");
    cs.hide();
    cs.position(x, 400);
    cs.mousePressed(() => {
        hideStats();
        major = "Computer Science";
        sceneCount = 4;
    })
}

function setStats() {
    switch (major) {
        case ("Aerospace Engineering"):
            intellect = 9;
            rizz = 2;
            attraction = 4;
            break;
        case ("Business"):
            intellect = 1;
            rizz = 7;
            attraction = 8;
            break;
        case ("Computer Science"):
            intellect = 5;
            rizz = 0;
            attraction = 4;
            break;
        case ("Literature/Media/Communications"):
            intellect = 6;
            rizz = 8;
            attraction = 7;
            break;
        case ("Biomedical Engineering"):
            intellect = 10;
            rizz = 4;
            attraction = 7;
            break;
        default:
            // secret god mode
            intellect = 10;
            rizz = 10;
            attraction = 10;
    }
}
function hideStats() {
    aero.hide();
    lmc.hide();
    biomed.hide();
    business.hide();
    cs.hide();
}

function showStats() {
    aero.show();
    lmc.show();
    biomed.show();
    business.show();
    cs.show();
}

function statsButtons() {
    let x = width / 2;
    getName = createInput();
    getName.hide();
    aero = createButton("Aerospace Engineering");
    aero.hide();
    aero.position(x, 200);
    aero.mousePressed(() => {
        hideStats();
        major = "Aerospace Engineering";
        sceneCount = 4;
    })
    lmc = createButton("Literature/Media/Communications");
    lmc.hide();
    lmc.position(x, 250);
    lmc.mousePressed(() => {
        hideStats();
        major = "Literature/Media/Communications";
        sceneCount = 4;
    })
    biomed = createButton("Biomedical Engineering");
    biomed.hide();
    biomed.position(x, 300);
    biomed.mousePressed(() => {
        hideStats();
        major = "Biomedical Engineering";
        sceneCount = 4;
    })
    business = createButton("Business");
    business.hide();
    business.position(x, 350);
    business.mousePressed(() => {
        hideStats();
        major = "Business";
        sceneCount = 4;
    })
    cs = createButton("Computer Science");
    cs.hide();
    cs.position(x, 400);
    cs.mousePressed(() => {
        hideStats();
        major = "Computer Science";
        sceneCount = 4;
    })
}

function setStats() {
    switch (major) {
        case ("Aerospace Engineering"):
            intellect = 9;
            rizz = 2;
            attraction = 4;
            break;
        case ("Business"):
            intellect = 1;
            rizz = 7;
            attraction = 8;
            break;
        case ("Computer Science"):
            intellect = 5;
            rizz = 0;
            attraction = 4;
            break;
        case ("Literature/Media/Communications"):
            intellect = 6;
            rizz = 8;
            attraction = 7;
            break;
        case ("Biomedical Engineering"):
            intellect = 10;
            rizz = 4;
            attraction = 7;
            break;
        default:
            // secret god mode
            intellect = 10;
            rizz = 10;
            attraction = 10;
    }
}
function hideStats() {
    aero.hide();
    lmc.hide();
    biomed.hide();
    business.hide();
    cs.hide();
}

function showStats() {
    aero.show();
    lmc.show();
    biomed.show();
    business.show();
    cs.show();
}

function oliviaButtons() {
    olivia11 = createButton("Approach Her After Class and Ask for Instagram");
    olivia11.hide()
    olivia12 = createButton("Join the Aero-Philosophy Symposium Meeting and Get to Know Her");
    olivia12.hide()
    olivia13 = createButton("Invite Her to a Nerdy Worms Club Event and Request Her Instagram");
    olivia13.hide()

    olivia211 = createButton("Approach Her and Ask to Collaborate on a Calculus Assignment");
    olivia211.hide()
    olivia212 = createButton("Leave Her Alone -- She Looks Focused, Better Not to Bother Her");
    olivia212.hide()
    olivia22 = createButton("Attend the Hangar Session Together");
    olivia22.hide()
    olivia23 = createButton("Tell Her How Pretty She Is");
    olivia23.hide()
}

function statsButtons() {
    let x = width / 2;
    getName = createInput();
    getName.hide();
    aero = createButton("Aerospace Engineering");
    aero.hide();
    aero.position(x, 200);
    
    aero.mousePressed(() => {
        hideStats();
        major = "Aerospace Engineering";
        sceneCount = 4;
    })
    lmc = createButton("Literature/Media/Communications");
    lmc.hide();
    lmc.position(x, 250);
    lmc.mousePressed(() => {
        hideStats();
        major = "Literature/Media/Communications";
        sceneCount = 4;
    })
    biomed = createButton("Biomedical Engineering");
    biomed.hide();
    biomed.position(x, 300);
    biomed.mousePressed(() => {
        hideStats();
        major = "Biomedical Engineering";
        sceneCount = 4;
    })
    business = createButton("Business");
    business.hide();
    business.position(x, 350);
    business.mousePressed(() => {
        hideStats();
        major = "Business";
        sceneCount = 4;
    })
    cs = createButton("Computer Science");
    cs.hide();
    cs.position(x, 400);
    cs.mousePressed(() => {
        hideStats();
        major = "Computer Science";
        sceneCount = 4;
    })
}

function setStats() {
    switch (major) {
        case ("Aerospace Engineering"):
            intellect = 9;
            rizz = 2;
            attraction = 4;
            break;
        case ("Business"):
            intellect = 1;
            rizz = 7;
            attraction = 8;
            break;
        case ("Computer Science"):
            intellect = 5;
            rizz = 0;
            attraction = 4;
            break;
        case ("Literature/Media/Communications"):
            intellect = 6;
            rizz = 8;
            attraction = 7;
            break;
        case ("Biomedical Engineering"):
            intellect = 10;
            rizz = 4;
            attraction = 7;
            break;
        default:
            // secret god mode
            intellect = 10;
            rizz = 10;
            attraction = 10;
    }
}
function hideStats() {
    aero.hide();
    lmc.hide();
    biomed.hide();
    business.hide();
    cs.hide();
}

function showStats() {
    aero.show();
    lmc.show();
    biomed.show();
    business.show();
    cs.show();
}

function statsButtons() {
    let x = width / 2;
    getName = createInput();
    getName.hide();
    aero = createButton("Aerospace Engineering");
    aero.hide();
    aero.position(x - 20, 200);
    aero.mousePressed(() => {
        hideStats();
        major = "Aerospace Engineering";
        sceneCount = 4;
    })
    lmc = createButton("Literature/Media/Communications");
    lmc.hide();
    lmc.position(x - 40, 250);
    lmc.mousePressed(() => {
        hideStats();
        major = "Literature/Media/Communications";
        sceneCount = 4;
    })
    biomed = createButton("Biomedical Engineering");
    biomed.hide();
    biomed.position(x - 20, 300);
    biomed.mousePressed(() => {
        hideStats();
        major = "Biomedical Engineering";
        sceneCount = 4;
    })
    business = createButton("Business");
    business.hide();
    business.position(x + 3, 350);
    business.mousePressed(() => {
        hideStats();
        major = "Business";
        sceneCount = 4;
    })
    cs = createButton("Computer Science");
    cs.hide();
    cs.position(x - 10, 400);
    cs.mousePressed(() => {
        hideStats();
        major = "Computer Science";
        sceneCount = 4;
    })
}

function setStats() {
    switch (major) {
        case ("Aerospace Engineering"):
            intellect = 9;
            rizz = 2;
            attraction = 4;
            break;
        case ("Business"):
            intellect = 1;
            rizz = 7;
            attraction = 8;
            break;
        case ("Computer Science"):
            intellect = 5;
            rizz = 0;
            attraction = 4;
            break;
        case ("Literature/Media/Communications"):
            intellect = 6;
            rizz = 8;
            attraction = 7;
            break;
        case ("Biomedical Engineering"):
            intellect = 10;
            rizz = 4;
            attraction = 7;
            break;
        default:
            // secret god mode
            intellect = 10;
            rizz = 10;
            attraction = 10;
    }
}
function hideStats() {
    aero.hide();
    lmc.hide();
    biomed.hide();
    business.hide();
    cs.hide();
}

function showStats() {
    aero.show();
    lmc.show();
    biomed.show();
    business.show();
    cs.show();
}

function oliviaButtons() {
    olivia11 = createButton("Approach Her After Class and Ask for Instagram");
    olivia11.hide()
    olivia12 = createButton("Join the Aero-Philosophy Symposium Meeting and Get to Know Her");
    olivia12.hide()
    olivia13 = createButton("Invite Her to a Nerdy Worms Club Event and Request Her Instagram");
    olivia13.hide()

    olivia211 = createButton("Approach Her and Ask to Collaborate on a Calculus Assignment");
    olivia211.hide()
    olivia212 = createButton("Leave Her Alone -- She Looks Focused, Better Not to Bother Her");
    olivia212.hide()
    olivia22 = createButton("Attend the Hangar Session Together");
    olivia22.hide()
    olivia23 = createButton("Tell Her How Pretty She Is");
    olivia23.hide()
}

function jordanButtons() {
   //jordanButtons();
   neu11 = createButton("Get Political");
   neu11.hide();
   neu12 = createButton("Attend a Brainwaves Society Event and Get to Know Them");
   neu12.hide();
   neu13 = createButton("Request Their Instagram Directly");
   neu13.hide();

   neu21 = createButton("Collaborate on a Neuroscience Assignment");
   neu21.hide();
   neu22 = createButton("Invite Them to a Science Seminar");
   neu22.hide();
   neu23 = createButton("Attend a Consciousness Discussion With Them");
   neu23.hide();

   neu31 = createButton("Wanna Participate in a Neuroscience Workshop With me at Emory Tomorrow?");
   neu31.hide();
   neu32 = createButton("Wanna Join a Healthcare Related Volunteer Oppurtunity With me Tomorrow?");
   neu32.hide();
   neu33 = createButton("Ask for Help Understanding a Neuroscience Related Concept");
   neu33.hide();

   neu41 = createButton("Approach them now");
   neu41.hide();
   neu42 = createButton("Meet them at after your shared lecture class later today");
   neu42.hide();
   neu43 = createButton("Look at them cutely");
   neu43.hide();

   neu51 = createButton("How did you feel about the reading today?");
   neu51.hide();
   neu52 = createButton("Hi! I know you are interested in neuro research, I wanted to talk to about this article I read.");
   neu52.hide();
   neu53 = createButton("What are you up to today?");
   neu53.hide();

   neu61 = createButton("I saw you in the hallway today and wanted to meet you here!");
   neu61.hide();
   neu62 = createButton(" ");
   neu62.hide();
   neu63 = createButton(" ");
   neu63.hide();

   neu71 = createButton("Offer to help them with their research");
   neu71.hide();
   neu72 = createButton("Attend the Brainwaves event togethor!");
   neu72.hide();
   neu73 = createButton(" ");
   neu73.hide();
}
function chadButtons() {
    okChad = createButton("Ok");
    okChad.hide();
    okChad.position(width - 100, height - 50);

    // day 1 buttons
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

    chad121 = createButton("I have a knack for entrepreneurial stuff. I have some ideas for startups myself.");
    chad122 = createButton("I saw you in the hallway today and I wanted to meet you here!");
    chad121.hide();
    chad122.hide();

    // day 2 buttons
    chad21 = createButton("Offer to help on his homework");
    chad21.hide();
    chad22 = createButton("Attend the Innovative Yellow Jackets club event together");
    chad22.hide();
    chad23 = createButton("Invite him to workout at the CRC");
    chad23.hide();

    chad211 = createButton("Pick up pencil and papers for him");
    chad212 = createButton("Let him pick up his own stuff");
    chad211.hide();
    chad212.hide();

    chad2130 = createButton("Volunteer to participate in the event");
    chad2140 = createButton("Let someone else go for it");
    chad2130.hide();
    chad2140.hide();

    chad215 = createButton("Wing it");
    chad215.hide();
    chad216 = createButton("Ask Chad for help");
    chad216.hide();

    chad217 = createButton("Help spot Chad at the benchpress");
    chad218 = createButton("Ask Chad to spot you at the benchpress");
    chad217.hide();
    chad218.hide();

    //day 3 buttons
    chad311 = createButton("\"I can really see ourselves being closer in the future\".");
    chad311.hide();
    chad312 = createButton("Agree and smile");
    chad312.hide();
    chad313 = createButton("Tell him your honest thoughts about business majors");
    chad313.hide();
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

    nextBtn.position(30, 550);
    nextBtn.show();
}

function userInputs() {
    background(0); // black background
    fill(255); // text color
    textAlign(CENTER);
    textFont('Courier New', 20);
    text("First, type your name, then select a major. ", width / 2, 50);
    text("Some majors are more likely to romance a partner, so choose wisely! ", width / 2, 75);
    getName.show();
    getName.size(500, 20);
    getName.position((width / 2) - 200, 100);
    if (playerName === "") {
        playerName = "Player";
    }
    playerName = getName.value(); // may need to move this


    showStats();

}

function chooseChar() {
    getName.hide();
    setStats();

    background(0); // black background
    fill(255); // text color
    textAlign(CENTER);
    textFont('Courier New', 20);
    text("Select character", width / 2, 50);
    text("\nHi " + playerName + "!", width / 2, 50);
    text("\nHi " + playerName + "!", width / 2, 50);

    boychar2.resize(200, 200);
    girlchar2.resize(200, 200);
    neuchar2.resize(200, 200);

    image(boychar2, 200, 150);
    image(girlchar2, 400, 150);
    image(neuchar2, 600, 150);

    // boyBtn = createButton("Boy");
    boyBtn.position(285, 450);
    boyBtn.show();
    // girlBtn = createButton("Girl");
    girlBtn.position(485, 450);
    girlBtn.show();
    // neuBtn = createButton("Non-binary");
    neuBtn.position(685, 450);
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
            userInputs();
            break;
        case 4:
            chooseChar();
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
        case 8:
            userInputs();
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
            textBox(1, "You picked Olivia Thompson! She is a 2nd year Aerospace major. When she's not immersed in aerospace engineering, you'll find her at the hangar, perfecting aircraft designs or engaging in high-flying discussions with peers. Olivia is a member of the Aero-Philosophy Symposium and the Nerdy Worms club.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 1;
            });
            break;
        case 1:
            background(culcsteps);
            textBox(0, "Day 1:\nAfter a friendly and interesting conversation about finding derivatives in your shared calculus class, you feel that you want to get closer to Olivia. How are you going about it?");


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
                oliviaScene = 2;
            });
            olivia12.mousePressed(() => {
                // remove buttons
                olivia11.remove();
                olivia12.remove();
                olivia13.remove();
                oliviaScene = 8;
            });
            olivia13.mousePressed(() => {
                // remove buttons
                olivia11.remove();
                olivia12.remove();
                olivia13.remove();
                oliviaScene = 14;
            });
            break;
        // day 1 choice 1
        case 2:
            background(culcsteps);
            textBox(0, "Hello, Olivia!");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 3;
            });
            break;
        case 3:
            background(culcsteps);
            textBox(1, "Hey, whatcha doing?");
            nextBtn3.position(60, 550);
            nextBtn3.show();
            nextBtn3.mousePressed(() => {
                nextBtn3.hide();
                oliviaScene = 4;
            });
            break;
        case 4:
            background(culcsteps);
            textBox(0, "Talking to you, obviously.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 5;
            });
            break;
        case 5:
            background(culcsteps);
            textBox(1, "Haha, that must be boring then.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 6;
            });
            break;
        case 6:
            background(culcsteps);
            textBox(0, "[Shocked] Absolutely not, you're the opposite of that! " + "Do you have an Instagram?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 7;
            });
            break;
        case 7:
            background(culcsteps);
            textBox(1, "[Olivia looks intrigued, then grabs her phone.] " +
                "Yeah! Here it is. [Hands you her phone] " +
                "Let’s stay in touch, yeah?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 8;
            });
            break;
        // day 1 choice 2
        case 8:
            background(culcStairs);
            textBox(0, "[Casually strolls into the Aero-Philosophy Symposium meeting, spotting Olivia engrossed in the discussion]\nMind if I snag a spot? Aerospace and philosophy sound like a wild combo.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 9;
            });
            break;
        case 9:
            background(culcStairs);
            textBox(1, "Go for it! It's a wild ride, all right.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 10;
            });
            break;
        case 10:
            background(culcStairs);
            textBox(0, "[Engage in the Symposium, exploring the curious intersection of aerospace and deep thoughts]\nSurprisingly mind-expanding. Never thought rockets and existential musings would go hand in hand.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 11;
            });
            break;
        case 11:
            background(culcStairs);
            textBox(1, "Life's full of surprises, just like the cosmos.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 12;
            });
            break;
        case 12:
            background(culcStairs);
            textBox(0, "[After the meeting, you both gather your belongings together]\nThis was strangely fascinating. By the way, any chance I could grab your Instagram? Maybe share more mind-boggling reads.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 13;
            });
            break;
        case 13:
            background(culcStairs);
            textBox(1, "Haha, why not? \n[Shares Instagram]\n Brace yourself for more cosmic contemplations.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 25;
            });
            break;
        // day 1 choice 3
        case 14:
            background(culcsteps);
            textBox(0, "So, there's this Nerdy Worms club event happening. Thought you might be interested.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 17;
            });
            break;
        case 17:
            background(culcsteps);
            textBox(1, "Nerdy Worms? What's that about?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 18;
            });
            break;
        case 18:
            background(culcsteps);
            textBox(0, "Oh, just your average gathering of cosmic minds and quirky discussions. Interested?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 19;
            });
            break;
        case 19:
            background(culcsteps);
            textBox(1, "Cosmic minds, huh? Count me in!");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 20;
            });
            break;
        case 20:
            background(scheller);
            textBox(0, "[Attend the Nerdy Worms event, engaging in lively discussions about everything from quantum physics to the best sci-fi shows]");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 21;
            });
            break;
        case 21:
            background(scheller);
            textBox(0, "This was surprisingly fun. Nerdy minds think alike, I guess.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 22;
            });
            break;
        case 22:
            background(scheller);
            textBox(1, "Absolutely! Different, yet strangely relatable.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 23;
            });
            break;
        case 23:
            background(scheller);
            textBox(0, "[As the event winds down, seize the moment]\nI had a great time with you today. Mind if I follow you on Instagram? We can keep each other in the loop about future cosmic adventures.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 24;
            });
            break;
        case 24:
            background(scheller);
            textBox(1, "Sounds like a plan! \n[Shares Instagram] \nLet the cosmic updates begin!");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 25;
            });
            break;
        case 25:
            background(dorm);
            textBox(0, "Day 2:\n It's a new day, with new opportunities! As you're lying in bed this morning, you think about what you could do today. Oh. You should get started on your calculus homework, sigh. Time to head to the library.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 26;
            });
            break;
        case 26:
            background(crossland);
            textBox(0, "As you stroll around the library, who do you see but... Olivia? Oh, and she's working on what appears to be the calculus assignment!");
            olivia211.position(200, 200);
            olivia211.show();
            olivia211.size(100, 100);

            olivia212.position(600, 200);
            olivia212.show();
            olivia212.size(100, 100);


            olivia211.mousePressed(() => {
                // remove buttons
                olivia211.remove();
                olivia212.remove();
                oliviaScene = 27;
            });
            olivia212.mousePressed(() => {
                // remove buttons
                olivia211.remove();
                olivia212.remove();
                oliviaScene = 48;
            });
            break;
        case 27:
            background(crossland);
            textBox(0, "Hey Olivia! Calculus, huh? The joy of derivatives and integrals.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 28;
            });
            break;
        case 28:
            background(crossland);
            textBox(1, "[Laughs] Yeah, joyous indeed. Trying to make sense of all this.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 29;
            });
            break;
        case 29:
            background(crossland);
            textBox(0, "Mind if I join the struggle? Two heads are better than one, right?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 30;
            });
            break;
        case 30:
            background(crossland);
            textBox(1, "[Smiling] Sure, why not? Let's tackle this beast together.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 31;
            });
            break;
        case 31:
            background(crossland);
            textBox(0, "[Collaborate on the calculus assignment, sharing laughs and solving equations]\nWho knew calculus could be this amusing?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 32;
            });
            break;
        case 32:
            background(crossland);
            textBox(1, "[Grinning] Maybe it's the company making it enjoyable.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 33;
            });
            break;
        case 33:
            background(crossland);
            textBox(0, "[Hmm, the vibes seem good... should you invite her to the next hangar session so you both can design planes together? Or maybe it's time to be more bold.]");
            olivia22.position(200, 200);
            olivia22.show();
            olivia22.size(100, 100);

            olivia23.position(600, 200);
            olivia23.show();
            olivia23.size(100, 100);


            olivia22.mousePressed(() => {
                // remove buttons
                olivia22.remove();
                olivia23.remove();
                oliviaScene = 34;
            });
            olivia23.mousePressed(() => {
                // remove buttons
                olivia22.remove();
                olivia23.remove();
                oliviaScene = 42;
            });
            break;
        case 34:
            background(crossland);
            textBox(0, "Hey Olivia, have you heard about the hangar session? They're letting students unleash their inner aerospace engineers.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 35;
            });
            break;
        case 35:
            background(crossland);
            textBox(1, "Hangar session? What's that all about?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 36;
            });
            break;
        case 37:
            background(crossland);
            textBox(0, "Oh, just a chance to dive into aircraft designs, play with some cool engineering stuff. Thought it could be fun.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 38;
            });
            break;
        case 38:
            background(crossland);
            textBox(0, "[Attend the hangar session, working on aircraft designs, sharing insights]\nWho knew wingspans and aerodynamics could be this fascinating, right?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 39;
            });
            break;
        case 39:
            background(crossland);
            textBox(0, "[Smiling] Definitely more interesting than I expected.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 40;
            });
            break;
        case 40:
            background(crossland);
            textBox(0, "[As the session wraps up]\nSo, turns out we make a pretty good aircraft design team.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 41;
            });
            break;
        case 41:
            background(crossland);
            textBox(1, "[Teasingly] Top-notch engineers, right?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 42;
            });
            break;
        case 42:
            background(crossland);
            textBox(0, "[That’s a bit too…bold]\n Olivia, I've been meaning to tell you something.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 43;
            });
            break;
        case 43:
            background(crossland);
            textBox(1, "(Raises an eyebrow) What is it?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 44;
            });
            break;
        case 44:
            background(crossland);
            textBox(0, "You're like a rare constellation in the vast cosmic expanse of this university. Your radiance outshines even the brightest stars.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 45;
            });
            break;
        case 45:
            background(crossland);
            textBox(1, "(Uncomfortable) Uh, thanks?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 46;
            });
            break;
        case 46:
            background(crossland);
            textBox(1, "No, really. It's like your beauty has its own gravitational pull, and I'm helplessly drawn towards it.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 47;
            });
            break;
        case 47:
            background(crossland);
            textBox(1, "[Clearly annoyed] Are you done?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                oliviaScene = 48;
            });
            break;
    }
}

function chadRoute() {
    startBtn.hide();
    let x = width / 2 - 150;
    let opt1y = 100;
    let opt2y = 150;
    let opt3y = 200;
    switch (chadScene) {
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
            image(boychar2, 500, 200);
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1;
            });
            break;
        case 1:
            background(culcStairs);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Day 1, Monday: As you leave your LMC class, "
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
            background(dorm); // change background to dorm?
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Day 2, Tuesday: You wake up in your dorm. You don't have classes until much later, "
                + "so you don't have much to do this morning. You open Instagram text and Chad how he's doing. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 21;
            });
            break;
        case 3:
            background(diningHall); // change background to dining hall
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Day 3, Wednesday: You and Chad decided to have lunch together at West Village dining hall. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 30;
            });
            break;
        case 4:
            background(dorm); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Day 4, Thursday: You and Chad spend time studying together in your dorm. You stated that it's a more personal and relaxed setting. "
                + "You can order some food, play some background music, and focus on your studies while also getting to spend quality time together. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                // if bad, go to "410", else go to "420" for good ending
                if (rizz > 8 && attraction > 5) {
                    chadScene = 420;
                } else {
                    chadScene = 410;
                }
            });
            break;
        case 21:
            background(dorm); // change background to dorm?
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(1, "Not much. Got a lame business assignment, but I might go to a club event or gym later.");

            chad21.show();
            chad21.position(x, opt1y);
            chad21.mousePressed(() => {
                chad21.hide();
                chad22.hide();
                chad23.hide();
                chadScene = 211;
            });

            chad22.show();
            chad22.position(x, opt2y);
            chad22.mousePressed(() => {
                chad21.hide();
                chad22.hide();
                chad23.hide();
                chadScene = 212;
            });

            chad23.show();
            chad23.position(x, opt3y);
            chad23.mousePressed(() => {
                chad21.hide();
                chad22.hide();
                chad23.hide();
                chadScene = 213;

            });
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
            textBox(2, "Chad: Hey! You're " + playerName + ", right? I'm Chad. "
                + "You sounded really smart in lecture today. What's up?");
            image(boychar2, x, 200);
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
        case 1111:
            // ask lecture material, not impressed
            textBox(0);
            fill(0);
            textAlign(LEFT);
            image(boychar2, x, 200);
            textFont('Courier New', 20);
            textBox(2, "Chad: Oh, it was cool, I guess. I didn't actually pay attention. "
                + "Anyways, I have to go. We should talk about other stuff in the future, "
                + "though. I'll see you around.");
            okChad.show();
            okChad.mousePressed(() => {
                chadScene = 1112;
                okChad.hide();
            });
            break;
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
            intellect++;
            rizz--;
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
            image(boychar2, x, 200);
            textBox(2, "Chad: I'd be down to talk! I gotta go to class, but "
                + "you should totally text me later. Can I send you my IG handle?");
            // increase charisma/attractiveness
            rizz++;
            attraction++;
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
                chadScene = 1201;
            });
            break;
        case 1201:
            background(klaus); // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You arrive just in time for the club meeting. Unsurprisingly, Chad is already "
                + "sitting down. You sit next to him.");

            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1210;
            });
            break;
        case 1210:
            background(klaus); // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: I thought you looked familiar. You're " + playerName + ", right? I didn't know you were "
                + "interested in this stuff?");

            chad121.show();
            chad121.position(x, opt1y);
            chad121.mousePressed(() => {
                chad121.hide();
                chad122.hide();
                chadScene = 1211;
            });
            chad122.show();
            chad122.position(x, opt2y);
            chad122.mousePressed(() => {
                chad121.hide();
                chad122.hide();
                chadScene = 1221;
            });
            break;
        case 1211:
            background(klaus); // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: No way, really?! We should honestly share ideas. Can we talk about it on IG? "
                + "It'd be cool if we can connect outside meetings, and we can keep each other in the loop "
                + "for future meetings. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1212;
            });
            break;
        case 1212:
            // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You guys share Instagram accounts. For the rest of the meeting, you both are "
                + "actively involved in the conversation. Afterwards, you continue texting Chad through "
                + "the evening.");

            // increase smartness and charisma
            rizz++;
            intellect++;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2;
            });
            break;
        case 1221:
            // background(0); // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: I think I saw you, too. I guess you're not here for the club, then? "
                + "That's cool, I'll just listen to the meeting.");
            // increase smarts, decrease charisma
            intellect++;
            rizz--;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1222;
            });
            break;
        case 1222:
            // background(0); // change background to Klaus
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "For the rest of the meeting, Chad doesn't pay much attention to you, "
                + "feeling a little uncomfortable that you came just for him. But you try to make "
                + "small talk, and he eventually agrees to share his Instagram account. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2;
            });
            break;
        case 1300:
            background(culcStairs);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You turn your head to the side, smile, and glance over to his eyes. "
                + "Chad grins, uncomfortably, as he walks past you. He doesn't know you enough "
                + "to reciprocate those feelings. ");
            // increase attractiveness, decrease charisma
            attraction++;
            rizz--;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 1301;
            })
            break;
        case 1301:
            background(culcStairs);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Later that day, you find Chad's Instagram account and follow him, "
                + "hoping to provide a better impression next time.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2;
            });
            break;
        case 211: // offer to help on homework
            background(stuCenter);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "While studying helping Chad with his homework, you guys get to know each other better.\n" + "You are hoping to get to know him better, but he seems to be more focused on the homework.\n" + "You decide to ask him about his interests.");
            intellect++;

            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2111;
            });
            break;
        case 2111: //hw help
            background(stuCenter);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "It seems like he dropped his pencil in between you two. Should you let him pick it up or should you pick it up for him?");
            chad211.show();
            chad211.position(x, opt1y);
            chad211.mousePressed(() => {
                chad211.hide();
                chad212.hide();
                chadScene = 2112;
            });
            chad212.show();
            chad212.position(x, opt2y);
            chad212.mousePressed(() => {
                chad211.hide();
                chad212.hide();
                chadScene = 2113;
            });
            break;
            chad213.show();
            chad213.position(x, opt2y);
            chad213.mousePressed(() => {
                chad211.hide();
                chad212.hide();
                chadScene = 2113;
            });
            break;
        case 2112: //hw help
            background(stuCenter);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "He sees you hesistate but picks up his pencil first. You guys continue to study together.\nAlthough you wished to get to know him better, you guys still enjoyed each others' presence.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break;
        case 2113: //hw help
            background(stuCenter);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "The two of you coincidentally pick up the pencil at the same time. You guys make eye contact and blush. You would have thought they were working on chemistry the way they were bonding. You guys finish studying and said your goodbyes. You guys agreed to meet up again soon.");
            rizz++;
            attraction++;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break
        case 212: // attend club event
            background(scheller);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Innovative Yellow Jackets happens to be hosting an event with a famous model teaching students confidence and how to model." + " She asks the crowd for volunteers. Should you volunteer to impress Chad or leave it to someone else?");
            chad2130.show();
            chad2130.position(x, opt1y);
            chad2130.mousePressed(() => {
                chad2130.hide();
                chad2140.hide();
                chadScene = 2121;
            });
            chad2140.show();
            chad2140.position(x, opt2y);
            chad2140.mousePressed(() => {
                chad2130.hide();
                chad2140.hide();
                chadScene = 2122;
            });
            break;
        case 2121: // attend club event
            background(scheller);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "The second that the guest speaker calls on you, your mind goes blank. You forgot how to copy the sequence of the runaway walk. \nShould you wing it or ask Chad for help?");
            chad215.show();
            chad215.position(x, opt1y);
            chad215.mousePressed(() => {
                chad215.hide();
                chad216.hide();
                chadScene = 2123;
            });
            chad216.show();
            chad216.position(x, opt2y);
            chad216.mousePressed(() => {
                chad215.hide();
                chad216.hide();
                chadScene = 2124;
            });
            break;
        case 2122: // attend club event
            background(scheller);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You see Chad raise his hand. He gets called on and he does the walk perfectly. You guys continue to enjoy the event together. You guys agreed to meet up again soon.");
            attraction++;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break;
        case 2123:
            background(scheller);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You wing it and do the walk. You trip and fall. Chad helps you up and you guys laugh it off and continue to enjoy the event together. You guys agreed to meet up again soon.");
            attraction++;
            rizz--;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break;
        case 2124: // attend club event
            background(scheller);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You ask Chad for help. He whispers the sequence to you and you do the walk perfectly, which caught his attention. You guys agreed to meet up again soon after all the fun.");
            rizz++;
            attraction++;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break;
        case 213: // invite to gym
            background(crc);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "After going back to your dorm, Chad meets you at the gym. While doing the bench press, you notice Chad struggling to lift the bar. Should you help him or let him struggle?");
            chad217.show();
            chad217.position(x, opt1y);
            chad217.mousePressed(() => {
                chad217.hide();
                chad218.hide();
                chadScene = 2131;
            });
            chad218.show();
            chad218.position(x, opt2y);
            chad218.mousePressed(() => {
                chad217.hide();
                chad218.hide();
                chadScene = 2132;
            });
            break;
        case 2131: // invite to gym
            background(crc);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You help him lift the bar. He thanks you and blushes. You guys end up having a productive workout together. You guys agreed to workout again soon.");
            attraction++;
            rizz++;
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break;
        case 2132: // invite to gym
            background(crc);
            textBox(0); // probably make 0 be narrator
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "He almost drops the bar on himself. He gets up and says he's fine. The rest of the workout went well and you guys agreed to workout again soon.");
            attraction--;
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 3;
            });
            break;
        case 30:
            background(diningHall); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: Good to see you again! I honestly had fun yesterday. I didn't expect us "
                + "to have this much in common. It's hard being a business major. I've been swamped with work lately, "
                + "but it was worth spending time with you. ");
            chad311.show();
            chad311.position(x, opt1y);
            chad311.mousePressed(() => {
                chad311.hide();
                chad312.hide();
                chad313.hide();
                chadScene = 310;
            });

            chad312.show();
            chad312.position(x, opt2y);
            chad312.mousePressed(() => {
                chad311.hide();
                chad312.hide();
                chad313.hide();
                chadScene = 320;
            });

            chad313.show();
            chad313.position(x, opt3y);
            chad313.mousePressed(() => {
                chad311.hide();
                chad312.hide();
                chad313.hide();
                chadScene = 330;
            });
            break;
        case 310:
            //background(1); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: You're right.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 311;
            });
            break;
        case 311:
            //background(1); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Both of you blush. You guys spend of the rest of the hour talking about everything "
                + "from business to school. As the conversation ends, Chad invites you to his dorm tomorrow to "
                + "work together. You agree. "); // may want to expand conversation
            // increase charisma and attractiveness
            rizz++;
            attraction++;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 4;
            });
            break;
        case 320:
            //background(1); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "He blushes. You guys spend of the rest of the hour talking about everything "
                + "from business to school. As the conversation ends, Chad invites you to his dorm tomorrow to "
                + "work together. You agree. ");
            // increase attractiveness
            attraction++;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 4; // also may want to expand story
            });
            break;
        case 330:
            //background(1); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You tell him how he shouldn't be complaining as a business major, since it's "
                + "one of the easiest majors out there. You also state how your major is harder and yet "
                + "you can still handle it. ");
            // increase smartness, deduct charisma
            intellect += 2;
            rizz -= 2;
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 331;
            });
            break;
        case 331:
            //background(1); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "He didn't ask for all that. Let's say he was not amused. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 332;
            });
            break;
        case 332:
            //background(1); // change background to dining hall/food place
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You apologize and offer to help him study tomorrow for his upcoming test. "
                + "He reluctantly agrees.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 4;
            });
            break;
        case 410:
            background(dorm); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "The dorm room is filled with a lively energy, and "
                + " Chad and you are sitting on the floor amidst study materials. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 411;
            });
            break;
        case 411:
            // background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You: You know, these study sessions have been surprisingly enjoyable, Chad.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 412;
            });
            break;
        case 412:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: Yeah, they have. It's been cool having someone to tackle the work with.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 413;
            });
            break;
        case 413:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "A comfortable silence settles in as you both exchange smiles. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 414;
            });
            break;
        case 414:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You: I was thinking, there's a frat party happening this weekend. Would you be up for going together?");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 415;
            });
            break;
        case 415:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: A party? That sounds like a great way to unwind. Sure, I'm in. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 416;
            });
            break;
        case 416:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "As you both make plans for the party, "
                + "the room seems to brighten with the anticipation of shared laughter and good times.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 417;
            });
            break;
        case 417:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You: Awesome! It'll be a blast. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 418;
            });
            break;
        case 418:
            //background(1);
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Chad grins, and as the evening continues, the connection between you deepens, "
                + "transitioning from study partners to potential friends.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 2000000;
                // good ending
            });
            break;
        case 420:
            //background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "However, the dorm room feels awkward, with an evident distance between you and Chad. "
                + "Study materials are scattered, and the atmosphere is strained.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 421;
            });
            break;
        case 421:
            // background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You: I thought these study sessions were going well, Chad");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 422;
            });
            break;
        case 422:
            //      background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            image(boychar2, x, 200);
            textBox(2, "Chad: They're just study sessions, you know? Nothing special.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 423;
            });
            break;
        case 423:
            //       background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "There's an uncomfortable silence, and you sense a shift in the dynamic.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 424;
            });
            break;
        case 424:
            //     background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You: Oh, got it. I just thought it would be a good way to unwind. You know, mix things up a bit.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 425;
            });
            break;
        case 425:
            //      background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            image(boychar2, x, 200);
            textFont('Courier New', 20);
            textBox(2, "Chad: Yeah, well, I'm not really into all that stuff. ");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 426;
            });
            break;
        case 426:
            //      background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "Chad's tone is dismissive, and you catch a hint of embarrassment in his expression.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 427;
            });
            break;
        case 427:
            //         background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "You: Right, my bad. I guess I misread the situation.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 428;
            });
            break;
        case 428:
            //        background(1); // change background to dorm
            textBox(0);
            fill(0);
            textAlign(LEFT);
            textFont('Courier New', 20);
            textBox(0, "As you leave Chad's dorm, disappointment lingers, and there's an awkwardness that hangs in the air. "
                + "It becomes clear that your suggestion didn't align with Chad's comfort zone, and the potential connection "
                + "you thought was forming takes a hit.");
            okChad.show();
            okChad.mousePressed(() => {
                okChad.hide();
                chadScene = 10000; // change to bad ending
            });
            break;
        default:
    }
}

function neuRoute() {
    //neuScene = 0;
    switch (neuScene) {
        case 0:
            background(culcsteps);
            textBox(3, "You picked Jordan Song! They are a 4th year Neuroscience major and can often be found pondering the intricate mysteries of the brain. " +
                "They are also an active member of the Brainwaves Society!");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 1;
            });
            break;
        case 1:
            background(stuCenter);
            textBox(3, "Day 1: Monday. As you leave your LMC class, you see Jordan Song walking in your direction. " +
                "You guys have talked a little bit in the past but do not know each other that well. What do you do next?");

            neu41.position(200, 200);
            neu41.show();
            neu41.size(100, 100);

            neu42.position(400, 200);
            neu42.show();
            neu42.size(100, 100);

            neu43.position(600, 200);
            neu43.show();
            neu43.size(100, 100);

            neu41.mousePressed(() => {
                // remove buttons
                neu41.remove();
                neu42.remove();
                neu43.remove();
                neuScene = 2;
            });
            neu42.mousePressed(() => {
                // remove buttons
                neu41.remove();
                neu42.remove();
                neu43.remove();
                neuScene = 3;
            });
            neu43.mousePressed(() => {
                // remove buttons
                neu41.remove();
                neu42.remove();
                neu43.remove();
                neuScene = 4;
            });
            break;
        case 2:
            background(stuCenter);
            textBox(3, "You walk upto them, but at the last minute you lose your nerve and turn back around. " +
                "Hopefully you can speak with them in the neuroscience lecture class you both are in.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 11;
            });
            break;
        case 3:
            background(stuCenter);
            textBox(3, "Jordan has always been outspoken about neuroscience. You decide to wait until " +
                "the lecture class, which you both are in, later today to talk to them.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 11;
            });
            break;
        case 4:
            background(stuCenter);
            textBox(3, "You turn your head to the side, smile, and glance up to their eyes. Jordan smiles, uncomfortably, " +
                "as they walk by. They do not know how to reciprocate those feelings. Hopefully you can speak with them " +
                "in the neuroscience lecture class you are both in.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 11;
            });
            break;
        case 11:
            background(scheller);
            textBox(3, "Later that day: you approach them at after the neuroscience lecture, " +
                "express your interest in neuroscience. After an interesting conversation you wish to keep the " +
                "conversation going. What do you want to do?");

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
                neuScene = 12;
            });
            neu12.mousePressed(() => {
                // remove buttons
                neu11.remove();
                neu12.remove();
                neu13.remove();
                neuScene = 14;
            });
            neu13.mousePressed(() => {
                // remove buttons
                neu11.remove();
                neu12.remove();
                neu13.remove();
                neuScene = 18;
            });
            break;
        case 12:
            background(culcsteps);
            textBox(3, "Quick question, why?");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 13;
            });
            break;
        case 13:
            background(scheller);
            textBox(3, "Jordan was a little weirded out about your conversation. When you requested to follow them on Instagram " +
            "they reluctantly entered their username.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 21;
            });
            break;
        case 14:
            background(culcsteps);
            textBox(3, "You joined the Brainwaves Society and appraoched them after your first meeting the same day.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 15;
            });
            break;
        case 15:
            background(klaus);
            textBox(3, "\"Hey Jordan, can't believe I'm seeing you again today. Must be fate.\" They laughed at your joke and agreed.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 16;
            });
            break;
        case 16:
            background(klaus);
            textBox(3, "\"So it was really great talking to you today! Can I get your Instagram so I can keep up with club events?\" They gave you their username and immediately requested to follow you back ;)");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 21;
            });
            break;
        case 18:
            background(scheller);
            textBox(3, "\"Hey Jordan, I've been seeing a lot lately. Can I get your Instagram?\" You ask earnestly");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 19;
            });
            break;
        case 19:
            background(scheller);
            textBox(3, "\"Yeah, of course. You must also be really interested in neuroscience.\" They laugh in response while putting in their Instagram username.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 20;
            });
            break;
        case 20:
            background(scheller);
            textBox(3, "\"Yeah something like that haha.\" Props to you for being bold, truly. Let's keep these good vibes going shall we.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 21;
            });
            break;
        case 21:
            background(stuCenter);
            textBox(3, "Day 2: Tuesday. Now that you've left an impression and Jordan knows you a little better, you " +
                "decide to make the first move once again and direct message them on Instagram.");

            neu51.position(200, 200);
            neu51.show();
            neu51.size(100, 100);

            neu52.position(400, 200);
            neu52.show();
            neu52.size(100, 100);

            neu53.position(600, 200);
            neu53.show();
            neu53.size(100, 100);

            neu51.mousePressed(() => {
                // remove buttons
                neu51.remove();
                neu52.remove();
                neu53.remove();
                neuScene = 22;
            });
            neu52.mousePressed(() => {
                // remove buttons
                neu51.remove();
                neu52.remove();
                neu53.remove();
                neuScene = 23;
            });
            neu53.mousePressed(() => {
                // remove buttons
                neu51.remove();
                neu52.remove();
                neu53.remove();
                neuScene = 24;
            });
            break;
        case 22:
            background(stuCenter);
            textBox(3, "They respond: It was really interesting! I've been wanting to talk to someone about it!")
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 25;
            });
            break;
        case 23:
            background(stuCenter);
            textBox(3, "They respond: Yeah I love reading and talking about new research that's published. Send me the article!")
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 25;
            });
            break;
        case 24:
            background(stuCenter);
            textBox(3, "They do not respond.")
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 25;
            });
            break;
        case 25:
            background(stuCenter);
            textBox(3, "You just can't wait to see them though. How should you respond to continue the connection IRL?")
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
                neuScene = 26;
            });
            neu32.mousePressed(() => {
                // remove buttons
                neu31.remove();
                neu32.remove();
                neu33.remove();
                neuScene = 27;
            });
            neu33.mousePressed(() => {
                // remove buttons
                neu31.remove();
                neu32.remove();
                neu33.remove();
                neuScene = 28;
            });
            break;
        case 26:
            background(culcStairs);
            textBox(3, "On Wednesday you had a wonderful time at the Brainwaves Workshop. Participating together was a hands-on and enjoyable way to deepen your connection while delving into neuroscience.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 33;
            });
            break;
        case 27:
            background(culcStairs);
            textBox(3, "On Wednesday you had a wonderful time volunteering at Northside Hospital. Joining forces with Jordan, combining your passion for the subject with community service, was just what your relationship needed.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 33;
            });
            break;
        case 28:
            background(culcStairs);
            textBox(3, "On Wednesday you had a wonderful time talking about your shared passion of the brain. Your academic bond has been strengthened and Jordan's expertise in the topic was able to shine.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 33;
            });
            break;
        case 33:
            background(culcsteps);
            textBox(3, "Day 3: Thursday. A day has passed and you had a wonderful time with Jordan yesterday. You have one last day to continue your bond and connection with Jordan. What should you suggest doing today?");

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
                neuScene = 34;
            });
            neu22.mousePressed(() => {
                // remove buttons
                neu21.remove();
                neu22.remove();
                neu23.remove();
                neuScene = 35;
            });
            neu23.mousePressed(() => {
                // remove buttons
                neu21.remove();
                neu22.remove();
                neu23.remove();
                neuScene = 36;
            });
            break;
        case 34:
            background(culcsteps);
            textBox(3, "You had such a great day collaborating. Jordan was able to learn more about your leadership side as you took charge regarding the research.")
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 44;
            });
            break;
        case 35:
            background(culcsteps);
            textBox(3, "The lecture, unfortunately, was not that interesting. Even Jordan, the science aficionado, had trouble staying awake. However, " +
                "they leaned on your shoulder for most of it so take it as a win.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 44;
            });
            break;
        case 36:
            background(culcsteps);
            textBox(3, "The conciousness discussion was so fascinating, you almost missed how uncomfortable Jordan felt because their ex was also there. Awkward.");
            nextBtn2.position(60, 550);
            nextBtn2.show();
            nextBtn2.mousePressed(() => {
                nextBtn2.hide();
                neuScene = 44;
            });
            break;
        case 43: // Good Ending
            background(schoolPhoto);
            textBox(3, "Jordan went with you to the party, your mission was a success! Congratulations on your new budding relationship, if you could " +
                "only see Cupid now.");
            break;
        case 44: // Neutral Ending
            background(schoolPhoto);
            textBox(3, "Can't believe you fumbled this badly. Now look at you, alone at the party. Tragic indeed, better luck next time though.");
        case 45: // Bad Ending
            background(schoolPhoto);
            textBox(3, "Thank god you didn't go to the Chi Phi party at all. Jordan told everyone about your awful romantic skills, you have become " +
                "the laughing stock of GT. Cupid is weaping.");
            break;
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
    if (chara == 0) { // Narrator's textbox
        fill(179, 163, 105); // Gold colored text box
        stroke(178, 59, 30);
        rect(40, height / 1.45, width - 80, height / 3.75);

        fill(255); // White textbox
        textSize(20);
        noStroke();
        // textAlign(CENTER, CENTER);
        text(textString, width / 15, height / 1.35, width - 100, height - 40);
        stroke(253, 187, 199);
        // nextButton
    }

    if (chara == 1) { // Chad's textbox
        fill(0, 48, 87); // Navy Blue colored box
        stroke(178, 59, 30);
        rect(40, height / 1.45, width - 80, height / 3.75);

        fill(255); // White text
        textSize(20);
        noStroke();
        // textAlign(CENTER, CENTER);
        text(textString, width / 15, height / 1.35, width - 100, height - 40);
        stroke(253, 187, 199);
        // nextButton
    }

    if (chara == 2) { // narrator
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

    if (chara == 3) { // Jordan's textbox
        fill(255, 255, 255); // White colored box
        stroke(178, 59, 30);
        rect(40, height / 1.45, width - 80, height / 3.75);

        fill(0); // Black text
        textSize(20);
        noStroke();
        text(textString, width / 15, height / 1.35, width - 100, height - 40);
        stroke(253, 187, 199);
    }
}

function optButtons() {
    // need to implement buttons onClick
}

// need buttons for user input //
