let images = [
    '1.jpg',
    '3.jpg',
    '6.jpg',
    '8.jpg'
]

let box = document.querySelector('#box');
let imageIndex = 0;

box.innerHTML += `
<div style="width:626px;height:500px;">
<img id="mainImage" style="width:100%;display: block;" src="${images[imageIndex]}"></img>
</div>
`;

box.innerHTML += `<div style="display:flex;">`;

for (let i = 0; i < images.length; i++) {
    box.innerHTML += `
    <img style="width:150px;height: 150px;object-fit: fill;
    margin: 5px 2px;"
    src="${images[i]}">
    </img>
    `;
}
box.innerHTML += `</div>`;

box.innerHTML += ` 
    <div style="width:600px;display: flex; justify-content: space-between; margin-top: 10px;">
        <button type='button' onclick="backImage()" id='back'>Back</button>
        <button type='button' onclick="nextImage()" id='next'>Next</button>
    </div>
`;



function backImage() {
    if (imageIndex > 0) {
        imageIndex--;
        updateImage();
    } else {
        imageIndex = images.length -1;
        updateImage();
    }
}
function nextImage() {
    if (imageIndex < images.length - 1) {
        imageIndex++;
        updateImage();
    } else {
        imageIndex = 0; 
        updateImage();
    }
}

function updateImage() {
    let mainImage = document.querySelector('#mainImage');
    mainImage.src = images[imageIndex];
}



