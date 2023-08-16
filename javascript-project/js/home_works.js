const gmailInput = document.querySelector('#gmail_input')
const gmailCheck = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
    const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailCheck.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = 'Верный Gmail адрес'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerHTML = 'Не корректный адрес Gmail'
        gmailResult.style.color = 'red'
    }
}



//
// const parentBlock = document.querySelector('.parent_block');
// const childBlock = document.querySelector('.child_block');
//
// function moveBlock(position) {
//     if (position <= parentBlock.offsetWidth - childBlock.offsetWidth) {
//         childBlock.style.left = position + 'px';
//         setTimeout(() => moveBlock(position + 1), 10);
//     } else {
//         console.log("Движение завершено");
//     }
// }
//
// moveBlock(0);
//
//
//

//
// const  box = document.querySelector('.child_block')
//
// let positionX = 0
// let positionY = 0
//
// const move = () => {
//     if (positionX < 448 && positionY === 0) {
//         positionX++
//         box.style.left = `${positionX}px`
//         setTimeout(move,1)
//     }else if (positionX >= 448 && positionY < 448) {
//         positionY++
//         box.style.top = `${positionY}px`
//         setTimeout(move, 1)
//     }
// }
//
// move()
//



const box = document.querySelector('.child_block')

let positionX = 0
let positionY = 0
let maxX = 448
let maxY = 448

const move = () => {
    if (positionX < maxX && positionY === 0) {
        positionX++
        box.style.left = positionX + 'px'
        setTimeout(move, 1)
    } else if (positionX >= maxX && positionY < maxY) {
        positionY++
        box.style.top = positionY + 'px'
        setTimeout(move, 1)
    } else if (positionY >= maxY && positionX > 0) {
        positionX--
        box.style.left = positionX + 'px'
        setTimeout(move, 1)
    } else if (positionX <= 0 && positionY > 0) {
        positionY--
        box.style.top = positionY + 'px'
        setTimeout(move, 1)
    }
}

move()




const secondsDisplay = document.getElementById('seconds')
let intervalId
let elapsedTime = 0

const updateTimerDisplay = () => {
    secondsDisplay.textContent = elapsedTime++
}

document.getElementById('start').addEventListener('click', () => {
    intervalId = setInterval(updateTimerDisplay, 1000)
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(intervalId)
})

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(intervalId)
    elapsedTime = 0;
    secondsDisplay.textContent = '0'
})

document.getElementById('resume').addEventListener('click', () => {
    intervalId = setInterval(updateTimerDisplay, 1000)
})