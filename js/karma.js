let gMsg = 0;
let bMsg = 0;
let total = 0;
let goodMsg = 0;
let one = document.getElementById("one");
let two = document.getElementById("two");
let boss = "none";

function gType() {
    if (i < msg[c + good].length) {
        console.log("I-value:" + i);
        txt.innerHTML += msg[c].charAt(i);
        i++;
        setTimeout(gType, 1);
    } else {
        console.log("message length: " + msg[c + good].length);
        i = 0;
        ws = -1;
        skipVar = true;
        console.log("ws: " + ws);
        console.log("txtBox Length gFunc: " + txt.innerHTML.length);
        console.log("actualTxt length gFunc:  " + msg[c].length);
    }
}
function bType() {
    if (i < msg[c].length) {
        txt.innerHTML += msg[c].charAt(i);
        i++;
        txt.style.color = "red";
        setTimeout(bType, 1);
    } else {
        i = 0;
        ws = -1;
        skipVar = true;
        console.log("ws: " + ws);
        console.log("textBox-value: " + txt.innerHTML.length);
        console.log("Actual Text Length: " + msg[c].length);
        console.log("c-value: " + c);
    }
}


function karmaCounter(k) {
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
    skipVar = false;
    lmit = -1;
    // setBackground();
    //e++;

    if (bad == 14) {
        runType = "Genocide";
    } else if (good == 14) {
        runType = "Pacifist";
    } else if (bad == 13) {
        runType = "Seriously? You failed the genocide route."
    } else if (good == 13) {
        runType = "Almost Pacifist";
    } else {
        runType = "Neutral";
    }

    if (k) {
        console.log("G" + c);
        console.log("c:" + c);
        console.log("e" + e);
        c = goodMsg + 17 + good;
        good++;
        total++;
        txt.innerHTML = "";
        if (e == 14) {
            let fade = 1;
            //console.log("bad: " + bad);
            boss = "asgore";
            document.getElementById("storyDiv").style.backgroundColor = "black";
            document.getElementById("storyDiv").style.width = "100%";
            document.getElementById("storyDiv").style.height = "100%";
            function fader() {
                if (fade > 0) {
                    document.getElementById("storyDiv").style.opacity -= 0.1;
                    fade -= 0.1;
                    setTimeout(fader, 100);
                } else {
                    document.getElementById("fightDiv").style.display = "block";
                    document.getElementById("storyDiv").style.display = "none";
                    startBattle();
                }
            }
            fader();
        }
        gType();
    } else if (!k) {
        console.log("B" + c);
        c = 30;
        bad++;
        total++;
        txt.innerHTML = "";
        if (e == 6 && bad == 6) {
            let fade = 1;
            //console.log("bad: " + bad);
            boss = "undyne";
            document.getElementById("storyDiv").style.backgroundColor = "black";
            document.getElementById("storyDiv").style.width = "100%";
            document.getElementById("storyDiv").style.height = "100%";
            function fader() {
                if (fade > 0) {
                    document.getElementById("storyDiv").style.opacity -= 0.1;
                    fade -= 0.1;
                    setTimeout(fader, 100);
                } else {
                    document.getElementById("fightDiv").style.display = "block";
                    document.getElementById("storyDiv").style.display = "none";
                    startBattle();
                }
            }
            fader();

        } else if (e == 13 && bad == 13) {
            let fade = 1;
            //console.log("bad: " + bad);
            boss = "sans";
            window.alert("you're gonna have a REAL bad time...");
            document.getElementById("storyDiv").style.backgroundColor = "black";
            document.getElementById("storyDiv").style.width = "100%";
            document.getElementById("storyDiv").style.height = "100%";
            function fader() {
                if (fade > 0) {
                    document.getElementById("storyDiv").style.opacity -= 0.1;
                    fade -= 0.1;
                    setTimeout(fader, 100);
                } else {
                    document.getElementById("fightDiv").style.display = "block";
                    document.getElementById("storyDiv").style.display = "none";
                    startBattle();
                }
            }
            fader();
        } else if (e == 14) {
            let fade = 1;
            //console.log("bad: " + bad);
            boss = "asgore";
            document.getElementById("storyDiv").style.backgroundColor = "black";
            document.getElementById("storyDiv").style.width = "100%";
            document.getElementById("storyDiv").style.height = "100%";
            function fader() {
                if (fade > 0) {
                    document.getElementById("storyDiv").style.opacity -= 0.1;
                    fade -= 0.1;
                    setTimeout(fader, 100);
                } else {
                    document.getElementById("fightDiv").style.display = "block";
                    document.getElementById("storyDiv").style.display = "none";
                    startBattle();
                }
            }
            fader();
        }
        bType();
    }
    if (boss == "undyne") {
        bossHP = 100;
        document.getElementById("actButton").style.display = "none";
    } else if (boss == "sans") {
        bossHP = 500;
        document.getElementById("actButton").style.display = "none";
    } else if (boss == "asgore") {
        bossHP = 350;
        document.getElementById("actButton").style.display = "block";
    }
}


function choiceOne() {
    console.log("Good: " + good);
    karmaCounter(true);
    shown = false;
}

function choiceTwo() {
    console.log("Bad: " + bad);
    karmaCounter(false);
    shown = false;
}
