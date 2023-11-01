console.log("sans: why are you here?");
let i = 0;
let c = 0;
let sw = true;
let ws = -1;
let txt = document.getElementById("storyText");
let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let shown = false;
let e = 0;
let skipVar = true;
let runType = "Neutral";
let good = 0;
let bad = 0;

let msg = [
    "You are human. You are here. You are Fr..",
    "You are in the ruins of the old monster kingdom. You encounter many people, some don't care about you, others despise you with their soul. What would you like to do?",
    "Audrreem, the former queen of the underground blocks the door leading to freedom! She says you will be killed if you go past the door. What will you do?",
    "Upon exiting the ruins, you enter the wonderful world of snow. You meet Seven, a funny little skeleton violinist. You also meet his friend, Rease, a tall skeleton who loves spaghetti and aspires to be part of the ROYAL GUARD. What shall you do?",
    "Seare blocks the way, attempting to capture you and send you to the capitol, where you will be annihilated for your SOUL. What will you do now?",
    "After a skeleTON of fun, you enter a dim area lit by mushrooms and full of waterfalls. You meet the Christy, a lizard-like monster with no arms.                                 Christy is a DIE-HARD Anarch fan (I wonder what that is?). Choose...",
    "Anarch, the leader of the ROYAL GUARD and a fish monster, blocks your way with the Violin Bow. Regardless of what you choose, it'll be interesting...",
    "You see an orphanage full of monster children. The orchestra music the oprhans are playing can be heard through the walls. Would you like to call an airstrike down on the children?",
    'You see a octopus strapped to the table. "HELP," it shouts. What would you like to do.',
    "Hayhayl, a lizard like scientist introduces himself to you. Along with him, you encounter O0S10, Feur's robotic creation. The descision has been made before.",
    "Maxwell Muffet Jr. IV unleashes his fury on you! Fuhuhuhuhu!",
    "O0S10 invites you to his show, where you are trapped until someone dies...",
    "The Core... It's the final stretch....",
    "Seven judges you for all of you actions.",
    "After your long journey, you encounter the King of all Monsters, get ready for a BOSS FIGHT because here comes... Aeloc...",
    "You escaped the underground.",
    "I am CHARA. The demon that resides in every single one of your SOULs. If you think you've won, you are wrong, for I am the TRUE Winner; entering your soul and controlling you.",
    "You complimented everyone.",
    "You asserted dominance in a kind way. As a result, they let you pass.",
    "You Talked Nicely.",
    "You complimented the food here.",
    "You befriended everyone",
    "You ran away with grace when you wanted to hurt someone.",
    "Everyone loves you due to your kindness",
    "If this were a show, you would be the main character due to your kindness.",
    "Seven smiles in the distance as you befriend everyone.",
    "Even I might manage a smile if you've gone this far...",
    "Everyone you have met has come to cheer you on! HAVE DETERMINATION!",
    "Almost there huh? You might be a fascade, but atleast you act nice.",
    'Guess you got the "good ending." Chara stares into your sould with something that is not dissappointment.',
    "You Chose Violence...",
];
let speed = 50;

function start() {
    btnOne.style.display = "none";
    btnTwo.style.display = "none";
    // console.log("start");
    if (i < msg[c].length && sw == true) {
        txt.innerHTML += msg[c].charAt(i);
        i++;
        setTimeout(start, speed);
    } else {
        i = 0;
        console.log(c);
    }
}
start();
function nextMsg() {
    // console.log("next");
    if (i < msg[c].length || txt.innerHTML <= msg[c].length) {
        txt.innerHTML += msg[c].charAt(i);
        i++;
        //     console.log(i);
        //     console.log(msg[c].length);
        setTimeout(nextMsg, speed);
    } else {
        console.log(c);
        ws++;
        i = 0;
        if (shown == true) {
            console.log('shown?');
            btnOne.style.display = "block";
            btnTwo.style.display = "block";
        }
    }
}

