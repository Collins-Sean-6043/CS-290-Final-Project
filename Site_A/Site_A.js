function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("image", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let chess_data = ev.dataTransfer.getData("image");
    ev.target.appendChild(document.getElementById(chess_data));
}

function TurnIdentifierUpdateFunction(ev) {
    if (document.getElementById("TurnIdentifier").innerHTML == "Active Player: White") {
        document.getElementById("TurnIdentifier").innerHTML = "Active Player: Black";
    }
    else {
        document.getElementById("TurnIdentifier").innerHTML = "Active Player: White";
    }
}
