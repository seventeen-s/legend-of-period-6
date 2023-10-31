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
    "Hello. To play this game, click one of the two choice buttons below. Click [enter] while text is spelling out to skip to the end, click [enter] when there is no button to continue. When in a battle, use [w], [a], [s], [d], or the arrow keys to move the heart. Click the fight, act, or heal button. This will cost {Energy} which is gained by surviving the attack long enough. The next attack will automatically play when you energy is below 5. Fighting or acting also decreases your HP by one. Acting increases the chance to end the battle. You are a human, let us begin...",
    "You are in the ruins of the old monster kingdom. You encounter many people, some don't care about you, others despise you with their soul. What would you like to do?",
    "Audrreem, the former queen of the underground blocks the door leading to freedom! She says you will be killed if you go past the door. What will you do?",
    "Upon exiting the ruins, you enter the wonderful world of snow. You meet Seven, a funny little skeleton violinist. You also meet his friend, Rease, a tall skeleton who loves spaghetti and aspires to be part of the ROYAL GUARD. What shall you do?",
    "Rease blocks the way, attempting to capture you and send you to the capitol, where you will be annihilated for your SOUL. What will you do now?",
    "After a skeleTON of fun, you enter a dim area lit by mushrooms and full of waterfalls. You meet the Christy, a lizard-like monster with no arms.                                 Christy is a DIE-HARD Anarch fan (I wonder what that is?). Choose...",
    "Anarch, the leader of the ROYAL GUARD and a fish monster, blocks your way with the Violin Bow. Regardless of what you choose, it'll be interesting...",
    "You see an orphanage full of monster children. The orchestra music the oprhans are playing can be heard through the walls. Would you like to call an airstrike down on the children?",
    'You see a octopus strapped to the table. "HELP," it shouts. What would you like to do.',
    "Hayhayl, a lizard like scientist introduces himself to you. Along with him, you encounter O0S10, Feur's robotic creation. The descision has been made before.",
    "Maxwell Muffet Jr. IV unleashes his fury on you! Act quick!",
    "O0S10 invites you to his show, where you are trapped until someone dies...",
    "The Core... It's the final stretch....",
    "Seven judges you for all of you actions.",
    "After your long journey, you encounter the King of all Monsters, get ready for a BOSS FIGHT because here comes... Aeloc...",
    "You escaped the underground.",
    "I am CHARA. The demon that resides in every single one of your SOULs. If you think you've won, you are wrong, for I am the TRUE Winner.",
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
