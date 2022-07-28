let player = 1;
let tempBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];


function createBoard() {
    player = 1;
    tempBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let board = document.querySelector(".board");
    board.className = "board";
    board.innerHTML = "";
    if (!board.classList.contains('initiate')) {board.classList.add('initiate');};
    Array.from(board.querySelectorAll('div')).forEach(x => x.remove());
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        div.addEventListener('click', () => {
            if (tempBoard[i] !== 0 || checkBoard()) return;
            tempBoard[i] = player;
            switchPlayer();
            div.append(createObj(player));
            if (checkBoard()) gameOver();
        });
        div.style.backgroundColor = '#fff';
        board.appendChild(div);
    }
    
}

switchPlayer = () => player = player === 1? 2: 1 ; 
function checkBoard() {
    return checkDiagonal() || checkHorizontal() || checkVertical()
}
checkHorizontal = () => {
    for (let i = 0; i < 9; i+= 3) {
        if (tempBoard[i] === tempBoard[i + 1] && tempBoard[i + 1] === tempBoard[i + 2] && tempBoard[i] !== 0) return true;
    }
    return false;
}
checkVertical = () => {
    for (let i = 0; i < 3; i++) {
        if (tempBoard[i] === tempBoard[i + 3] && tempBoard[i + 3] === tempBoard[i + 6] && tempBoard[i] !== 0) return true;
    }
    return false;
}
checkDiagonal = () => {
    let p = [[0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < 2; i ++) {
        if (tempBoard[p[i][0]] === tempBoard[p[i][1]] && tempBoard[p[i][1]] === tempBoard[p[i][2]] && tempBoard[p[i][0]]!== 0) return true;
    }
    return false;
}
    

function createObj(player) {
    return player === 1? circle(): cross();
}

function circle() {
    outer = document.createElement('div');
    inner = document.createElement('div');
    outer.classList.add('outerCircle');
    inner.classList.add('innerCircle');
    outer.append(inner);
    return outer;
}

function cross() {
    first = document.createElement('div');
    second = document.createElement('div');
    first.classList.add('first');
    second.classList.add('second');
    final = document.createElement('div');
    final.classList.add('final')
    final.style
    final.append(first);
    final.append(second);
    return final;
}

gameOver = () => {
    let board = document.querySelector('.board');
    board.className = "board over"
    board.innerHTML = "<h1>Game Over!</h1>";
}