function createBoard() {
    let board = document.querySelector(".board");
    board.classList.add('initiate');
    for (let i = 0; i < 9; i++) {
        let div = document.createElement('div');
        div.addEventListener('click', click);
        div.style.backgroundColor = '#fff';
        board.appendChild(div);
    }
    
}

function click() {
    pass
}

createBoard()