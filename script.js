let button = document.querySelector('button');
let size = 16;

button.addEventListener('click', ()=>{
    askUserForGridSize();
});

function askUserForGridSize(){
    size = prompt('Please enter your desired grid size between 1 and 100');
    if (size > 100 || size < 1){
        alert('Please enter a number between 1 and 100')
        size = prompt('Please enter your desired grid size between 1 and 100');
    }
}