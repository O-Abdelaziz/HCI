function getRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function changeColor(element) {
    element.style.backgroundColor = getRandomColor();
}

function addSquare() {
    var newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.style.backgroundColor = getRandomColor();
    newSquare.onclick = function() {
        changeColor(this);
    };
    document.querySelector('.container').appendChild(newSquare);
}