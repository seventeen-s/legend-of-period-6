function setBackground() {
    if (e <= 2) {
        document.body.style.backgroundImage = "url('./graphics/ruins.png')";
        //   setTimeout(setBackground, 500);
    } else if (e <= 4) {
        document.body.style.backgroundImage = "url('./graphics/snowdin.jpg')";
    } else if (e <= 7) {
        document.body.style.backgroundImage = "url('./graphics/waterfall.jpg')";
    } else if (e <= 10) {
        document.body.style.backgroundImage = "url('./graphics/hotland.jpg')";
    } else if (e <= 11) {
        document.body.style.backgroundImage = "url('./graphics/stage.jpg')";
    } else if (e <= 12) {
        document.body.style.backgroundImage = "url('./graphics/core.gif')";
    } else if (e <= 13) {
        document.body.style.backgroundImage = "url('./graphics/judgementHall.jpg')";
    } else if (e <= 14) {
        document.body.style.backgroundImage = "url('./graphics/throneRoom.jpg')";
    } else if (e <= 15) {
        document.body.style.backgroundColor = "black";
    }
}
setInterval(setBackground, 500);
