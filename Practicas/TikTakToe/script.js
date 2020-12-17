let currentPlayer = 0;
let actualGame = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function Escribir(cell) {

    const clickedCellIndex = parseInt(
        cell.getAttribute('data-cell-index')
    );

    //lleno la celda y el campo en el arreglo por jugador
    if (currentPlayer == 0) {

        cell.innerHTML += '<a class="escritura">X</a>';
        actualGame[clickedCellIndex] = 1;
        cell.classList.add("disabled");
        currentPlayer = 1;
        document.getElementById("currentPlayer").innerHTML = "Turno del jugador 2";
        checkGame(cell);

    } else {
        cell.innerHTML += '<a class="escritura">O</a>';
        actualGame[clickedCellIndex] = 2;
        cell.classList.add("disabled");
        currentPlayer = 0;
        document.getElementById("currentPlayer").innerHTML = "Turno del jugador 1";
        checkGame(cell);
    }

}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function restart() {
    var elements = document.getElementsByClassName("escritura");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    document.getElementById("currentPlayer").innerHTML = "Turno del jugador 1";

    var divs = document.querySelectorAll('.cell');
    for (var j = 0; j < divs.length; j++) {
        divs[j].classList.remove('disabled');
    }

    actualGame = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    currentPlayer = 0;
}

function checkGame(cell) {
    // let elements = document.getElementsByClassName("cell");

    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = actualGame[winCondition[0]];
        let b = actualGame[winCondition[1]];
        let c = actualGame[winCondition[2]];

        if (a == 1 && b == 1 && c == 1) {
            document.getElementById("currentPlayer").innerHTML = "Felicidades Jugador 1 has ganado";

            var divs = document.querySelectorAll('.cell');
            for (var j = 0; j < divs.length; j++) {
                divs[j].classList.add('disabled');
            }
        }

        if (a == 2 && b == 2 && c == 2) {
            document.getElementById("currentPlayer").innerHTML = "Felicidades Jugador 2 has ganado";

            var divs2 = document.querySelectorAll('.cell');
            for (var j2 = 0; j2 < divs2.length; j2++) {
                divs2[j2].classList.add('disabled');
            }
        }
    }
}