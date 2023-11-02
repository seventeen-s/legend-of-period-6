let soul;
let obstacles = [];
let velocity = -5;
let altitude = 0;
let randomNumbers = [];
let attackSpeed = 30;
let rand = 0;
let life = randomNumbers[1];
//
//Buttons and info
let healthAmount = document.getElementById("playerHealth");
let bossHealthAmount = document.getElementById("bossHealth");
let energyAmount = document.getElementById("energy");
let info = document.getElementById("battleText");

let health = 10;
let energy = 1;
let bossHP = 20;
let bossMercy = 0;

let healFactor = 1;
let attack = 10;

function fight() {
    console.log("You Attacked");
    checkForEnergy();
    if (energy >= 5) {
        bossHP -= attack;
        energy -= 5;
    } else {
        info.innerHTML = "Learn How to Count!"
    }
}
function act() {
    checkForEnergy();
    console.log("You Acted");
    if (energy >= 10) {
        bossMercy += 7;
        energy -= 10;
    } else {
        info.innerHTML = "Max has good rythym... You can't count."
    }
}
function heal() {
    checkForEnergy();
    console.log("You Healed!");
    if (energy >= 5) {
        health += healFactor;
        energy -= 5;
        logHealth();
    } else {
        info.innerHTML = "You don't have enough energy!"
    }
}

function crashGame() {
    alert("Seven: If I can't win, I guess I'll just do this...");
    alert("It's too bad... We could have been friends.");
    window.location.reload();
}

function checkForHP() {
    if (bossHP <= 0 || bossMercy >= 100) {


            console.log("You actually won!");
            document.getElementById("fightDiv").style.display = "none";
            document.getElementById("storyDiv").style.opacity = "1";
            document.getElementById("storyDiv").style.display = "block";
        
    } else if (health <= 0) {
        //document.getElementById("gameOverDiv").style.display = "block";
        // document.getElementById("storyDiv").style.display = "none";
        document.body.style.cursor = "none";
        document.body.style.opacity = "0.5";
        setTimeout(stayDetermined, 5000);
        setTimeout(document.getElementById("fightDiv").style.display = "none", 5000);
        setTimeout(document.getElementById("gameOverDiv").style.display = "block", 5000);
    } else {
        setTimeout(checkForHP, 50);
    }
}

function logHealth() {
    healthAmount.innerHTML = "HP: " + health;
    setTimeout(logHealth, 750);
}
function logBossHealth() {
    bossHealthAmount.innerHTML = "Boss HP: " + bossHP;
    setTimeout(logBossHealth, 750);
}
function logEnergy() {
    energyAmount.innerHTML = "Energy: " + energy;
    setTimeout(logEnergy, 750);
}

//
function startBattle() {
    soul = new component(32, 32, "./graphics/New Piskel.png", 350, 150, "image");
    for (let i = 0; i < 6; i++) {
        randomNumbers.push(Math.floor(Math.random() * 6));
        life = randomNumbers[randomNumbers[randomNumbers.length - 1]];
    }
    console.log("this is life in start: " + life);
    box.start();
    logEnergy();
    logHealth();
    logBossHealth();
    checkForHP();
}

