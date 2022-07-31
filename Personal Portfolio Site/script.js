const word = document.getElementById('wordtimeline');
const time = document.getElementById('about')
function createTimeLine(...args) {
    let choice = args;
    let n = choice.length;
    let mainLine = document.createElement('div');
    let triangle = document.createElement('div');
    triangle.className = 'triangle';
    triangle.style.left = '100%';
    mainLine.className = 'mainline';
    mainLine.setAttribute('id', 'timeline')
    mainLine.append(triangle);
    for (let i = 0; i < n; i++){
        let sideLine = document.createElement('div');
        let text = document.createElement('div');
        sideLine.className = 'sideline';
        sideLine.style.setProperty('--position', `${(100/(n + 1))*(i + 1)}%`);
        text.style.setProperty('--position', `${(100/(n + 1))*(i + 1)}%`);
        text.className = 'text';
        text.innerText = choice[i];
        mainLine.append(sideLine, text);
    }

    // have to use className; cannot compare objects directly
    if (word.nextSibling.className !== mainLine.className) {
        word.insertAdjacentElement('afterend', mainLine);
        time.removeChild(word);
    }
}


word.addEventListener('click', () => 
createTimeLine('Education', 'Experience', 'Hobbies'));
