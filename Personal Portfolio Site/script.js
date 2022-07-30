const timeline = document.querySelector('.timeline');

function createTimeLine(...args) {
    let choice = args;
    let n = choice.length;
    const mainLine = document.createElement('div');
    mainLine.className = 'mainline';
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
    timeline.append(mainLine);
}

createTimeLine('Education', 'Experience', 'Hobbies');