

let colorsName = ['red', 'green', 'blue', 'purple', 'yellow', 'magenta'];
let container = document.querySelector('#container');

container.style.width = '80vw';
container.style.margin = '0 auto';
container.style.backgroundColor = 'antiquewhite';

for (let i = 0; i < colorsName.length; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    button.style.backgroundColor = colorsName[i];
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.margin = '50px auto';
    button.style.border = 'none';
    button.style.borderRadius = '80px 20px 80px 20px';
    button.style.cursor = 'pointer';

    button.textContent = colorsName[i];
    container.appendChild(button);
}
