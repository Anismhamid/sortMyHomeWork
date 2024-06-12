function checkGrades() {
    var num = document.getElementById('inputs').value;
    var resultElement = document.getElementById('l3Q2Result');
    if (num > 100 || num < 0 || num == '') {
        resultElement.innerText = "Wrong input! Please try again";
        resultElement.style.color = '#5E5E5D';
    } else if (num <= 54) {
        resultElement.innerText = "You've failed the test";
        resultElement.style.color = 'red';
    } else if (num >= 55) {
        resultElement.innerText = "You've passed the test";
        resultElement.style.color = 'green';
    }
}