function appendChar(char) {
document.getElementById('result').value += char
}



function clearing() { document.getElementById('result').value = '' }



let ew = document.getElementById('result').value
function showResult() {
    let ex = document.getElementById('result').value
    let res = eval(ex)
    try {
        ex.value = res

    } catch (error) {
        ex.value = 'Error'
    }
}
function mm(){
    Math.sin(ew)
}