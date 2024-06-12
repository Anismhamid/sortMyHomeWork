function chechGrades() {
    let num = document.getElementById('input').value;
    if (num >= 55) {
        document.getElementById('l3Q1Result').innerText = "you've passed the test";
        document.getElementById('l3Q1Result').style.color = 'green';

    } else {
        document.getElementById('l3Q1Result').innerText = "you've failed the test";
        document.getElementById('l3Q1Result').style.color = 'red';
    }
}