function skipMsg() {
    //  console.log("skip");
    if (i < msg[c].length) {
        txt.innerHTML = "";
        txt.innerHTML = msg[c];
        sw = false;
        //ws++;
        i = Infinity;

        console.log("txtBox Length skip: " + txt.innerHTML.length);
        console.log("actualTxt length skip:  " + msg[c].length);
    } else if (txt.length == msg[c].length) {
        console.log("txtBox Length: " + txt.innerHTML.length);
        console.log("actualTxt length:  " + msg[c].length);
        i = 0;
        return;
    }
}

document.addEventListener("keypress", function (event) {
    console.log("any key has been pressed!");
    if (event.keyCode == 13 && txt.innerHTML.length === msg[c].length && ws <= -1) {
        i = 0;
        e++;
        c = e;
        txt.innerHTML = "";
        txt.style.color = "white";
        //ws++;
        console.log("Enter Next");
        console.log("enter: " + shown);
        if (c < 15 && c >= 1) {
            shown = true;
        }
        nextMsg();
    } else if (event.keyCode == 13 && txt.innerHTML.length !== msg[c].length && skipVar /*&& c < 17*/) {
        console.log("Enter Skip");
        console.log("txtBox Length enter: " + txt.innerHTML.length);
        console.log("actualTxt length enter:  " + msg[c].length);
        console.log('c-value: ' + c);
        i = 0;
        skipMsg();
    }
});


//Choices do matter. Genocide is not the answer. Turn back now if you are seeing this.
let finalText = "Don't Give Up! Reload and Try Again, no matter how challenging it is. Stay Determined!";
let finalI = 0;
function stayDetermined() {
    if (finalI < finalText.length) {
        c = 30;
        document.getElementById("determination").innerHTML += finalText.charAt(finalI);
        // document.body.style.background = "black";
        finalI++;
        setTimeout(stayDetermined, 85);
    }
}
//change the button text
function changeButton() {
    if(e == 1) {
        btnOne.innerHTML = "Compliment Everyone you encounter!";
        btnTwo.innerHTML = "Kill them all...";
    } else if (e==2) {
        btnOne.innerHTML = "Comfort the Queen with kind words so she can let you pass!";
        btnTwo.innerHTML = "Kill her...";
    } else if (e==3) {
        btnOne.innerHTML = "Talk in a kind manner to everyone you encounter!";
        btnTwo.innerHTML = "Kill them all...";
    } else if (e==4) {
        btnOne.innerHTML = "Compliment the spaghetti master and befriend him!";
        btnTwo.innerHTML = "Kill him...";
    } else if(e==5) {
        btnOne.innerHTML = "Raise everyone's spirits with your charisma!";
        btnTwo.innerHTML = "Kill them all...";
    } else if (e==6) {
        btnOne.innerHTML = "Run away with grace knowing full well you will die if you fight her!";
        btnTwo.innerHTML = "Kill her...";
    } else if (e==7) {
        btnOne.innerHTML = "Enter the orphanage and comliment their music!";
        btnTwo.innerHTML = '"Yeah, the coordinates of the orphanage are..."';
    } else if (e==8) {
        btnOne.innerHTML = "Untie the octopus and let him go";
        btnTwo.innerHTML = "Use you nails to pinch his tentacles numb, then cut them off slowly to ensure maximum pain and torture...";
    } else if (e==9) {
        btnOne.innerHTML = "Bring some refreshments for the residents of this hot area!";
        btnTwo.innerHTML = "Knock them off into the lava...";
    } else if (e==10) {
        btnOne.innerHTML = "Do the Spider Dance!";
        btnTwo.innerHTML = "Kill him...";
    } else if (e==11) {
        btnOne.innerHTML = "Brag about how you won't get hit at all!";
        btnTwo.innerHTML = "Kill him...";
    } else if (e==12) {
        btnOne.innerHTML = "Progress through the 100 level dungeon found in the Core!";
        btnTwo.innerHTML = "Take the elevator up.";
    } else if(e==13) {
        btnOne.innerHTML = "Feel pity for the story he told.";
        btnTwo.innerHTML = "Brush off his short story and move on to the king.";
    } else if (e==14) {
        btnOne.innerHTML = "Good luck!";
        btnTwo.innerHTML = "You choice does not matter...";
    }
}
setInterval(changeButton, 500);
