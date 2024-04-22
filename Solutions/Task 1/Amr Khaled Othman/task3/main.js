const divo = document.querySelectorAll("div")[0];

const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

divo.style.backgroundColor = randomColor;
divo.addEventListener('click', () => {
    const newDiv = document.createElement('div');

    const newRandomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    newDiv.style.backgroundColor = newRandomColor;
    
    newDiv.textContent = newRandomColor;
    
    document.body.appendChild(newDiv);
});