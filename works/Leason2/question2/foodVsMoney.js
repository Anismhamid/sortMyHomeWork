let food = 0;
let money = 100;
let get_food = document.getElementById('food').innerText = `${food}`
let get_money = document.getElementById('money').innerText = `${money}`

function buyFood() {
    money = money - 5;
    food = food + 2;
    document.getElementById('food').innerText = food
    document.getElementById('money').innerText = money
}


function askForMoney() {
    money = money + 5;
    food = food - 1;
    document.getElementById('food').innerText = food
    document.getElementById('money').innerText = money

}


function setName() {

    let prompt = window.prompt(
        'הזן שם שלך'
    );

    let get_name = document.getElementById('name');
    get_name.innerText = prompt;
}