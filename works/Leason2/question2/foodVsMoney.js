let food = 0;
let money = 100;
let name = 'user';
let get_food = document.getElementById('food').innerText = `Food: ${food}`
let get_money = document.getElementById('money').innerText = `Money: ${money}`
let get_name = document.getElementById('name').innerText = `Name: ${name}`
function buyFood() {
    money = money - 5;
    food = food + 2;
    document.getElementById('food').innerText = `Food: ${food}`
    document.getElementById('money').innerText = `Money: ${money}`
}
function askForMoney() {
    money = money + 5;
    food = food - 1;
    document.getElementById('food').innerText = `Food: ${food}`
    document.getElementById('money').innerText = `Money: ${money}`

}