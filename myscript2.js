//Restart Game button

var restart = document.querySelector("#b");

//Game Squares

var squares = document.querySelectorAll('td');

//Clear all the squares

function clearBoard() {
    for (var i = 0;i< squares.length;i++) {
        squares[i].textContent = '';}
    }

restart.addEventListener('click',clearBoard);

//Check the square marker


function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if (this.textContent === 'X') {
        this.textContent = 'O';
    }else {
        this.textContent = '';
    }
}

for (var i = 0;i < squares.length; i++) {
    squares[i].addEventListener('click',changeMarker)
}

var header = document.querySelector("h1");

header.style.color = 'red';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeHeaderColor() {
    colorInput = getRandomColor()
    header.style.color = colorInput;
}

setInterval("changeHeaderColor()",500);