let box = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 700;
        this.canvas.height = 300;
        this.canvas.style.border = "5px solid white";
        this.canvas.style.backgroundColor = "black";
        this.context = this.canvas.getContext("2d");
        document.getElementById("canvasContainer").insertBefore(this.canvas, document.getElementById("canvasContainer").childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateBox, 20);
        window.addEventListener('keydown', function (v) {
            box.keys = (box.keys || []);
            box.keys[v.keyCode] = true;
        })
        window.addEventListener('keyup', function (v) {
            box.keys[v.keyCode] = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function () {
        clearInterval(this.interval);
        //   let randomNumbers = [];
        for (let i = 0; i < 6; i++) {
            randomNumbers.push(Math.floor(Math.random() * 5) + 1);
            life = randomNumbers[rand];
            console.log("this is the life in stop.box: " + life);
        }
        rand++;
        health -= 1;
    }
}

function component(width, height, color, x, y, type) {
    this.type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.gravity = 0.05;
    this.gravitySpeed = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = box.context;
        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.hitBottom();
        this.hitTop();
        this.hitRight();
        this.hitLeft();
    }
    //Canvas Borders
    this.hitBottom = function () {
        let rockBottom = box.canvas.height - this.height;
        if (this.y > rockBottom) {
            this.y = rockBottom;
        }
    }
    this.hitTop = function () {
        let tippyTop = 0;
        //console.log("this is tippyTop: " + tippyTop);
        if (this.y < tippyTop) {
            this.y = tippyTop;
        }
    }
    this.hitRight = function () {
        let starboard = box.canvas.width - this.height;
        //console.log("this is starboard: " + starboard);
        if (this.x > starboard) {
            this.x = starboard;
        }
    }
    this.hitLeft = function () {
        let left = 0;
        //console.log("this is left: " + left);
        if (this.x < left) {
            this.x = left;
        }
    }
    //
    this.crashWith = function (otherobj) {
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}
//
//
//BossFights
function myBossFight() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap, length;
    for (p = 0; p < obstacles.length; p += 1) {
        if (soul.crashWith(obstacles[p])) {
            box.stop();
            return;
        }
    }
    //Attack Patterns
    function boneGap() {
        x = box.canvas.width;
        attackSpeed = 100;
        minHeight = 20;
        maxHeight = 280;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 40;
        maxGap = 60;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        obstacles.push(new component(10, height, "./graphics/bontack.png", x, 0, "image"));
        obstacles.push(new component(10, x - height - gap, "./graphics/bontack.png", x, height + gap, "image"));
    }
    function vertcalBoneGap() {
        y = box.canvas.height;
        x = box.canvas.width / 2;
        attackSpeed = 100;
        minLength = 100;
        maxLength = 480;
        length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        minGap = 40;
        maxGap = 60;
        altitude = -5;
        attackSpeed = 20;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1));
        obstacles.push(new component(length, 10, "./graphics/bontack.png", 0, y, "image"));
        obstacles.push(new component(x - length - gap, 10, "./graphics/bontack.png", length + gap + x, y, "image"));
    }
    function vertcalBoneGapHard() {
        y = box.canvas.height;
        x = box.canvas.width / 2;
        attackSpeed = 100;
        minLength = 100;
        maxLength = 480;
        length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        minGap = 40;
        maxGap = 60;
        altitude = -5;
        velocity += 0.3141596269;
        attackSpeed = 20;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1));
        obstacles.push(new component(length, 10, "./graphics/bontack.png", 0, y, "image"));
        obstacles.push(new component(x - length - gap, 10, "./graphics/bontack.png", length + gap + x, y, "image"));
    }
    function eigthNottack() {
        x = box.canvas.width;
        y = Math.floor(Math.random() * box.canvas.height + 1);
        attackSpeed = 10;
        //     velocity = -5;
        obstacles.push(new component(10, 10, "./graphics/eigth-note.png", x, y, "image"));
    }
    function eigthNottackOmni() {
        x = Math.floor(Math.random() * box.canvas.width + 1);
        y = box.canvas.height;
        attackSpeed = 30;
        velocity = -5;
        altitude = -3;
        obstacles.push(new component(10, 10, "./graphics/eigth-note.png", x, y, "image"));
    }
    box.clear();
    box.frameNo += 1;
    if (box.frameNo == 1 || everyinterval(attackSpeed)) {
        if (life == 1) {
            boneGap();
        } else if (life == 2) {
            verticalBoneGap();
        } else if (life == 3) {
            verticalBoneGapHard();
        } else if (life == 4) {
            eigthNottack();
        } else if (life == 5) {
            eigthNottackOmni();
            eigthNottack();
        } else if (life == 0) {
            eigthNottackOmni();
            eigthNottack();
        }
    }
    for (p = 0; p < obstacles.length; p += 1) {
        obstacles[p].x += velocity;
        obstacles[p].y += altitude;
        obstacles[p].update();
    }

}
//UNDYNE
function undyneBossFight() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (p = 0; p < obstacles.length; p += 1) {
        if (soul.crashWith(obstacles[p])) {
            box.stop();
            console.log("DUI");
            return;
        }
    }
    //Attack Patterns
    function rightBowSlice() {
        /*x = box.canvas.width;
        minHeight = 0;
        maxHeight = 300;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 40;
        maxGap = 60;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        obstacles.push(new component(10, height, "./graphics/bontack.png", x, 0, "image"));
        obstacles.push(new component(10, x - height - gap, "./graphics/bontack.png", x, height + gap, "image"));*/
        x = -64;
        y = Math.floor(Math.random() * box.canvas.height + 1);
        attackSpeed = 30;
        velocity = 5;
        obstacles.push(new component(200, 11, "./graphics/violin-bow-inverted.png", x, y, "image"));


    }
    function leftBowSlice() {
        x = box.canvas.width;
        y = Math.floor(Math.random() * box.canvas.height + 1);
        attackSpeed = 30;
        velocity = -5;
        obstacles.push(new component(200, 11, "./graphics/violin-bow.png", x, y, "image"));

    }
    function fish() {
        //   x = Math.floor(Math.random() * box.canvas.width + 1);
        //  y = box.canvas.height;
        // altitude = 5;
        attackSpeed = 100;
        x = box.canvas.width;
        y = Math.floor(Math.random() * box.canvas.height + 1);

        velocity = -5;
        obstacles.push(new component(200, 126, "./graphics/fish.png", x, y, "image"));

    }
    function invertedFish() {
        attackSpeed = 100;
        // x = Math.floor(Math.random() * box.canvas.width + ) + 200;
        //y = box.canvas.height - box.canvas.height / 2;
        x = -200;
        y = Math.floor(Math.random() * box.canvas.height + 1);

        velocity = 5;
        obstacles.push(new component(200, 126, "./graphics/invert-fish.png", x, y, "image"));

    }
    box.clear();
    box.frameNo += 1;
    if (box.frameNo == 1 || everyinterval(attackSpeed)) {
        if (life == 1) {
            leftBowSlice();
            //     console.log("random integer: " + random);
        } else if (life == 2) {
            rightBowSlice();
            //     console.log("random integer: " + random);
        } else if (life == 3) {
            leftBowSlice();
            rightBowSlice();
            //     console.log("random integer: " + random);
        } else if (life == 4) {
            fish();
            console.log("its raining fish");
            //      console.log("random integer: " + random);
        } else if (life == 5) {
            invertedFish();
            console.log("its errupting fish");
            //      console.log("random integer: " + random);
        } else if (life == 0) {
            invertedFish();
            leftBowSlice();
        }
    }
    for (p = 0; p < obstacles.length; p += 1) {
        obstacles[p].x += velocity;
        obstacles[p].y += altitude;
        obstacles[p].update();
    }

}
//Asgore. I'm almost done!!!!
function asgoreBossFight() {
    let x, height, gap, minHeight, maxHeight, minGap, maxGap, length;
    for (p = 0; p < obstacles.length; p += 1) {
        if (soul.crashWith(obstacles[p])) {
            box.stop();
            return;
        }
    }
    //Attack Patterns
    function verticalSword() {
        y = box.canvas.height;
        x = box.canvas.width / 2;
        attackSpeed = 100;
        minLength = 100;
        maxLength = 480;
        length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        minGap = 40;
        maxGap = 60;
        altitude = -5;
        attackSpeed = 20;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1));
        obstacles.push(new component(length, 10, "./graphics/sword.png", 0, y, "image"));
        obstacles.push(new component(x - length - gap, 10, "./graphics/swordInvert.png", length + gap + x, y, "image"));
    }
    function verticalSwordHard() {
        y = box.canvas.height;
        x = box.canvas.width / 2;
        attackSpeed = 100;
        minLength = 100;
        maxLength = 480;
        length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
        minGap = 40;
        maxGap = 60;
        altitude = -5;
        velocity += 0.3141596269;
        attackSpeed = 20;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1));
        obstacles.push(new component(length, 10, "./graphics/sword.png", 0, y, "image"));
        obstacles.push(new component(x - length - gap, 10, "./graphics/swordInvert.png", length + gap + x, y, "image"));
    }
    function fire() {
        x = box.canvas.width;
        y = Math.floor(Math.random() * box.canvas.height + 1);
        attackSpeed = 10;
        velocity = -5;
        altitude = 0;
        obstacles.push(new component(10, 10, "./graphics/fireball.png", x, y, "image"));
    }
    function fireOmni() {
        x = Math.floor(Math.random() * box.canvas.width + 1);
        y = box.canvas.height;
        attackSpeed = 30;
        //  velocity = -5;
        altitude = -3;
        obstacles.push(new component(10, 10, "./graphics/fireball.png", x, y, "image"));
    }
    box.clear();
    box.frameNo += 1;
    if (box.frameNo == 1 || everyinterval(attackSpeed)) {
        if (life == 1) {
            verticalSword();
            //    fire();
        } else if (life == 2) {
            fire();
            fireOmni();
        } else if (life == 3) {
            verticalSwordHard();
            //   fire();
        } else if (life == 4) {
            fire();
        } else if (life == 5) {
            //    fire();
            verticalSwordHard();
        } else if (life == 0) {
            fire();
        }
    }
    for (p = 0; p < obstacles.length; p += 1) {
        obstacles[p].x += velocity;
        obstacles[p].y += altitude;
        obstacles[p].update();
    }

}
//Update Box (don't touch)
function updateBox() {
    // box.clear();
    console.log("updating the box 11");
    box.frameNo += 1;
    if (boss == "sans") {
        myBossFight();
    } else if (boss == "undyne") {
        undyneBossFight();
    } else if (boss == "asgore") {
        asgoreBossFight();
    }
    soul.speedX = 0;
    soul.speedY = 0;

    if (box.keys && box.keys[37]) { soul.speedX = -5; }
    if (box.keys && box.keys[39]) { soul.speedX = 5; }
    if (box.keys && box.keys[38]) { soul.speedY = -5; }
    if (box.keys && box.keys[40]) { soul.speedY = 5; }

    if (box.keys && box.keys[65]) { soul.speedX = -5; }
    if (box.keys && box.keys[68]) { soul.speedX = 5; }
    if (box.keys && box.keys[87]) { soul.speedY = -5; }
    if (box.keys && box.keys[83]) { soul.speedY = 5; }

    soul.newPos();
    soul.update();
    //Energy Tracker
    energy = Math.floor(box.frameNo / 50);
}

function checkForEnergy() {
    if (energy < 5) {
        box.stop();
        box.clear();
        box = {
            canvas: document.createElement("canvas"),
            start: function () {
                this.canvas.width = 700;
                this.canvas.height = 300;
                this.canvas.style.border = "5px solid white";
                this.canvas.style.backgroundColor = "black";
                this.context = this.canvas.getContext("2d");
                document.getElementById("canvasContainer").insertBefore(this.canvas, document.getElementById("canvasContainer").childNodes[0]);
                this.frameNo = 0;
                this.interval = setInterval(updateBox, 20);
                window.addEventListener('keydown', function (v) {
                    box.keys = (box.keys || []);
                    box.keys[v.keyCode] = true;
                })
                window.addEventListener('keyup', function (v) {
                    box.keys[v.keyCode] = false;
                })
            },
            clear: function () {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            },
            stop: function () {
                clearInterval(this.interval);
                health -= 1;
            }
        };
        soul = {};
        obstacles = [];
        document.getElementById("canvasContainer").innerHTML = "";
        startBattle();
    } else {
        setTimeout(checkForEnergy, 500);
    }
}

function everyinterval(n) {
    if ((box.frameNo / n) % 1 == 0) { return true; }
    return false;
}
