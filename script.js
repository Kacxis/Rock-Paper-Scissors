        let gamenumber = 0;
        let player = 0, computer = 0;

        
        function check() {
            document.getElementById("player-select").style.display = "none";
            document.getElementById("computer-select").style.display = "none";
        }
function rock() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("player-select").src="photo/rock-p.png";
    document.getElementById("player-select").style.display = "block";
    setTimeout(function() {
    gamenumber = Math.floor(Math.random() * (3)) + 1;
    if (gamenumber == 1) {
        document.getElementById("computer-select").src="photo/rock.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (gamenumber == 2) {
        computer++;
        document.getElementById("computer").value = computer;
        document.getElementById("computer-select").src="photo/paper-c.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (gamenumber == 3) {
        player++;
        document.getElementById("player").value = player;
        document.getElementById("computer-select").src="photo/scissors.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (player == 5) {
        reset();
        alert("Game Over! Player Wins");
    }
    if (computer == 5) {
        reset();
        alert("Game Over! Computer Wins");
    }
}, 1000);

setTimeout(function() {
    document.getElementById("buttons").style.display = "block";
    document.getElementById("player-select").style.display = "none";
    document.getElementById("computer-select").style.display = "none";
}, 2000);
}

function paper() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("player-select").src="photo/paper-p.png";
    document.getElementById("player-select").style.display = "block";
    setTimeout(function() {
    gamenumber = Math.floor(Math.random() * (3)) + 1;
    if (gamenumber == 3) {
        computer++;
        document.getElementById("computer").value = computer;
        document.getElementById("computer-select").src="photo/scissors.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (gamenumber == 2) {
        document.getElementById("computer-select").src="photo/paper-c.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (gamenumber == 1) {
        player++;
        document.getElementById("player").value = player;
        document.getElementById("computer-select").src="photo/rock.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (player == 5) {
        reset();
        alert("Game Over! Player Wins");  
    }
    if (computer == 5) {
        reset();
        alert("Game Over! Computer Wins");
    }
}, 1000);
setTimeout(function() {
    document.getElementById("buttons").style.display = "block";
    document.getElementById("player-select").style.display = "none";
    document.getElementById("computer-select").style.display = "none";
}, 2000);
}
function scissors() {
    document.getElementById("buttons").style.display = "none";
    document.getElementById("player-select").src="photo/scissors-p.png";
    document.getElementById("player-select").style.display = "block";
    setTimeout(function() {
    gamenumber = Math.floor(Math.random() * (3)) + 1;
    if (gamenumber == 1) {
        computer++;
        document.getElementById("computer").value = computer;
        document.getElementById("computer-select").src="photo/rock.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (gamenumber == 2) {
        player++;
        document.getElementById("player").value = player;
        document.getElementById("computer-select").src="photo/paper-c.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (gamenumber == 3) {
        document.getElementById("computer-select").src="photo/scissors.png";
        document.getElementById("computer-select").style.display = "block";
    }
    if (player == 5) {
        reset();
        alert("Game Over! Player Wins");
    }
    if (computer == 5) {
        reset();
        alert("Game Over! Computer Wins");
    }
}, 1000);
setTimeout(function() {
    document.getElementById("buttons").style.display = "block";
    document.getElementById("player-select").style.display = "none";
    document.getElementById("computer-select").style.display = "none";
}, 2000);
}

function reset() {
    player = 0, computer = 0;
    document.getElementById("player").value = player;
    document.getElementById("computer").value = computer;
    document.getElementById("player-select").style.display = "none";
    document.getElementById("computer-select").style.display = "none";
}