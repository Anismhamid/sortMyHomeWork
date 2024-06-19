function chagedFlag() {
    var value = document.getElementById('userValue').value;
    switch (value) {
        case 'swiss':
            document.getElementById('img').src = '../works/Leason3/D/swiss.jpg'
            break;
        case 'tunisia':
            document.getElementById('img').src = '../works/Leason3/D/Flag_of_Tunisia.svg.png'
            break;
        default:
            document.getElementById('img').src = '../works/Leason3/D/Flag_of_Tunisia.svg.png'
            break;
    }
}