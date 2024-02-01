let button = document.querySelector('button');
const gridContainer = document.querySelector('.gridContainer')
let size = 16;
const gridHeight = 600;
const gridWidth = 600;
let boxSize = gridHeight/size;

button.addEventListener('click', ()=>{
    clearGrid()
    generateGrid(askUserForGridSize())
});

function askUserForGridSize(){
    size = prompt('Please enter your desired grid size between 1 and 100');
    while (size > 100 || size < 1){
        alert('Please enter a number between 1 and 100')
        size = prompt('Please enter your desired grid size between 1 and 100');
    }
    boxSize = gridHeight/size;
    return size;
}

function generateGrid(size){

    //calc size for rows and columns in those rows
    
    //add rows
    for (let rowIndex = 0; rowIndex < size; rowIndex++){
        let row = document.createElement('div');
        row.style.cssText = `background-color: white; width: ${gridWidth}px; height: ${boxSize}px;`
        row.classList.add('row');
        gridContainer.appendChild(row);
        //add columns in rows
        for (let columnIndex = 0; columnIndex < size; columnIndex++){
            let column = document.createElement('div');
            column.style.cssText = `background-color: white; height: ${boxSize}px; width: ${boxSize}px;`
            column.classList.add('box')
            column.addEventListener('mouseenter',(event)=>{
                event.target.style.backgroundColor = `${getRandomRGBValue()}`;
            });
            row.appendChild(column);
        }
    }
}

function clearGrid(){
    gridContainer.innerHTML = ''
}
function getRandomInteger(maximum){
    return parseInt(Math.floor(Math.random() * maximum));
}

function getRandomRGBValue(){
    return 'rgb(' + getRandomInteger(255) + ',' + getRandomInteger(255) + ', ' + getRandomInteger(255) + ')'
}