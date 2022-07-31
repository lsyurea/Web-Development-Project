setInterval(moveHand, 1000);

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}


function setClock() {
    for (let i = 1; i < 12; i++) {
        let div = document.querySelector(`.num${i}`)
        let angle = 360/12 * i
        div.style.setProperty('--rotate', `${angle}deg`);
    }
}

setClock();

function toRoman () {
    for (let i = 1; i < 13; i++) {
        let div = document.querySelector(`.num${i}`);
        div.innerText = romanize(i);
    }
}

function toDeci () {
    for (let i = 1; i< 13; i++) {
        let div = document.querySelector(`.num${i}`);
        div.innerText = i;
    }
}

let buttonRoman = document.querySelector('.button1');
let buttonDeci = document.querySelector('.button2');
buttonRoman.addEventListener('click', toRoman);
buttonDeci.addEventListener('click', toDeci);





let minute = document.querySelector('.minute');
let hour = document.querySelector('.hour');
let second = document.querySelector('.second');

function moveHand() {
    let curTime = new Date()
    secondAngle = curTime.getSeconds()/60 * 360;
    minuteAngle = curTime.getMinutes()/60 *360 + secondAngle/60;
    hourAngle = curTime.getHours()/12 * 360 + minuteAngle/60;
    second.style.setProperty('--rotate', `${secondAngle}deg`);
    minute.style.setProperty('--rotate', `${minuteAngle}deg`);
    hour.style.setProperty('--rotate', `${hourAngle}deg`);
    // console.log([curTime.getHours(), curTime.getMinutes(), curTime.getSeconds()]);
}

moveHand();