const container = document.querySelector('.container');
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    let gridSize = prompt('Enter the grid size: ');
    grid(gridSize);
})

function grid(size) {
    let amount = size * size;
    for(let i = 0; i < amount; i++) {
        const square = document.createElement('div');
        square.style.border = '2px solid black';
        square.classList.add('square');
        container.appendChild(square);
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    }
}


