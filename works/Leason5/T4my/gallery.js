let images = [
    '../works/Leason5/T4my/1.jpeg',
    '../works/Leason5/T4my/2.jpeg',
    '../works/Leason5/T4my/3.jpeg',
    '../works/Leason5/T4my/4.jpeg'
];
let mainImage = document.getElementById('main-pic');
let imageIndex = 0;

function back() {
    if (imageIndex > 0) {
        imageIndex--;
    } else {
        imageIndex = images.length - 1;
    }
    updateGallery();
}

function next() {
    if (imageIndex < images.length - 1) {
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    updateGallery();
}

function updateGallery() {
    mainImage.src = images[imageIndex];
}


